import { Component } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Producto } from 'src/app/model/producto';
import { ProductoService } from 'src/app/service/producto.service';

@Component({
  selector: 'app-producto-modificar',
  templateUrl: './producto-modificar.component.html',
  styleUrls: ['./producto-modificar.component.css']
})
export class ProductoModificarComponent {
  producto: Producto = new Producto();

  constructor(
    private productoService: ProductoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  guardarModificacion(): void {
    this.productoService.modificarProducto(this.producto);
    this.router.navigate(['/producto']);
  }

  ngOnInit(): void {
    const idProductoParam = this.route.snapshot.paramMap.get('id');
    const idProducto = idProductoParam ? +idProductoParam : 0;
  
    if (idProducto) {
      const productoEncontrado = this.productoService.obtenerProductoPorId(idProducto);
  
      if (productoEncontrado) {
        this.producto = productoEncontrado;
      } else {
        console.error('Producto no encontrado');
      }
    } else {
      console.error('ID de Producto no válido');
    }
  }
}
