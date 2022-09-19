import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-info-movie',
  templateUrl: './info-movie.component.html',
  styleUrls: ['./info-movie.component.css'],
})
export class InfoMovieComponent implements OnInit {
  movie: any = null;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {}

  ngOnInit(): void {
    var id = this.route.snapshot.paramMap.get('id');
    this.movieService.get(id).subscribe((response) => {
      this.movie = response;
    });
  }
}
