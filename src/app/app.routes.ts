import { Routes } from '@angular/router';
import { ListaLivrosComponent } from './paginas/lista-livros/lista-livros.component';
import { CriarLivroComponent } from './paginas/criar-livro/criar-livro.component';

export const routes: Routes = [
  {
    path: 'criar-livro',
    component: CriarLivroComponent,
  },
  {
    path: 'lista-livros',
    component: ListaLivrosComponent,
  },
  {
    path: '**',
    component: ListaLivrosComponent,
  },
];
