import { Component, input } from '@angular/core';

@Component({
  selector: 'app-estado-vazio',
  imports: [],
  templateUrl: './estado-vazio.component.html',
  styleUrl: './estado-vazio.component.css'
})
export class EstadoVazioComponent {
  imagem = input<string>('sem-livros.png');
  alt = input<string>('Sem livros neste gênero');
  mensagem = input<string>('Não há livros neste gênero ainda');
}
