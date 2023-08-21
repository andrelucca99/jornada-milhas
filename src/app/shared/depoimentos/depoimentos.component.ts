import { Component } from '@angular/core';
import { DepoimentosService } from 'src/app/core/services/depoimentos.service';
import { Depoimento } from 'src/app/core/types/type';

@Component({
  selector: 'app-depoimentos',
  templateUrl: './depoimentos.component.html',
  styleUrls: ['./depoimentos.component.scss']
})
export class DepoimentosComponent {
  depoimentos: Depoimento[] = [];
  constructor ( private service: DepoimentosService ) {}

  ngOnInit(): void {
    this.service.listar().subscribe(
      res => {
        this.depoimentos = res;
      }
    )
  }
}
