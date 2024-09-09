import { Injectable } from '@angular/core';
import { ProductoService } from './producto.service';
import { DetalleTurno } from '../model/detalleTurno';
import { Producto } from '../model/producto';

@Injectable({
  providedIn: 'root'
})
export class DetalleTurnoService {
  private idDetalleActual = 1;
  constructor(private productoService: ProductoService) { }

  detalles: DetalleTurno[] = [];

  agregarDetalle(detalle: DetalleTurno) {
    const id = sessionStorage.getItem('id_detalle');
    if(id != null){
      detalle.idDetalle = JSON.parse(id);
    }else{
      detalle.idDetalle = this.idDetalleActual;
    }

    this.detalles.push(detalle);
    this.idDetalleActual++;

    sessionStorage.setItem('detalles', JSON.stringify(this.detalles));
    sessionStorage.setItem('id_detalle', JSON.stringify(this.idDetalleActual));
  }

  obtenerProductosDisponibles(): Producto[] {
    return this.productoService.obtenerProductos();
  }
}
