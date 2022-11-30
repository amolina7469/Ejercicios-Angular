
import { Component, EventEmitter, Output } from '@angular/core';
import { Ejercicio } from 'src/app/interfaces/ejercicio.interface';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  @Output() ejercicioEnviado : EventEmitter<Ejercicio>;
  nuevoEjercicio: Ejercicio = {ejercicio: "", tiempo: 0, fecha: ""}
 
  constructor(){
    this.ejercicioEnviado = new EventEmitter();
  }

  getDatos(): void{
      this.ejercicioEnviado.emit(this.nuevoEjercicio);
      console.log(this.nuevoEjercicio)
      this.nuevoEjercicio = {ejercicio: "", tiempo: 0, fecha: ""}
  }
}

