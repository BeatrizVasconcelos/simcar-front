import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Requerimento } from '../models/requerimento';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RequerimentoService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Requerimento[]> {
    return this.http.get<Requerimento[]>(`${environment.api.baseUrl}/requerimentos`)
  }

  findById(id: number): Observable<Requerimento> {
    return this.http.get<Requerimento>(`${environment.api.baseUrl}/requerimentos/${id}`)
  }
}
