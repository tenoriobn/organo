import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaSuspensaComponent } from './lista-suspensa.component';

describe('ListaSuspensaComponent', () => {
  let component: ListaSuspensaComponent;
  let fixture: ComponentFixture<ListaSuspensaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaSuspensaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaSuspensaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
