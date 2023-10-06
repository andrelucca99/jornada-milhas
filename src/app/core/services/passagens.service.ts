import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { Resultado } from '../types/type';

@Injectable({
  providedIn: 'root',
})
export class PassagensService {
  apiUrl: string = environment.apiUrl;
  constructor(private httpClient: HttpClient) {}

  getPassagens(search: any): Observable<Resultado> {
    const params = search;
    return this.httpClient.get<Resultado>(this.apiUrl + '/passagem/search', {
      params,
    });
  }
}
