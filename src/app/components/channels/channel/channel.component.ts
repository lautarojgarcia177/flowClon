import { Component, OnInit, Input } from '@angular/core';
import { Channel } from 'src/app/models/channels';
import { Observable } from 'rxjs';
import { DailyMotionService } from 'src/app/services/daily-motion.service';
import { tap, pluck } from 'rxjs/operators';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { Video } from 'src/app/models/videos';
import { ThumbnailSize } from '../../video-thumbnail/video-thumbnail.component';
import { Router } from '@angular/router';
import { NetflixCarouselService } from 'src/app/services/netflix-carousel.service';

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.scss']
})
export class ChannelComponent implements OnInit {

  @Input() channel: Channel;
  thumbnailSize = ThumbnailSize.small;

  videos: Video[];

  config: SwiperConfigInterface = {
    slidesPerView: 5,
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  };

  constructor(private dailyMotionProvider: DailyMotionService,
              private router: Router,
              private netflixCarouselProvider: NetflixCarouselService) { }

  ngOnInit(): void {
     this.dailyMotionProvider.getChannelVideos(this.channel.id)
      .pipe(
        pluck('list')
      ).subscribe( videos => this.videos = videos);
  }

  watchVideo(videoId) {
    this.router.navigate(['video', videoId]);
  }
  
  onTouchStart(lautaroSwiper) {
    this.netflixCarouselProvider.onTouchStarted();
  }
}
