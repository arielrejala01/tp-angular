import { Injectable } from '@angular/core';
import { Producto } from '../model/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private idProductoActual = 1; //auto increment
  constructor() { }

  productos: Producto[] = [];

  obtenerProductos() {
    const productos_json_str = sessionStorage.getItem('productos');
    if(productos_json_str != null){
      this.productos = JSON.parse(productos_json_str);
    }
    return this.productos;
  }

  agregarProducto(producto: Producto) {

    const id = sessionStorage.getItem('id_producto');
    if(id != null){
      producto.idProducto = JSON.parse(id);
    }else{
      producto.idProducto = this.idProductoActual;
    }

    this.productos.push(producto);
    this.idProductoActual++;
    sessionStorage.setItem('productos', JSON.stringify(this.productos));
    sessionStorage.setItem('id_producto', JSON.stringify(this.idProductoActual));
  }

  borrarProducto(idProducto: number) {
    const indice = this.productos.findIndex(producto => producto.idProducto === idProducto);

    if (indice !== -1) {
      this.productos.splice(indice, 1);
      sessionStorage.removeItem('productos');
      sessionStorage.setItem('productos', JSON.stringify(this.productos));
    }
  }

  obtenerProductoPorId(idProducto: number): Producto | undefined{
    const productos_json_str = sessionStorage.getItem('productos');
    if(productos_json_str != null){
      this.productos = JSON.parse(productos_json_str);
    }
    return this.productos.find(producto => producto.idProducto === idProducto);
  }

  modificarProducto(producto: Producto): void {
    const indice = this.productos.findIndex(p => p.idProducto === producto.idProducto);

    if (indice !== -1) {
      this.productos[indice] = producto;
      sessionStorage.removeItem('productos');
      sessionStorage.setItem('productos', JSON.stringify(this.productos));
    }
  }
}
