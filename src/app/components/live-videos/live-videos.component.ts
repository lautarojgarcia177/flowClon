import { NetflixCarouselService } from './../../services/netflix-carousel.service';
import { ThumbnailSize } from 'src/app/components/video-thumbnail/video-thumbnail.component';
import { DailyMotionService } from 'src/app/services/daily-motion.service';
import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { Router } from '@angular/router';
import { pluck } from 'rxjs/operators';

@Component({
  selector: 'app-live-videos',
  templateUrl: './live-videos.component.html',
  styleUrls: ['./live-videos.component.scss']
})
export class LiveVideosComponent implements OnInit {

  liveVideos$ = this.dailyMotionService.liveVideos$.pipe(pluck('list'));
  thumbnailSize = ThumbnailSize.medium;

  config: SwiperConfigInterface = {
    slidesPerView: 3,
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  };

  constructor(private dailyMotionService: DailyMotionService,
              private router: Router,
              private netflixCarouselProvider: NetflixCarouselService) { }

  ngOnInit(): void {
  }

  watchVideo(videoId) {
    this.router.navigate(['video', videoId]);
  }

  onTouchStart() {
    this.netflixCarouselProvider.onTouchStarted();
  }

}
