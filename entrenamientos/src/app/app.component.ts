import { Component } from '@angular/core';
import { Ejercicio } from './interfaces/ejercicio.interface';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'entrenamientos';
  arrEjercicios: Ejercicio[]=[];
  id: number = 4;

  constructor() {
    this.arrEjercicios = [
      {id:1, ejercicio: 'Correr', tiempo: 30, fecha: '2022-06-12'},
      {id:2, ejercicio: 'Nadar', tiempo: 20, fecha: '2022-08-19'},
      {id:3, ejercicio: 'Correr', tiempo: 30, fecha: '2022-09-25'}
    ]
  }

  guardarEjercicio($event: Ejercicio){
    $event.id = this.id;
    this.arrEjercicios.push($event);
    alert('Ejercicio actualizado')
    this.id ++;
    console.log(this.arrEjercicios);
  }
}
