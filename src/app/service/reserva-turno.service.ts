import { Injectable } from '@angular/core';
import { Proveedor } from '../model/proveedor';
import { ReservaTurno } from '../model/reservaTurno';
import { ProveedorService } from './proveedor.service';

@Injectable({
  providedIn: 'root'
})
export class ReservaTurnoService {
  private idReservaActual = 1;
  constructor(private proveedorService: ProveedorService) { }

  reservas: ReservaTurno[] = [];

  agregarReserva(reserva: ReservaTurno): number {
    const id = sessionStorage.getItem('id_reserva');
    if (id != null) {
      reserva.idTurno = JSON.parse(id);
    } else {
      reserva.idTurno = this.idReservaActual;
    }
  
    this.reservas.push(reserva);
    this.idReservaActual++;
  
    sessionStorage.setItem('reservas', JSON.stringify(this.reservas));
    sessionStorage.setItem('id_reserva', JSON.stringify(this.idReservaActual));

    return reserva.idTurno;
  }

  modificarReserva(reservaModificada: ReservaTurno) {
    const reservaExistente = this.obtenerReservaPorId(reservaModificada.idTurno);
  
    if (reservaExistente) {
      reservaExistente.jaula = reservaModificada.jaula;
      reservaExistente.horaInicioRecepcion = reservaModificada.horaInicioRecepcion;
      reservaExistente.horaFinRecepcion = reservaModificada.horaFinRecepcion;

      sessionStorage.setItem('reservas', JSON.stringify(this.reservas));
    }
  }

  borrarReserva(idTurno: number) {
    const indice = this.reservas.findIndex(reserva => reserva.idTurno === idTurno);

    if (indice !== -1) {
      this.reservas.splice(indice, 1);
      sessionStorage.removeItem('reservas');
      sessionStorage.setItem('reservas', JSON.stringify(this.reservas));
    }
  }

  obtenerReservas() {
    const reservas_json_str = sessionStorage.getItem('reservas');
    if (reservas_json_str != null) {
      this.reservas = JSON.parse(reservas_json_str);
      this.reservas.sort((a, b) => {
        const indexA = this.horasPredefinidas.indexOf(a.horaInicioAgendamiento);
        const indexB = this.horasPredefinidas.indexOf(b.horaInicioAgendamiento);
        return indexA - indexB;
      });
    }
    return this.reservas;
  }
  

  obtenerReservaPorId(idTurno: number): ReservaTurno | undefined {
    const reservas_json_str = sessionStorage.getItem('reservas');
    if(reservas_json_str != null){
      this.reservas = JSON.parse(reservas_json_str);
    }
    return this.reservas.find(reserva => reserva.idTurno === idTurno);
  }

  private horasPredefinidas: string[] = [
    '07:00', '07:30', '08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', 
    '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', 
    '16:00', '16:30', '17:00', '17:30', '18:00'
  ];

  obtenerHorasDisponibles(): string[] {
    return this.horasPredefinidas;
  }

  obtenerProveedoresDisponibles(): Proveedor[] {
    return this.proveedorService.obtenerProveedores();
  }

}
