import { Component } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Proveedor } from 'src/app/model/proveedor';
import { ProveedorService } from 'src/app/service/proveedor.service';

@Component({
  selector: 'app-proveedores-modificar',
  templateUrl: './proveedores-modificar.component.html',
  styleUrls: ['./proveedores-modificar.component.css']
})
export class ProveedoresModificarComponent {
  proveedor: Proveedor = new Proveedor();

  constructor(
    private proveedorService: ProveedorService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  guardarModificacion(): void {
    this.proveedorService.modificarProveedor(this.proveedor);
    this.router.navigate(['/proveedor']);
  }

  ngOnInit(): void {
    const idProveedorParam = this.route.snapshot.paramMap.get('id');
    const idProveedor = idProveedorParam ? +idProveedorParam : 0;
  
    if (idProveedor) {
      const proveedorEncontrado = this.proveedorService.obtenerProveedorPorId(idProveedor);
  
      if (proveedorEncontrado) {
        this.proveedor = proveedorEncontrado;
      } else {
        console.error('Proveedor no encontrado');
      }
    } else {
      console.error('ID de Proveedor no válido');
    }
  }
}
