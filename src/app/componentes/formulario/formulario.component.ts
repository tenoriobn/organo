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
    SubtituloComponent
  ],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent implements OnInit {
  livroFormulario!: FormGroup;
  generos: GeneroLiterario[] = [
    { id: 'romance', value: 'Romance' },
    { id: 'misterio', value: 'Mistério' },
    { id: 'fantasia', value: 'Fantasia' },
    { id: 'ficcao-cientifica', value: 'Ficção Científica' },
    { id: 'tecnicos', value: 'Técnicos' }
];

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.inicializarlivroFormulario();
  }

  inicializarlivroFormulario() {
    this.livroFormulario = this.formBuilder.group({
      id: [''],
      titulo: [''],
      autoria: [''],
      favorito: [false],
      genero: [''],
      imagem: ['']
    })
  };
}
