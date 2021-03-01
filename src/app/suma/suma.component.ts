import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-suma',
  templateUrl: './suma.component.html',
  styleUrls: ['./suma.component.css']
})
export class SumaComponent implements OnInit {

  valor1: number;
  valor2: number;
  resultadoSuma: number;

  constructor() { }

  ngOnInit(): void {
  }

  //la forma esta de hacer el biding de  direccione con eventos es muy explicita y no muy funcional
  asignarNumero1(event):void{
    //anteponer como perfijo el + convierte el string en numeric
    this.valor1 = +event.target.value;
  }

  asignarNumero2(event):void{
    this.valor2 = +event.target.value;
  }

  
  Sumar(): void {
    console.log(`${this.valor1}  y ${this.valor2}` )
    this.resultadoSuma = +this.valor1 + +this.valor2;

  }
}
