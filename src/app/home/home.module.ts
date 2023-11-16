import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeRoutingModule } from './home-rounting.module';
import { SharedModule } from "src/app/shared/shared.module";
import { MaterialModule } from "src/app/core/material/material.module";

import { HomeComponent } from "./home.component";
import { PromocoesComponent } from './promocoes/promocoes.component';
import { DepoimentosComponent } from './depoimentos/depoimentos.component';

@NgModule({
  declarations: [
    HomeComponent,
    PromocoesComponent,
    DepoimentosComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    HomeRoutingModule
  ],
  exports: [
    HomeComponent
  ]
})

export class HomeModule { }
