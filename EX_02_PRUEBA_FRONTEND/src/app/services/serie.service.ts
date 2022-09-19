import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Serie } from '../models/serie.model';

const baseUrl = 'https://api.themoviedb.org/3/tv/'

@Injectable({
  providedIn: 'root'
})
export class SerieService {
  constructor(private http:HttpClient) { }

  getAll(): Observable<Serie[]> {
    return this.http.get<Serie[]>(baseUrl+ "popular?api_key=a3b4db78a7732c4dcd1f27938e281b21&language=en-US&page=1");
  }

  get(id :any): Observable<Serie> {
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

  findByName(name: any): Observable<Serie[]>{
    return this.http.get<Serie[]>(`${baseUrl}?name=${name}`);
  }
}
