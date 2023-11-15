import { FormControl } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

import { Observable, map, startWith } from 'rxjs';

import { EstadosBr } from '../../core/types/type';
import { EstadosBrService } from '../../core/services/estados-br.service';

@Component({
  selector: 'app-dropdown-uf',
  templateUrl: './dropdown-uf.component.html',
  styleUrls: ['./dropdown-uf.component.scss'],
})
export class DropdownUfComponent implements OnInit {
  @Input() label: string = '';
  @Input() iconePrefixo: string = '';
  @Input() placeholder: string = '';
  @Input() control!: FormControl;

  estadosBr: EstadosBr[] = [];
  filteredOptions$?: Observable<EstadosBr[]>;

  constructor(private estadosBrService: EstadosBrService) {}

  ngOnInit(): void {
    this.estadosBrService.listar().subscribe((dados) => {
      this.estadosBr = dados;
      console.log(this.estadosBr);
    });
    this.filteredOptions$ = this.control.valueChanges.pipe(
      startWith(''),
      map((value) => this.filtrarUfs(value))
    );
  }

  filtrarUfs(value: string | EstadosBr): EstadosBr[] {
    const nomeBr = typeof value === 'string' ? value : value?.nome;
    const valorFiltrado = nomeBr?.toLowerCase();
    const result = this.estadosBr.filter((estado) =>
      estado.nome.toLowerCase().includes(valorFiltrado)
    );
    return result;
  }

  displayFn(estado: EstadosBr): string {
    return estado && estado.nome ? estado.nome : '';
  }
}
