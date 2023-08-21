import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EstadosBr } from '../types/type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EstadosBrService {
  private apiUrl: string = environment.apiUrl;
  private cache$?: Observable<EstadosBr[]>;

  constructor( private http: HttpClient ) { }

  listar(): Observable<EstadosBr[]> {
    if (!this.cache$) {
      this.cache$ = this.requestEstados().pipe(
        shareReplay(1)
      );
    }

    return this.cache$;
  }

  private requestEstados(): Observable<EstadosBr[]> {
    return this.http.get<EstadosBr[]>(`${this.apiUrl}/estados`);
  }
}
