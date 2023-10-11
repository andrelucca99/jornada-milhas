import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { DadosBusca, Resultado } from '../types/type';

@Injectable({
  providedIn: 'root',
})
export class PassagensService {
  apiUrl: string = environment.apiUrl;
  constructor(private httpClient: HttpClient) {}

  getPassagens(search: DadosBusca): Observable<Resultado> {
    const params = this.converterParamentroParaString(search);
    return this.httpClient.get<Resultado>(this.apiUrl + '/passagem/search?' + params);
  }

  converterParamentroParaString(busca: DadosBusca) {
    const query = Object.entries(busca)
      .map( ([key, value]) => {
        if (!value) {
          return ''
        }
        return `${key}=${value}`
      })
      .join('&')
      return query
  }
}
