import { Component } from '@angular/core';
import { ReservaTurno } from '../model/reservaTurno';
import { ReservaTurnoService } from '../service/reserva-turno.service';
import { RecepcionService } from '../service/recepcion.service';
import { DetalleTurno } from '../model/detalleTurno';
import { MatDialog } from '@angular/material/dialog';
import { DetallesComponent } from './detalles/detalles.component';
import { AccionesComponent } from './acciones/acciones.component';
import { JaulaService } from '../service/jaula.service';

@Component({
  selector: 'app-recepcion',
  templateUrl: './recepcion.component.html',
  styleUrls: ['./recepcion.component.css']
})
export class RecepcionComponent {
  reservas: ReservaTurno[] = [];
  detalles: DetalleTurno[] = [];
  filtroNombre: string = '';
  filtroFecha: string | undefined;
  reservasFiltradas: ReservaTurno[] = [];

  constructor(private reservaService: ReservaTurnoService, private recepcionService: RecepcionService, public dialog: MatDialog, private jaulaService: JaulaService) {
    this.reservas = this.reservaService.obtenerReservas();
  }

  openDialogDetalles(idTurno: ReservaTurno){
    this.detalles = this.recepcionService.obtenerDetallesPorIdTurno(idTurno);
    this.dialog.open(DetallesComponent, {data: { detalles: this.detalles},});
  }

  openDialogAcciones(idTurno: ReservaTurno) {
    const reserva = this.reservaService.obtenerReservaPorId(idTurno.idTurno);

    console.log(reserva);
    
    if (reserva) {
      if (!reserva.horaInicioRecepcion) {
        const jaulas = this.jaulaService.obtenerJaulasDisponibles();
  
        this.dialog.open(AccionesComponent, {
          data: { jaulas: jaulas, reserva: reserva },
        });
      } else {
        this.dialog.open(AccionesComponent, {
          data: {reserva: reserva},
        });
      }
    } else {
      console.log('Reserva no encontrada para el idTurno:', idTurno);
    }
  }

  filtrarPorFecha() {
    if (this.filtroFecha) {
      console.log(this.reservas[0].fecha);
      this.reservasFiltradas = this.reservas.filter(reserva => {
        return reserva.fecha === this.filtroFecha;
      });
      console.log(this.reservasFiltradas);
    } else {
      this.reservasFiltradas = this.reservas;
    }
  }
  
                    
  
}
