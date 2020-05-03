import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Video } from '../models/videos';

@Injectable({
  providedIn: 'root'
})
export class NetflixCarouselService {

  private swiperTouchSource = new Subject<boolean>();

  public swiperTouch$ = this.swiperTouchSource.asObservable();

  constructor() { }

  public onTouchStarted() {
    this.swiperTouchSource.next(true);
  }
}
