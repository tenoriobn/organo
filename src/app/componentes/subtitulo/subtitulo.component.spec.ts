import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtituloComponent } from './subtitulo.component';

describe('SubtituloComponent', () => {
  let component: SubtituloComponent;
  let fixture: ComponentFixture<SubtituloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubtituloComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubtituloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
