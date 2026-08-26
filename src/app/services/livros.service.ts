import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Livro } from '../componentes/livro/livro';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LivrosService {
  private API_URL = 'http://localhost:3000/livros';

  constructor(private httpClient: HttpClient) {}

  obterLivros(): Observable<Livro[]> {
    return this.httpClient.get<Livro[]>(this.API_URL);
  }
}
