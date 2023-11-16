import { Component, EventEmitter, Output } from '@angular/core';
import { PassagensService } from 'src/app/busca/services/passagens.service';
import { FormBuscaService } from 'src/app/shared/services/form-busca.service';

@Component({
  selector: 'app-filtros-complementares',
  templateUrl: './filtros-complementares.component.html',
  styleUrls: ['./filtros-complementares.component.scss']
})
export class FiltrosComplementaresComponent {
  @Output() realizarBusca = new EventEmitter();

  constructor(
    public formBuscaService: FormBuscaService,
    private passagensService: PassagensService
  ){}

  busca() {
    if (!this.formBuscaService.formEstaValido) {
      this.formBuscaService.formBusca.markAllAsTouched();
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
      return;
    }
    this.realizarBusca.emit(this.formBuscaService.obterDadosDeBusca());
  }

  limparFiltros() {
    this.formBuscaService.formBusca.patchValue({
      conexoes: null,
      companhias: null,
      precoMin: this.passagensService.precoMin,
      precoMax: this.passagensService.precoMax,
    });
  }
}
