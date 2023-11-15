import { authGuard } from './autenticacao/auth.guard';
import { LoginComponent } from './autenticacao/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { BuscaComponent } from './busca/busca.component';
import { PerfilComponent } from './autenticacao/perfil/perfil.component';
import { CadastroComponent } from './autenticacao/cadastro/cadastro.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'cadastro',
    component: CadastroComponent,
  },
  {
    path: 'perfil',
    component: PerfilComponent,
    canActivate: [authGuard],
  },
  {
    path: 'busca',
    component: BuscaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
