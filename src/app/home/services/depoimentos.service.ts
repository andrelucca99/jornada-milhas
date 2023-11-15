import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Depoimento } from '../../core/types/type';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DepoimentosService {

  private apiUrl: string = environment.apiUrl;

  constructor( private http: HttpClient ) { }

  listar(): Observable<Depoimento[]> {
    return this.http.get<Depoimento[]>(`${this.apiUrl}/depoimentos`);
  }
}
