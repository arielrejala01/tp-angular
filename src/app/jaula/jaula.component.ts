import { Component } from '@angular/core';
import { Jaula } from '../model/jaula';
import { JaulaService } from '../service/jaula.service';

@Component({
  selector: 'app-jaula',
  templateUrl: './jaula.component.html',
  styleUrls: ['./jaula.component.css']
})
export class JaulaComponent {
  jaulas: Jaula[] = [];
  filtroNombre: string = '';

  constructor(private jaulaService: JaulaService) {
    this.jaulas = this.jaulaService.obtenerJaulas();
  }

  borrarJaula(idJaula: number) {
    this.jaulaService.borrarJaula(idJaula);
  }

}
