import { Component, Input, OnInit } from '@angular/core';
import { EstadosBrService } from 'src/app/core/services/estados-br.service';
import { EstadosBr } from 'src/app/core/types/type';

@Component({
  selector: 'app-dropdown-uf',
  templateUrl: './dropdown-uf.component.html',
  styleUrls: ['./dropdown-uf.component.scss']
})
export class DropdownUfComponent implements OnInit {
  @Input() label: string = '';
  @Input() iconePrefixo: string = '';

  estadosBr: EstadosBr[] = [];

  options = [];

  constructor ( private estadosBrService: EstadosBrService ) {

  }
  ngOnInit(): void {
    this.estadosBrService.listar()
      .subscribe(dados => {
        this.estadosBr = dados
        console.log(this.estadosBr)
      })
  }
}
