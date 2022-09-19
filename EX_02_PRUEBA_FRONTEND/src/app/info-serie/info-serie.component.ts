import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SerieService } from '../services/serie.service';

@Component({
  selector: 'app-info-serie',
  templateUrl: './info-serie.component.html',
  styleUrls: ['./info-serie.component.css']
})
export class InfoSerieComponent implements OnInit {
serie: any =  null;
  constructor(private route: ActivatedRoute, private seriesService: SerieService) { }

  ngOnInit(): void {

  var id = this.route.snapshot.paramMap.get('id');
  this.seriesService.get(id).subscribe((response) => {
    this.serie = response;
  });
}
}


