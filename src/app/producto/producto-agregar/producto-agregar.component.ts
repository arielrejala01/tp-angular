import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/model/producto';
import { ProductoService } from 'src/app/service/producto.service';

@Component({
  selector: 'app-producto-agregar',
  templateUrl: './producto-agregar.component.html',
  styleUrls: ['./producto-agregar.component.css']
})
export class ProductoAgregarComponent {
  nuevoProducto: Producto = new Producto();

  constructor(private productoService: ProductoService, private router: Router) { }

  guardarProducto() {
    this.productoService.agregarProducto(this.nuevoProducto);
    this.router.navigate(['/producto']);
  }
}
