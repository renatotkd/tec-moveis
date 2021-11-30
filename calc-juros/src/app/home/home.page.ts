import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  capital: number;
  meses: number;
  taxa: number;
  montante: number;
  juros: number;
  
 
  constructor() {}

  calcular() {
    this.montante = this.capital *( 1 +((this.taxa /100 )* this.meses));
    this.juros = this.montante - this.capital;
   
  }

}
