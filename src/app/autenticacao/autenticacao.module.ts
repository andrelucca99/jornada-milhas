import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../core/material/material.module';

import { LoginComponent } from './login/login.component';
import { PerfilComponent } from './perfil/perfil.component';
import { CadastroComponent } from './cadastro/cadastro.component';

@NgModule({
  declarations: [
    CadastroComponent,
    LoginComponent,
    PerfilComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    CadastroComponent,
    LoginComponent,
    PerfilComponent
  ]
})
export class AutenticacaoModule { }
