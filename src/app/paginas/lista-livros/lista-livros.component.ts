import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { BotaoComponent } from '../../componentes/botao/botao.component';
import { DivisorComponent } from '../../componentes/divisor/divisor.component';
import { EstadoVazioComponent } from '../../componentes/estado-vazio/estado-vazio.component';
import { GeneroLiterario, Livro } from '../../componentes/livro/livro';
import { LivroComponent } from '../../componentes/livro/livro.component';
import { SubtituloComponent } from '../../componentes/subtitulo/subtitulo.component';
import { TituloComponent } from '../../componentes/titulo/titulo.component';
import { LivrosService } from '../../services/livros.service';

@Component({
  selector: 'app-lista-livros',
  imports: [
    CommonModule,
    LivroComponent,
    TituloComponent,
    DivisorComponent,
    BotaoComponent,
    SubtituloComponent,
    EstadoVazioComponent,
  ],
  templateUrl: './lista-livros.component.html',
  styleUrl: './lista-livros.component.css',
})
export class ListaLivrosComponent implements OnInit {
  generosComLivros: { genero: GeneroLiterario; livros: Livro[] }[] = [];
  livros: Livro[] = [];

  constructor(private livrosService: LivrosService) {}

  ngOnInit() {
    this.livrosService
      .organizarLivrosPorGenero()
      .subscribe((livrosPorGenero) => {
        this.generosComLivros = this.livrosService.generos.map((genero) => ({
          genero,
          livros: livrosPorGenero.get(genero.id) ?? [],
        }));
      });
  }
}
