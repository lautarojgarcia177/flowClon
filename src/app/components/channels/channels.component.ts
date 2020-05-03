import { Component, OnInit } from '@angular/core';
import { DailyMotionService } from 'src/app/services/daily-motion.service';

import { map, toArray, tap, pluck } from 'rxjs/operators';

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.scss']
})
export class ChannelsComponent implements OnInit {

  channelsList$ = this.dailyMotionProvider.popularChannels$
  .pipe(
    pluck('list')
  );

  constructor(private dailyMotionProvider: DailyMotionService) { }

  ngOnInit(): void {
  }

}
