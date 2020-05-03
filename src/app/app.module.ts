import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SwiperModule } from 'ngx-swiper-wrapper';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ChannelsComponent } from './components/channels/channels.component';
import { ChannelComponent } from './components/channels/channel/channel.component';
import { VideoComponent } from './components/video/video.component';
import { VideoThumbnailComponent } from './components/video-thumbnail/video-thumbnail.component';
import { FooterComponent } from './components/footer/footer.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { SafePipe } from './pipes/safe.pipe';
import { DragOnTouchDirective } from './directives/drag-on-touch.directive';
// import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ChannelsComponent,
    ChannelComponent,
    VideoComponent,
    VideoThumbnailComponent,
//    LoadingComponent
    FooterComponent,
    InicioComponent,
    SafePipe,
    DragOnTouchDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
