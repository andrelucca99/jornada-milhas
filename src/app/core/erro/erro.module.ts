import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ErroRoutingModule } from './erro-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';


@NgModule({
  declarations: [
    PaginaNaoEncontradaComponent
  ],
  imports: [
    CommonModule,
    ErroRoutingModule,
    SharedModule,
    RouterModule
  ]
})
export class ErroModule { }
