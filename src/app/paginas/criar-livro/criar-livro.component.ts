import { Component } from '@angular/core';
import { LivrosService } from '../../services/livros.service';
import { Livro } from '../../componentes/livro/livro';
import { Router } from '@angular/router';
import { FormularioComponent } from '../../componentes/formulario/formulario.component';

@Component({
  selector: 'app-criar-livro',
  standalone: true,
  imports: [FormularioComponent],
  templateUrl: './criar-livro.component.html',
  styleUrl: './criar-livro.component.css',
})
export class CriarLivroComponent {
  constructor(
    private livroService: LivrosService,
    private router: Router,
  ) {}

  criarLivro(livro: Livro) {
    this.livroService.adicionarLivro(livro).subscribe(() => {
      this.router.navigate(['/livros']);
    });
  }
}
