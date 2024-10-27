import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  visualizarValores;

  constructor(@Inject(DOCUMENT) private document: Document) { 
    let localStorage = document.defaultView?.localStorage;
    let setVisualizacaoValores: any;
    
    if (localStorage) {
      setVisualizacaoValores = localStorage.getItem('visualizarValores');
      this.visualizarValores = JSON.parse(setVisualizacaoValores);
    }
  }

  handleVisualizacaoValores(){
    this.visualizarValores = !this.visualizarValores;
    localStorage.setItem('visualizarValores', JSON.stringify(this.visualizarValores));
  }
}
