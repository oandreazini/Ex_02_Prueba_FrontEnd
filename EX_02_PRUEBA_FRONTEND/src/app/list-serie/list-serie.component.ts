import { Component, OnInit } from '@angular/core';
import { Serie } from '../models/serie.model';
import { SerieService } from '../services/serie.service';

@Component({
  selector: 'app-list-serie',
  templateUrl: './list-serie.component.html',
  styleUrls: ['./list-serie.component.css']
})
export class ListSerieComponent implements OnInit {
  series?: Array<any> = [];
  serie: any;
  serie2: any;
  serie3: any;
  serie4: any;

  currentSerie: Serie = {};
  currentIndex = -1;




  title = '';

  constructor(private serieService: SerieService ) { }

  ngOnInit(): void {
    this.retrieveSerie();
  }

  retrieveSerie(): void{
    this.serieService.getAll()
    .subscribe(
      data => {
        this.series = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }

  refreshList(): void{
    this.retrieveSerie();
    this.currentSerie = {};
    this.currentIndex = -1;
  }

  setActiveSerie(char: Serie, index: number): void {
    this.currentSerie = char;
    this.currentIndex = index;
  }
  searchTitle(): void{
    this.currentSerie = {};
    this.currentIndex = -1;

    this.serieService.findByName(this.title)
    .subscribe(
      data => {
        this.series = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }

}
