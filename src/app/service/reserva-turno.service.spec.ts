import { TestBed } from '@angular/core/testing';

import { ReservaTurnoService } from './reserva-turno.service';

describe('ReservaTurnoService', () => {
  let service: ReservaTurnoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReservaTurnoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
