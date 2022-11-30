import { Component, Input } from '@angular/core';
import { Ejercicio } from 'src/app/interfaces/ejercicio.interface';

@Component({
  selector: 'app-totales',
  templateUrl: './totales.component.html',
  styleUrls: ['./totales.component.css']
})
export class TotalesComponent {

@Input()  ejercicios : Ejercicio[]=[];

minutosTotales: number = 0;
caloriasTotales: number = 0;

ngOnInit(): void {

}

ngDoCheck(): void {
 
  this.minutosTotales = 0;
  this.caloriasTotales = 0;
 
  for (let ejercicio of this.ejercicios) {
    this.minutosTotales += ejercicio.tiempo;
  }
  this.caloriasTotales = this.minutosTotales * 4;
}

}
