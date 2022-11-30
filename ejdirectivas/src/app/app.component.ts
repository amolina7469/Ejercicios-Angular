import { Component } from '@angular/core';
import { Ejercicio } from './interfaces/ejercicio.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejdirectivas';

arrEntrenos: Ejercicio[]=[];

constructor() {

  this.arrEntrenos =[
    {ejercicio: 'Correr', tiempo: 20, fecha: '2022-10-25'},
    {ejercicio: 'Nadar', tiempo: 30, fecha: '2022-10-29'},
    {ejercicio: 'Montar en bici', tiempo: 60, fecha: '2022-11-05'},
    {ejercicio: 'Walking', tiempo: 45, fecha: '2022-03-12'}

  ]

}

guardarEjercicio($event: Ejercicio):void{

  this.arrEntrenos.push($event);
  console.log(this.arrEntrenos)
  
}
}
