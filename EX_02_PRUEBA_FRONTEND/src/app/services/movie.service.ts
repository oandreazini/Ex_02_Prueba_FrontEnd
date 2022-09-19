import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from "rxjs";
import { Movie } from '../models/movie.model';

const baseUrl = 'https://api.themoviedb.org/3/movie'


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http:HttpClient) { }

  getAll(): Observable<Movie[]> {
    return this.http.get<Movie[]>(baseUrl+"popular?api_key=a3b4db78a7732c4dcd1f27938e281b21&language=en-US&page=1");
  }

  get(id :any): Observable<Movie> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any>{
    return this.http.post(baseUrl, data);
  }

  update(id:any, data:any): Observable<any>{
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any>{
    return this.http.delete(`${baseUrl}/${id}`);
  }

  findByName(name: any): Observable<Movie[]>{
    return this.http.get<Movie[]>(`${baseUrl}?name=${name}`);
  }

}

