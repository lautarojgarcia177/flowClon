import { VideoDataComponent } from './pages/video-data/video-data.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { VideoComponent } from './components/video/video.component';


const routes: Routes = [
  { path: 'video/:id/play', component: VideoComponent},
  { path: 'video/:id', component: VideoDataComponent},
  { path: 'inicio', component: InicioComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
