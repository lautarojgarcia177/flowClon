import { Component, OnInit } from '@angular/core';
import { DailyMotionService } from 'src/app/services/daily-motion.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap, tap, map } from 'rxjs/operators';
import { VideoDetail } from 'src/app/models/videos';
import { DomSanitizer, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  video$: Observable<VideoDetail> = this.route.paramMap.pipe(
    switchMap( params => {
      this.videoId = String(params.get('id'));
      return this.dailyMotionProvider.getVideo(this.videoId);
    }),
    tap(
      v => {
        const dangerousUrl = 'https://www.dailymotion.com/embed/video/' + v.id;
        this.videoEmbedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(dangerousUrl);
      }
    )
  );

  videoId: string;
  videoEmbedUrl: SafeResourceUrl;

  constructor(private dailyMotionProvider: DailyMotionService,
              private route: ActivatedRoute,
              private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

}
