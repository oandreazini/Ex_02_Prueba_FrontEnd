import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListMovieComponent } from './list-movie/list-movie.component';
import { ListSerieComponent } from './list-serie/list-serie.component';
import { HomeComponent } from './home/home.component';
import { InfoMovieComponent } from './info-movie/info-movie.component';
import { InfoSerieComponent } from './info-serie/info-serie.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'list_movies',
    component: ListMovieComponent
  },
  {
    path:'list_series',
    component: ListSerieComponent
  },
  {
    path:'info_movie',
    component: InfoMovieComponent
  },
  {
    path:'info_serie',
    component: InfoSerieComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
