import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Jaula } from 'src/app/model/jaula';
import { ReservaTurno } from 'src/app/model/reservaTurno';
import { ReservaTurnoService } from 'src/app/service/reserva-turno.service';

@Component({
  selector: 'app-acciones',
  templateUrl: './acciones.component.html',
  styleUrls: ['./acciones.component.css']
})
export class AccionesComponent { 
  reserva!: ReservaTurno;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  private dialogRef: MatDialogRef<AccionesComponent>,
  private reservaService: ReservaTurnoService) {
    this.reserva = this.data.reserva
  }

  guardarCambios() {
    const ahora = new Date();
    const horaActual = `${ahora.getHours().toString().padStart(2, '0')}:${ahora.getMinutes().toString().padStart(2, '0')}`;
    if (this.reserva.horaInicioRecepcion == null) {
        this.reserva.horaInicioRecepcion = horaActual;

        if (this.reserva.jaula) {
            this.reserva.jaula.enUso = 'S';
            this.modificarJaula(this.reserva.jaula);
        }
    } else {
        this.reserva.horaFinRecepcion = horaActual;
        if (this.reserva.jaula) {
          this.reserva.jaula.enUso = 'N';
          this.modificarJaula(this.reserva.jaula);
      }
    }

    const exito = this.reservaService.modificarReserva(this.reserva);

    window.location.reload();
}

  modificarJaula(jaula: Jaula) {
    const jaulas_json_str = sessionStorage.getItem('jaulas');
    if (jaulas_json_str) {
        const jaulas: Jaula[] = JSON.parse(jaulas_json_str);
        const jaulaIndex = jaulas.findIndex(j => j.idJaula === jaula.idJaula);
        if (jaulaIndex !== -1) {
            jaulas[jaulaIndex] = jaula;
            sessionStorage.setItem('jaulas', JSON.stringify(jaulas));
            console.log('Jaula actualizada correctamente');
        } else {
            console.error('Jaula no encontrada');
        }
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
