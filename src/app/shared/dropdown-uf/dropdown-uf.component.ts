import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import { EstadosBrService } from 'src/app/core/services/estados-br.service';
import { EstadosBr } from 'src/app/core/types/type';

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

  filtrarUfs(value: string): EstadosBr[] {
    const valorFiltrado = value?.toLowerCase();
    const result = this.estadosBr.filter((estado) =>
      estado.nome.toLowerCase().includes(valorFiltrado)
    );
    return result;
  }
}
