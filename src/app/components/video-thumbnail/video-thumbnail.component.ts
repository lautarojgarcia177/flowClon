import { Component, OnInit, Input } from '@angular/core';
import { DailyMotionService } from 'src/app/services/daily-motion.service';
import { VideoDetail } from 'src/app/models/videos';
import {pipe} from 'rxjs';
import { tap } from 'rxjs/operators';
import { NetflixCarouselService } from 'src/app/services/netflix-carousel.service';
import {ViewChild, ElementRef} from '@angular/core';

export enum ThumbnailSize {
  small = 1, medium, extraLarge
}

@Component({
  selector: 'app-video-thumbnail',
  templateUrl: './video-thumbnail.component.html',
  styleUrls: ['./video-thumbnail.component.scss']
})
export class VideoThumbnailComponent implements OnInit {

  @Input() imgSize: ThumbnailSize = ThumbnailSize.extraLarge;
  img: string;
  @Input() videoId: string;
  video: VideoDetail;
  @Input() isChannelVideoThumbnail = false;
  @Input() isInicioCarousel = false;
  isHovered = false;
  @ViewChild('thumbnail') thumbnailRef: ElementRef;

  swiperTouch$ = this.netflixCarouselService.swiperTouch$;

  constructor(private dailyMotionProvider: DailyMotionService,
              private netflixCarouselService: NetflixCarouselService) { }

  ngOnInit(): void {
    this.dailyMotionProvider.getVideo(this.videoId)
                              .subscribe(video => {
                                this.video = video;
                                if (this.imgSize === ThumbnailSize.small) {
                                  this.img = video.thumbnail_240_url;
                                }
                                if (this.imgSize === ThumbnailSize.medium) {
                                  this.img = video.thumbnail_360_url;
                                }
                                if (this.imgSize === ThumbnailSize.extraLarge) {
                                  this.img = video.thumbnail_1080_url;
                                }
                              });

    this.swiperTouch$.subscribe(dragEvent => this.onDrag());
  }

  onHover() {
    this.isHovered = true;
    try {
      this.thumbnailRef.nativeElement.classList.remove('grabbing-cursor');
      this.thumbnailRef.nativeElement.classList.add('pointer-cursor');
    } catch(err) {}
  }

  onMouseLeave() {
    this.isHovered = false;
    try {
      this.thumbnailRef.nativeElement.classList.remove('pointer-cursor');
      this.thumbnailRef.nativeElement.classList.remove('grabbing-cursor');
    } catch(err) {}
  }

  onDrag()
  {
    try {
      this.thumbnailRef.nativeElement.classList.remove('pointer-cursor');
      this.thumbnailRef.nativeElement.classList.add('grabbing-cursor');
    } catch( err) {
      //do nth
    }
  }

}
