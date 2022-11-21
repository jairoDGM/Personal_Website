import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './componentes/about-me/about-me.component';
import { BlogComponent } from './componentes/blog/blog.component';
import { ServicesComponent } from './componentes/services/services.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    BlogComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
