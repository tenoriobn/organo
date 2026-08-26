import { CommonModule } from '@angular/common';
import { Component, input, OnInit, output, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { GeneroLiterario, Livro } from '../livro/livro';
import { CampoTextoComponent } from '../campo-texto/campo-texto.component';
import { ListaSuspensaComponent } from '../lista-suspensa/lista-suspensa.component';
import { BotaoComponent } from '../botao/botao.component';
import { DivisorComponent } from '../divisor/divisor.component';
import { TituloComponent } from '../titulo/titulo.component';
import { SubtituloComponent } from '../subtitulo/subtitulo.component';
import { LivrosService } from '../../services/livros.service';

@Component({
  selector: 'app-formulario',
  imports: [
    ReactiveFormsModule,
    RouterLink,
    CampoTextoComponent,
    CommonModule,
    ListaSuspensaComponent,
    BotaoComponent,
    DivisorComponent,
    TituloComponent,
    SubtituloComponent,
  ],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
})
export class FormularioComponent implements OnInit {
  livroFormulario!: FormGroup;
  generos: GeneroLiterario[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private livroService: LivrosService,
  ) {}

  ngOnInit() {
    this.generos = this.livroService.generos;
    this.inicializarlivroFormulario();
  }

  inicializarlivroFormulario() {
    this.livroFormulario = this.formBuilder.group({
      id: [''],
      titulo: [''],
      autoria: [''],
      favorito: [false],
      genero: [''],
      imagem: [''],
    });
  }
}
