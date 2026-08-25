import { Routes } from '@angular/router';

import { ListaLivrosComponent } from './paginas/lista-livros/lista-livros.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';

export const routes: Routes = [
  {
    path: 'formulario',
    component: FormularioComponent
  },
  {
    path: 'lista-livros',
    component: ListaLivrosComponent
  },
  {
    path: '**',
    component: ListaLivrosComponent
  }
];
