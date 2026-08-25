import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivisorComponent } from './divisor.component';

describe('DivisorComponent', () => {
  let component: DivisorComponent;
  let fixture: ComponentFixture<DivisorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DivisorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DivisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
