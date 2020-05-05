import { Component, OnInit, Input } from '@angular/core';
import { DailyMotionService } from 'src/app/services/daily-motion.service';
import { VideoDetail } from 'src/app/models/videos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-carousel',
  templateUrl: './inicio-carousel.component.html',
  styleUrls: ['./inicio-carousel.component.scss']
})
export class InicioCarouselComponent implements OnInit {

  @Input() videoId: string;
  video: VideoDetail;

  constructor(private dailyMotionProvider: DailyMotionService,
              private router: Router) { }

  ngOnInit(): void {
    this.dailyMotionProvider.getVideo(this.videoId)
    .subscribe( video => {
      this.video = video;
      if (this.video.title.length > 80) {
        this.video.title = this.video.description.slice(0, 80) + '...';
      }
    });
  }

  reproducirVideo() {
    this.router.navigate(['video', this.videoId]);
  }

}
