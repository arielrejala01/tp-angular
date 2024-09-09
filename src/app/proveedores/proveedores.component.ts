import { Component } from '@angular/core';
import { Proveedor } from '../model/proveedor';
import { ProveedorService } from '../service/proveedor.service';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent {
  proveedores: Proveedor[] = [];
  filtroNombre: string = '';

  constructor(private proveedorService: ProveedorService) {
    this.proveedores = this.proveedorService.obtenerProveedores();
  }

  borrarProveedor(idProveedor: number) {
    this.proveedorService.borrarProveedor(idProveedor);
  }

}