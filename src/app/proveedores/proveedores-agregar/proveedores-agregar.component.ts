import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Proveedor } from 'src/app/model/proveedor';
import { ProveedorService } from 'src/app/service/proveedor.service';

@Component({
  selector: 'app-proveedores-agregar',
  templateUrl: './proveedores-agregar.component.html',
  styleUrls: ['./proveedores-agregar.component.css']
})
export class ProveedoresAgregarComponent {
  nuevoProveedor: Proveedor = new Proveedor();

  constructor(private proveedorService: ProveedorService, private router: Router) { }

  guardarProveedor() {
    this.proveedorService.agregarProveedor(this.nuevoProveedor);
    this.router.navigate(['/proveedor']);
  }
}
