import { FavoritoComponent } from './../../components/favorito/favorito.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DailyMotionService } from 'src/app/services/daily-motion.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap, tap, map, pluck } from 'rxjs/operators';
import { VideoDetail } from 'src/app/models/videos';
import { DomSanitizer, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video-data',
  templateUrl: './video-data.component.html',
  styleUrls: ['./video-data.component.scss']
})
export class VideoDataComponent implements OnInit {

  video$: Observable<VideoDetail> = this.route.paramMap.pipe(
    switchMap( params => {
      this.videoId = String(params.get('id'));
      return this.dailyMotionProvider.getVideo(this.videoId);
    }),
    tap(
      v => {
        const dangerousUrl = 'https://www.dailymotion.com/embed/video/' + v.id;
        this.videoEmbedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(dangerousUrl);
        this.videoUsername = v['owner.username'];
      }
    )
  );

  channelsList$ = this.dailyMotionProvider.popularChannels$
  .pipe(
    pluck('list')
  );

  videoId: string;
  videoEmbedUrl: SafeResourceUrl;

  videoUsername: string;

  isFavourite = false;

  @ViewChild(FavoritoComponent) private favComponent: FavoritoComponent; 

  constructor(private dailyMotionProvider: DailyMotionService,
              private route: ActivatedRoute,
              private sanitizer: DomSanitizer) { }


  ngOnInit(): void {
  }

  onFavouriteChange(event) {
    console.log('favourite change', event);
  }

}
