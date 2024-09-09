import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog'
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
import { DetallesComponent } from './recepcion/detalles/detalles.component';
import { AccionesComponent } from './recepcion/acciones/acciones.component';

@NgModule({
  declarations: [
    AppComponent,
    ProveedoresComponent,
    ProveedoresAgregarComponent,
    ProveedoresModificarComponent,
    ProductoComponent,
    ProductoAgregarComponent,
    ProductoModificarComponent,
    JaulaComponent,
    JaulaAgregarComponent,
    JaulaModificarComponent,
    ReservaTurnoComponent,
    DetalleTurnoComponent,
    RecepcionComponent,
    DetallesComponent,
    AccionesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
