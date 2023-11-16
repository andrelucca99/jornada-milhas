import { Router } from '@angular/router';
import { Component } from '@angular/core';

import { PessoaUsuaria } from 'src/app/core/types/type';
import { FormularioService } from 'src/app/core/services/formulario.service';
import { CadastroService } from 'src/app/autenticacao/services/cadastro.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
})
export class CadastroComponent {
  perfilComponent = false;

  constructor(
    private formularioService: FormularioService,
    private cadastroService: CadastroService,
    private router: Router
  ) {}

  cadastrar() {
    const formCadastro = this.formularioService.getCadastro();

    if (formCadastro?.valid) {
      const novoCadastro = formCadastro.getRawValue() as PessoaUsuaria;
      this.cadastroService.cadastrar(novoCadastro).subscribe({
        next: (value) => {
          console.log('Cadastro realizado com sucesso.', value);
          this.router.navigate(['auth/login']);
        },
        error: (err) => {
          console.log('Erro ao realizar cadastro.', formCadastro);
        },
      });
    }
  }
}
