import { Proveedor } from './proveedor';
import { Jaula } from './jaula';

export class ReservaTurno {
  idTurno!: number;
  fecha!: string;
  horaInicioAgendamiento!: string;
  horaFinAgendamiento!: string;
  proveedor!: Proveedor;
  jaula!: Jaula;
  horaInicioRecepcion!: string;
  horaFinRecepcion!: string;
}
