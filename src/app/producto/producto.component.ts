import { Component } from '@angular/core';
import { Producto } from '../model/producto';
import { ProductoService } from '../service/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {
  productos: Producto[] = [];
  filtroNombre: string = '';

  constructor(private productoService: ProductoService) {
    this.productos = this.productoService.obtenerProductos();
  }

  borrarProducto(idProducto: number) {
    this.productoService.borrarProducto(idProducto);
  }

}
