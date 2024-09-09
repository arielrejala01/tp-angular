import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaTurnoComponent } from './reserva-turno.component';

describe('ReservaTurnoComponent', () => {
  let component: ReservaTurnoComponent;
  let fixture: ComponentFixture<ReservaTurnoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReservaTurnoComponent]
    });
    fixture = TestBed.createComponent(ReservaTurnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
