import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../core/material/material.module';

import { BuscaComponent } from './busca.component';
import { PassagemComponent } from './passagem/passagem.component';
import { LabelComponent } from './filtros-complementares/label/label.component';
import { PrecosComponent } from './filtros-complementares/precos/precos.component';
import { ParadasComponent } from './filtros-complementares/paradas/paradas.component';
import { PassagemDestaqueComponent } from './passagem-destaque/passagem-destaque.component';
import { CompanhiasComponent } from './filtros-complementares/companhias/companhias.component';
import { FiltrosComplementaresComponent } from './filtros-complementares/filtros-complementares.component';


@NgModule({
  declarations: [
    BuscaComponent,
    ParadasComponent,
    CompanhiasComponent,
    PrecosComponent,
    LabelComponent,
    FiltrosComplementaresComponent,
    PassagemDestaqueComponent,
    PassagemComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    BuscaComponent,
    ParadasComponent,
    CompanhiasComponent,
    PrecosComponent,
    LabelComponent,
    FiltrosComplementaresComponent,
    PassagemDestaqueComponent,
    PassagemComponent
  ]
})

export class BuscaModule { }
