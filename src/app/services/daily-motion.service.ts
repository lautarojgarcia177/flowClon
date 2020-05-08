import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, Subject, BehaviorSubject } from 'rxjs';
import { Channels, Channel } from 'src/app/models/channels';
import { combineLatest } from 'rxjs';
import { shareReplay, catchError, tap, multicast , map} from 'rxjs/operators';
import { VideosList, Video, VideoDetail } from 'src/app/models/videos';
import { TrendingVerifiedVideos } from '../models/trendingVideos';

@Injectable({
  providedIn: 'root'
})
export class DailyMotionService {
  
  private endpoint = 'https://api.dailymotion.com';
  private token = 'ajJFXQwWGUNYVF8PWkZUAVQGTVkFFRoIBlYDB1sIC1AH';

  public trendingVerifiedVideos$ = this.http.get<TrendingVerifiedVideos>('https://api.dailymotion.com/videos?sort=trending&flags=verified')
                                          .pipe(
                                            catchError(this.handleError)
                                          );

  public popularChannels$ = this.http.get<Channels>(this.endpoint + '/channels&sort=popular&limit=6')
                              .pipe(
                                shareReplay(1),
                                catchError(this.handleError)
                              );

  public liveVideos$ = this.http.get<any>(
      'https://api.dailymotion.com/videos?flags=live'
    ).pipe(
      tap(res => console.log('trending live videos', res)),
      catchError(this.handleError)
    );

  constructor(private http: HttpClient) {}

  public getChannelVideos(channelId: string): Observable<VideosList> {
    return this.http.get<VideosList>(this.endpoint + '/channel/' + channelId + '/videos')
            .pipe(
              catchError(this.handleError)
            );
  }

  public getVideo(videoId: string): Observable<VideoDetail> {
     return this.http.get<VideoDetail>(this.endpoint + '/video/' + videoId + '?fields=thumbnail_360_url%2Cviews_total%2Ctitle%2Cid%2Cdescription%2Cthumbnail_240_url%2Cthumbnail_1080_url%2Cduration%2Ccreated_time%2Cexplicit%2Ctags%2Cowner.username%2Cchannel&localization=es_AR')
                                  .pipe(
                                    catchError(this.handleError)
                                  );
  }

  private handleError(err: any) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err .error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }

}
