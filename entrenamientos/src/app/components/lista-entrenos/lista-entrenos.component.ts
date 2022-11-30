import { Component, Input } from '@angular/core';
import { Ejercicio } from 'src/app/interfaces/ejercicio.interface';

@Component({
  selector: 'app-lista-entrenos',
  templateUrl: './lista-entrenos.component.html',
  styleUrls: ['./lista-entrenos.component.css']
})
export class ListaEntrenosComponent {

@Input() ejercicios: Ejercicio[]=[];

ngOnInit():void {
  console.log(this.ejercicios)
  
}
}
