import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PassagensService } from 'src/app/busca/services/passagens.service';
import { FormBuscaService } from 'src/app/shared/services/form-busca.service';

@Component({
  selector: 'app-precos',
  templateUrl: './precos.component.html',
  styleUrls: ['./precos.component.scss']
})
export class PrecosComponent {
  precoMin: FormControl<number>;
  precoMax: FormControl<number>;

  constructor(
    public passagensService: PassagensService,
    private formBuscaService: FormBuscaService
  ) {
    this.precoMin = this.formBuscaService.obterControle<number>('precoMin');
    this.precoMax = this.formBuscaService.obterControle<number>('precoMax');
  }

}
