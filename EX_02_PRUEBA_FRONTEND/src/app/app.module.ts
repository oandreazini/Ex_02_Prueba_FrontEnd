import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ListMovieComponent } from './list-movie/list-movie.component';
import { ListSerieComponent } from './list-serie/list-serie.component';
import { InfoMovieComponent } from './info-movie/info-movie.component';
import { InfoSerieComponent } from './info-serie/info-serie.component';

import{HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ListMovieComponent,
    ListSerieComponent,
    InfoMovieComponent,
    InfoSerieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
