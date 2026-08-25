import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

import { Livro } from './livro';
import { BotaoComponent } from '../botao/botao.component';

@Component({
  selector: 'app-livro',
  imports: [
    CommonModule,
    BotaoComponent
  ],
  templateUrl: './livro.component.html',
  styleUrl: './livro.component.css'
})
export class LivroComponent {

  livro = input.required<Livro>();

  alternarFavorito() {
    this.livro().favorito = !this.livro().favorito;
  }

}
