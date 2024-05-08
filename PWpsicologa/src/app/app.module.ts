import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgImageSliderModule } from 'ng-image-slider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { CitaConsultaComponent } from './cita-consulta/cita-consulta.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { PerfilComponent } from './perfil/perfil.component';
import { RouterModule } from '@angular/router';
import { MisionVisionComponent } from './mision-vision/mision-vision.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    CitaConsultaComponent,
    SidenavComponent,
    PerfilComponent,
    MisionVisionComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    NgImageSliderModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path:'blog',component:BlogComponent},
      {path:'cita',component:CitaConsultaComponent},
      {path:'perfil',component:PerfilComponent},
      {path:'home',component:HomeComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
