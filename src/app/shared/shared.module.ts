import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../core/material/material.module';

import { ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';
import { ModalComponent } from './modal/modal.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { HeaderComponent } from './header/header.component';
import { FormUserComponent } from './form-user/form-user.component';
import { PassagensComponent } from './passagens/passagens.component';
import { ContainerComponent } from './container/container.component';
import { PromocoesComponent } from './promocoes/promocoes.component';
import { FormBuscaComponent } from './form-busca/form-busca.component';
import { CardBuscaComponent } from './card-busca/card-busca.component';
import { DropdownUfComponent } from './dropdown-uf/dropdown-uf.component';
import { DepoimentosComponent } from './depoimentos/depoimentos.component';
import { BotaoControleComponent } from './botao-controle/botao-controle.component';
import { CardDepoimentoComponent } from './card-depoimento/card-depoimento.component';
import { LabelComponent } from './form-busca/filtros-complementares/label/label.component';
import { PrecosComponent } from './form-busca/filtros-complementares/precos/precos.component';
import { SeletorPassageiroComponent } from './seletor-passageiro/seletor-passageiro.component';
import { ParadasComponent } from './form-busca/filtros-complementares/paradas/paradas.component';
import { CompanhiasComponent } from './form-busca/filtros-complementares/companhias/companhias.component';
import { FiltrosComplementaresComponent } from './form-busca/filtros-complementares/filtros-complementares.component';

@NgModule({
  declarations: [
    HeaderComponent,
    BannerComponent,
    PromocoesComponent,
    DepoimentosComponent,
    CardComponent,
    ContainerComponent,
    FooterComponent,
    CardBuscaComponent,
    CardDepoimentoComponent,
    FormBuscaComponent,
    ModalComponent,
    BotaoControleComponent,
    DropdownUfComponent,
    SeletorPassageiroComponent,
    FormUserComponent,
    PassagensComponent,
    ParadasComponent,
    CompanhiasComponent,
    PrecosComponent,
    LabelComponent,
    FiltrosComplementaresComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    BannerComponent,
    PromocoesComponent,
    DepoimentosComponent,
    CardComponent,
    ContainerComponent,
    FooterComponent,
    CardBuscaComponent,
    CardDepoimentoComponent,
    FormBuscaComponent,
    ModalComponent,
    BotaoControleComponent,
    DropdownUfComponent,
    SeletorPassageiroComponent,
    FormUserComponent,
    PassagensComponent,
    ParadasComponent,
    CompanhiasComponent,
    PrecosComponent,
    LabelComponent,
    FiltrosComplementaresComponent
  ]
})

export class SharedModule { }
