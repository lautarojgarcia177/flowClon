import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { DailyMotionService } from 'src/app/services/daily-motion.service';
import { Observable } from 'rxjs';
import { tap, pluck, map } from 'rxjs/operators';
import { TrendingVerifiedVideos, TrendingVideo } from 'src/app/models/trendingVideos';
import {ThumbnailSize} from 'src/app/components/video-thumbnail/video-thumbnail.component';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  public _hideControls = true;
  index = 1;
  thumbnailSize = ThumbnailSize.extraLarge;
  config: SwiperConfigInterface = {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    effect: 'fade',
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  };

  slides$ = this.dailyMotionProvider.trendingVerifiedVideos$
                                          .pipe(
                                            pluck('list'),
                                            map( v => v.map(_v => _v.id))
                                            );

  constructor(private dailyMotionProvider: DailyMotionService) { }

  ngOnInit(): void {
  }

  showControls() {
    document.getElementById('big-carousel-next-btn').classList.remove('hide');
    document.getElementById('big-carousel-prev-btn').classList.remove('hide');
  }

  hideControls() {
    document.getElementById('big-carousel-next-btn').classList.add('hide');
    document.getElementById('big-carousel-prev-btn').classList.add('hide');
  }

}
