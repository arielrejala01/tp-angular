import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Jaula } from 'src/app/model/jaula';
import { JaulaService } from 'src/app/service/jaula.service';

@Component({
  selector: 'app-jaula-agregar',
  templateUrl: './jaula-agregar.component.html',
  styleUrls: ['./jaula-agregar.component.css']
})
export class JaulaAgregarComponent {
  nuevaJaula: Jaula = new Jaula();

  constructor(private jaulaService: JaulaService, private router: Router) { }

  guardarJaula() {
    this.jaulaService.agregarJaula(this.nuevaJaula);
    this.router.navigate(['/jaula']);
  }
}
