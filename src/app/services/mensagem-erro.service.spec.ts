import { TestBed } from '@angular/core/testing';

import { MensagemErroService } from './mensagem-erro.service';

describe('MensagemErroService', () => {
  let service: MensagemErroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MensagemErroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
