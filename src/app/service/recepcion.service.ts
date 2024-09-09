import { Injectable } from '@angular/core';
import { DetalleTurno } from '../model/detalleTurno';
import { ReservaTurno } from '../model/reservaTurno';

@Injectable({
  providedIn: 'root'
})
export class RecepcionService {

  constructor() { }

  obtenerDetallesPorIdTurno(idTurno: ReservaTurno): DetalleTurno[] {
    const detalles_json_str = sessionStorage.getItem('detalles');
    if (detalles_json_str != null) {
        const detalles: DetalleTurno[] = JSON.parse(detalles_json_str);
        return detalles.filter(detalle => detalle.idTurno.idTurno == idTurno.idTurno);
    }
    return [];
}
}
