import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { MensagemErroService } from '../services/mensagem-erro.service';

export const erroInterceptor: HttpInterceptorFn = (req, next) => {
  const mensagemErroService = inject(MensagemErroService);

  return next(req).pipe(
    catchError((erro: HttpErrorResponse) => {
      const mensagemErro = obterMensagemDeErro(erro.status);
      mensagemErroService.mostrarMensagemDeErro(mensagemErro);
      return throwError(() => erro);
    }),
  );
};

function obterMensagemDeErro(status: number): string {
  const mensagensDeErro: Record<number, string> = {
    0: 'Erro de conexão. Verifique sua internet.',
    404: 'O recurso solicitado não foi encontrado.',
    500: 'Erro interno do servidor.',
  };
  return mensagensDeErro[status] || 'Ocorreu um erro inesperado.';
}
