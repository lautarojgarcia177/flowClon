import { VideoDetail } from 'src/app/models/videos';
import { Channel } from './../../models/channels';
import { FavoritoComponent } from './../../components/favorito/favorito.component';
import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { DailyMotionService } from 'src/app/services/daily-motion.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, combineLatest } from 'rxjs';
import { switchMap, tap, map, pluck, shareReplay, reduce, mapTo } from 'rxjs/operators';
import { DomSanitizer, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video-data',
  templateUrl: './video-data.component.html',
  styleUrls: ['./video-data.component.scss'],
})
export class VideoDataComponent implements OnInit {

  video$: Observable<VideoDetail> = this.route.paramMap.pipe(
    switchMap( params => {
      this.videoId = String(params.get('id'));
      return this.dailyMotionProvider.getVideo(this.videoId);
    }),
    shareReplay(1),
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

  channel$: Observable<Channel> = combineLatest(this.video$, this.channelsList$)
                                    .pipe(
                                      map(([v,cs]) => {
                                        cs = cs.filter( c => c.id === v.channel);
                                        return cs[0];
                                      })
                                    );
  channel: Channel;

  videoId: string;
  videoEmbedUrl: SafeResourceUrl;

  videoUsername: string;

  isFavourite = false;

  video: VideoDetail;

  @ViewChild(FavoritoComponent) private favComponent: FavoritoComponent; 

  constructor(private dailyMotionProvider: DailyMotionService,
              private route: ActivatedRoute,
              private router: Router,
              private sanitizer: DomSanitizer) { }


  ngOnInit(): void {
  }

  onFavouriteChange(event) {
    console.log('favourite change', event);
  }

  navigateBack() {
    this.router.navigate(['']);
  }
}
