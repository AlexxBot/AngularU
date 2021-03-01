import { Component, OnInit } from '@angular/core';

//decorador propio de angular
@Component({
  selector: 'saludo', // se puede cambiar  el nombre
  templateUrl: './saludo.component.html',
  //template : `<h1>hola munod desde component</h1>
  //  <h2>fgdfgdfg</h2>`,
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {

  //a este nivel todas las propiedades que se definen se interponlna(visualizan en nen html)
  //interpolacion de variables
  mensaje: string;
  //binding para atributos de las etiquetas
  identificadorParrafo : string;
  identificadorInput: string;

  constructor() {
     this.mensaje = 'Un saludo a todos'; 
     this.identificadorParrafo = 'parrafoPrincipal';
     this.identificadorInput = 'text';
     
     setTimeout((a,b) => {
       this.mensaje = 'Otro mensaje diferente';
       this.identificadorParrafo = "main";
       this.identificadorInput = 'date';
     }, 3000);
   }

  ngOnInit(): void {

  }
  //interpolacion de metodos
  mostrarSaludo() : string {
    return 'Saludo desde el metodo'
  }

}
