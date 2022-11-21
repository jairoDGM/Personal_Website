import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './componentes/about-me/about-me.component';
import { BlogComponent } from './componentes/blog/blog.component';
import { ServicesComponent } from './componentes/services/services.component';

const routes: Routes = [
  {path:"",component:AboutMeComponent},
  {path:"blog",component:BlogComponent},
  {path:"services",component:ServicesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
