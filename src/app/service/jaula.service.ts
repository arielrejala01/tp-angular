import { Injectable } from '@angular/core';
import { Jaula } from '../model/jaula';

@Injectable({
  providedIn: 'root'
})
export class JaulaService {
  private idJaulaActual = 1; //auto increment
  constructor() { }

  jaulas: Jaula[] = [];

  obtenerJaulas() {
    const jaulas_json_str = sessionStorage.getItem('jaulas');
    if(jaulas_json_str != null){
      this.jaulas = JSON.parse(jaulas_json_str);
    }
    return this.jaulas;
  }

  obtenerJaulasDisponibles() {
    const jaulas_json_str = sessionStorage.getItem('jaulas');
    
    if (jaulas_json_str != null) {
      this.jaulas = JSON.parse(jaulas_json_str).filter((jaula: any) => jaula.enUso === 'N');
    } else {
      this.jaulas = [];
    }
    
    return this.jaulas;
  }
  
  agregarJaula(jaula: Jaula) {

    const id = sessionStorage.getItem('id_jaula');
    if(id != null){
      jaula.idJaula = JSON.parse(id);
    }else{
      jaula.idJaula = this.idJaulaActual;
    }

    this.jaulas.push(jaula);
    this.idJaulaActual++;
    sessionStorage.setItem('jaulas', JSON.stringify(this.jaulas));
    sessionStorage.setItem('id_jaula', JSON.stringify(this.idJaulaActual));
  }

  borrarJaula(idJaula: number) {
    const indice = this.jaulas.findIndex(jaula => jaula.idJaula === idJaula);

    if (indice !== -1) {
      this.jaulas.splice(indice, 1);
      sessionStorage.removeItem('jaulas');
      sessionStorage.setItem('jaulas', JSON.stringify(this.jaulas));
    }
  }

  obtenerJaulaPorId(idJaula: number): Jaula | undefined{
    const jaulas_json_str = sessionStorage.getItem('jaulas');
    if(jaulas_json_str != null){
      this.jaulas = JSON.parse(jaulas_json_str);
    }
    return this.jaulas.find(jaula => jaula.idJaula === idJaula);
  }

  modificarJaula(jaula: Jaula): void {
    const indice = this.jaulas.findIndex(j => j.idJaula === jaula.idJaula);

    if (indice !== -1) {
      this.jaulas[indice] = jaula;
      sessionStorage.removeItem('jaulas');
      sessionStorage.setItem('jaulas', JSON.stringify(this.jaulas));
    }
  }
}
