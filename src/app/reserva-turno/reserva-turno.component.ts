import { Component } from '@angular/core';
import { ReservaTurno } from '../model/reservaTurno';
import { Proveedor } from '../model/proveedor';
import { Router } from '@angular/router';
import { ReservaTurnoService } from '../service/reserva-turno.service';

@Component({
  selector: 'app-reserva-turno',
  templateUrl: './reserva-turno.component.html',
  styleUrls: ['./reserva-turno.component.css']
})
export class ReservaTurnoComponent {
  nuevaReserva: ReservaTurno = new ReservaTurno();

  proveedoresDisponibles: Proveedor[] = [];
  horasDisponibles: string[] = [];

  constructor(private reservaService: ReservaTurnoService, private router: Router) { }

  ngOnInit(): void {
    this.nuevaReserva.proveedor = new Proveedor();
    this.proveedoresDisponibles = this.reservaService.obtenerProveedoresDisponibles();
    this.horasDisponibles = this.reservaService.obtenerHorasDisponibles();
  }

  guardarReserva() {
    const idReserva = this.reservaService.agregarReserva(this.nuevaReserva);
    this.router.navigate(['/detalleturno', idReserva]);
  }
}
