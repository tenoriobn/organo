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

  generos: GeneroLiterario[] = [
    { id: 'romance', value: 'Romance' },
    { id: 'misterio', value: 'Mistério' },
    { id: 'fantasia', value: 'Fantasia' },
    { id: 'ficcao-cientifica', value: 'Ficção Científica' },
    { id: 'tecnicos', value: 'Técnicos' },
  ];

  ngOnInit() {
    this.livrosService.obterLivros().subscribe((livros: Livro[]) => {
      this.livros = livros;
      console.log(this.livros);
    });
  }

  organizarLivrosPorGenero() {
    // this.generosComLivros = this.generos.map((genero) => ({
    //   genero,
    //   livros: this.livros.filter((livro) => livro.genero.id === genero.id)
    // }));
  }
}
