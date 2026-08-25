import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoVazioComponent } from './estado-vazio.component';

describe('EstadoVazioComponent', () => {
  let component: EstadoVazioComponent;
  let fixture: ComponentFixture<EstadoVazioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstadoVazioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstadoVazioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
