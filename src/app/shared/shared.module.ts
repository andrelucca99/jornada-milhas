import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../core/material/material.module';

import { CardComponent } from './card/card.component';
import { ModalComponent } from './modal/modal.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { HeaderComponent } from './header/header.component';
import { FormUserComponent } from './form-user/form-user.component';
import { ContainerComponent } from './container/container.component';
import { FormBuscaComponent } from './form-busca/form-busca.component';
import { CardBuscaComponent } from './card-busca/card-busca.component';
import { DropdownUfComponent } from './dropdown-uf/dropdown-uf.component';
import { BotaoControleComponent } from './botao-controle/botao-controle.component';
import { CardDepoimentoComponent } from './card-depoimento/card-depoimento.component';
import { SeletorPassageiroComponent } from './seletor-passageiro/seletor-passageiro.component';

@NgModule({
  declarations: [
    BannerComponent,
    CardComponent,
    CardBuscaComponent,
    CardDepoimentoComponent,
    ContainerComponent,
    DropdownUfComponent,
    FooterComponent,
    FormUserComponent,
    FormBuscaComponent,
    HeaderComponent,
    SeletorPassageiroComponent,
    ModalComponent,
    BotaoControleComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    BannerComponent,
    CardComponent,
    CardBuscaComponent,
    CardDepoimentoComponent,
    ContainerComponent,
    DropdownUfComponent,
    FooterComponent,
    FormUserComponent,
    FormBuscaComponent,
    HeaderComponent,
    SeletorPassageiroComponent,
    ModalComponent,
    BotaoControleComponent,
  ]
})

export class SharedModule { }
