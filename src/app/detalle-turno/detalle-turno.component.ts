import { Component } from '@angular/core';
import { DetalleTurno } from '../model/detalleTurno';
import { DetalleTurnoService } from '../service/detalle-turno.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservaTurnoService } from '../service/reserva-turno.service';
import { ReservaTurno } from '../model/reservaTurno';
import { Producto } from '../model/producto';

@Component({
  selector: 'app-detalle-turno',
  templateUrl: './detalle-turno.component.html',
  styleUrls: ['./detalle-turno.component.css']
})
export class DetalleTurnoComponent {
  reserva: ReservaTurno | undefined;
  detalles: DetalleTurno[] = [];
  productosDisponibles: Producto[] = [];

  constructor(
    private reservaService: ReservaTurnoService,
    private detalleService: DetalleTurnoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const idTurnoParam = this.route.snapshot.paramMap.get('id');
    const idTurno = idTurnoParam ? + idTurnoParam : 0;
  
    if (idTurno) {
      const reservaEncontrada = this.reservaService.obtenerReservaPorId(idTurno);
  
      if (reservaEncontrada) {
        this.reserva = reservaEncontrada;
      } else {
        console.error('Reserva no encontrada');
      }
    } else {
      console.error('ID de Reserva no válido');
    }
    this.productosDisponibles = this.detalleService.obtenerProductosDisponibles();
  }

  agregarDetalle() {
    const nuevoDetalle: DetalleTurno = new DetalleTurno();
    nuevoDetalle.idTurno = this.reserva!;
    this.detalles.push(nuevoDetalle);
    console.log(this.detalles);
  }

  eliminarDetalle(index: number) {
    this.detalles.splice(index, 1);
  }

  guardarDetalle() {
    this.detalles.forEach(detalle => {
      this.detalleService.agregarDetalle(detalle);
    });
    this.router.navigate(['/recepcion']);
  }
}
