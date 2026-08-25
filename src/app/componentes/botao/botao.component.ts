import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-botao',
  imports: [RouterLink],
  templateUrl: './botao.component.html',
  styleUrl: './botao.component.css'
})
export class BotaoComponent {
  texto = input<string>();
  icone = input<string>();
  rota = input<string | string[]>();
  tipo = input<string>('button');
  tipoDeBotao = input<'primario' | 'secundario'>('primario');

  private classesBotao: Record<string, string> = {
    primario: 'botao-primario',
    secundario: 'botao-secundario'
  };

  get classeCss(): string {
    return this.classesBotao[this.tipoDeBotao()] || 'botao-primario';
  }
}
