import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { ProveedoresAgregarComponent } from './proveedores/proveedores-agregar/proveedores-agregar.component';
import { ProveedoresModificarComponent } from './proveedores/proveedores-modificar/proveedores-modificar.component';
import { ProductoComponent } from './producto/producto.component';
import { ProductoAgregarComponent } from './producto/producto-agregar/producto-agregar.component';
import { ProductoModificarComponent } from './producto/producto-modificar/producto-modificar.component';
import { JaulaComponent } from './jaula/jaula.component';
import { JaulaAgregarComponent } from './jaula/jaula-agregar/jaula-agregar.component';
import { JaulaModificarComponent } from './jaula/jaula-modificar/jaula-modificar.component';
import { ReservaTurnoComponent } from './reserva-turno/reserva-turno.component';
import { DetalleTurnoComponent } from './detalle-turno/detalle-turno.component';
import { RecepcionComponent } from './recepcion/recepcion.component';

const routes: Routes = [
  {
    path:'proveedor',
    component: ProveedoresComponent
  },
  {
    path:'nuevoproveedor',
    component: ProveedoresAgregarComponent
  },
  {
    path:'modificarproveedor/:id',
    component: ProveedoresModificarComponent
  },
  {
    path:'producto',
    component: ProductoComponent
  },
  {
    path:'nuevoproducto',
    component: ProductoAgregarComponent
  },
  {
    path:'modificarproducto/:id',
    component: ProductoModificarComponent
  },
  {
    path:'jaula',
    component: JaulaComponent
  },
  {
    path:'nuevajaula',
    component: JaulaAgregarComponent
  },
  {
    path:'modificarjaula/:id',
    component: JaulaModificarComponent
  },
  {
    path:'reservaturno',
    component: ReservaTurnoComponent
  },
  {
    path:'detalleturno/:id',
    component: DetalleTurnoComponent
  },
  {
    path:'recepcion',
    component: RecepcionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
