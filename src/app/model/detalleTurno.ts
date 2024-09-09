import { Producto } from './producto';
import { ReservaTurno } from './reservaTurno';

export class DetalleTurno {
  idDetalle!: number;
  idTurno!: ReservaTurno;
  producto!: Producto;
  cantidad!: number;
}
