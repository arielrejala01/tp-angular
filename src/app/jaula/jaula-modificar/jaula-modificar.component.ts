import { Component } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Jaula } from 'src/app/model/jaula';
import { JaulaService } from 'src/app/service/jaula.service';

@Component({
  selector: 'app-jaula-modificar',
  templateUrl: './jaula-modificar.component.html',
  styleUrls: ['./jaula-modificar.component.css']
})
export class JaulaModificarComponent {
  jaula: Jaula = new Jaula();

  constructor(
    private jaulaService: JaulaService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  guardarModificacion(): void {
    this.jaulaService.modificarJaula(this.jaula);
    this.router.navigate(['/jaula']);
  }

  ngOnInit(): void {
    const idJaulaParam = this.route.snapshot.paramMap.get('id');
    const idJaula = idJaulaParam ? + idJaulaParam : 0;
  
    if (idJaula) {
      const jaulaEncontrada = this.jaulaService.obtenerJaulaPorId(idJaula);
  
      if (jaulaEncontrada) {
        this.jaula = jaulaEncontrada;
      } else {
        console.error('Jaula no encontrada');
      }
    } else {
      console.error('ID de Jaula no válido');
    }
  }
}
