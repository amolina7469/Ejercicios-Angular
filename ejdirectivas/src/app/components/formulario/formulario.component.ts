
import { Component, EventEmitter, Output } from '@angular/core';
import { Ejercicio } from 'src/app/interfaces/ejercicio.interface';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

@Output()  ejercicioEmitido: EventEmitter<Ejercicio>
nuevoEjercicio: Ejercicio = {ejercicio: "", tiempo: 0, fecha: ""};
constructor() {
  this.ejercicioEmitido = new EventEmitter();
}

recogerEjercicioForm(): void{
  if (this.nuevoEjercicio.ejercicio !== '' && this.nuevoEjercicio.tiempo !== 0 && this.nuevoEjercicio.fecha !== ''){
    this.ejercicioEmitido.emit(this.nuevoEjercicio);
    this.nuevoEjercicio = {ejercicio: "", tiempo: 0, fecha: ""}
  } else {
    alert('Los campos no pueden estar vacios')
  }
}
}
