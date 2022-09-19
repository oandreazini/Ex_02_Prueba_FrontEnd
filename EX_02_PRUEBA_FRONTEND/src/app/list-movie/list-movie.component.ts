import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie.model';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-list-movie',
  templateUrl: './list-movie.component.html',
  styleUrls: ['./list-movie.component.css']
})
export class ListMovieComponent implements OnInit {
  movies?: Array<any> = [];
  movie1: any;
  movie2: any;
  movie3: any;
  movie4: any;

  currentMovie: Movie = {};
  currentIndex = -1;
  title = '';

  constructor(private movieService: MovieService ) { }

  ngOnInit(): void {
    this.retrieveMovie();
  }

  retrieveMovie(): void{
    this.movieService.getAll()
    .subscribe(
      data => {
        this.movies = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }

  refreshList(): void{
    this.retrieveMovie();
    this.currentMovie = {};
    this.currentIndex = -1;
  }

  setActiveMovies(char: Movie, index: number): void {
    this.currentMovie = char;
    this.currentIndex = index;
  }
  searchTitle(): void{
    this.currentMovie = {};
    this.currentIndex = -1;

    this.movieService.findByName(this.title)
    .subscribe(
      data => {
        this.movies = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }

}
