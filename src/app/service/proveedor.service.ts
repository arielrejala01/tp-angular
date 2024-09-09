import { Injectable } from '@angular/core';
import { Proveedor } from '../model/proveedor';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {
  private idProveedorActual = 1; //auto increment
  constructor() { }

  proveedores: Proveedor[] = [];

  obtenerProveedores() {
    const proveedores_json_str = sessionStorage.getItem('proveedores');
    if(proveedores_json_str != null){
      this.proveedores = JSON.parse(proveedores_json_str);
    }
    return this.proveedores;
  }

  agregarProveedor(proveedor: Proveedor) {

    const id = sessionStorage.getItem('id_proveedor');
    if(id != null){
      proveedor.idProveedor = JSON.parse(id);
    }else{
      proveedor.idProveedor = this.idProveedorActual;
    }

    this.proveedores.push(proveedor);
    this.idProveedorActual++;
    sessionStorage.setItem('proveedores', JSON.stringify(this.proveedores));
    sessionStorage.setItem('id_proveedor', JSON.stringify(this.idProveedorActual));
  }

  borrarProveedor(idProveedor: number) {
    const indice = this.proveedores.findIndex(proveedor => proveedor.idProveedor === idProveedor);

    if (indice !== -1) {
      this.proveedores.splice(indice, 1);
      sessionStorage.removeItem('proveedores');
      sessionStorage.setItem('proveedores', JSON.stringify(this.proveedores));
    }
  }

  obtenerProveedorPorId(idProveedor: number): Proveedor | undefined{
    const proveedores_json_str = sessionStorage.getItem('proveedores');
    if(proveedores_json_str != null){
      this.proveedores = JSON.parse(proveedores_json_str);
    }
    return this.proveedores.find(proveedor => proveedor.idProveedor === idProveedor);
  }

  modificarProveedor(proveedor: Proveedor): void {
    const indice = this.proveedores.findIndex(p => p.idProveedor === proveedor.idProveedor);

    if (indice !== -1) {
      this.proveedores[indice] = proveedor;
      sessionStorage.removeItem('proveedores');
      sessionStorage.setItem('proveedores', JSON.stringify(this.proveedores));
    }
  }
}
