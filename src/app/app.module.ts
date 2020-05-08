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
import { PointerCursorDirective } from './directives/pointer-cursor.directive';
import { LoadingComponent } from './components/loading/loading.component';
import { BootstrapNavbarComponent } from 'src/app/components/bootstrap-navbar/bootstrap-navbar.component';
import { VideoDataComponent } from './pages/video-data/video-data.component';
import { InicioCarouselComponent } from './components/inicio-carousel/inicio-carousel.component';
import { LiveVideosComponent } from './components/live-videos/live-videos.component';
import { DurationPipe } from './pipes/duration.pipe';
import { LiveVideoThumbnailComponent } from './components/live-videos/live-video-thumbnail/live-video-thumbnail.component';
import { FavoritoComponent } from './components/favorito/favorito.component';
import { TimestampPipe } from './pipes/timestamp.pipe';
import { SplitPipe } from './pipes/split.pipe';
import { TagsPipe } from './pipes/tags.pipe';
import { NavbarScrollDirective } from './directives/navbar-scroll.directive';
import { ReduceStringLengthPipe } from './pipes/reduce-string-length.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ChannelsComponent,
    ChannelComponent,
    VideoComponent,
    VideoThumbnailComponent,
    LoadingComponent,
    FooterComponent,
    InicioComponent,
    SafePipe,
    PointerCursorDirective,
    BootstrapNavbarComponent,
    VideoDataComponent,
    InicioCarouselComponent,
    LiveVideosComponent,
    DurationPipe,
    LiveVideoThumbnailComponent,
    FavoritoComponent,
    TimestampPipe,
    SplitPipe,
    TagsPipe,
    NavbarScrollDirective,
    ReduceStringLengthPipe
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
