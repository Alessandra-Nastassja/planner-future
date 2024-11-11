import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  visualizarValores: Boolean = false;

  constructor(@Inject(DOCUMENT) private document: Document) { 
    this.setStateHiddenCurrencyStorage();
  }

  ngOnInit(): void {
    this.getStateHiddenCurrencyStorage();
  }

  setStateHiddenCurrencyStorage(): void {
    let localStorage = document.defaultView?.localStorage;
    let setVisualizacaoValores: any;
    
    if (localStorage) {
      setVisualizacaoValores = localStorage.getItem('visualizarValores');
      this.visualizarValores = JSON.parse(setVisualizacaoValores);
    }
  }

  getStateHiddenCurrencyStorage(): void {
    localStorage.setItem('visualizarValores', JSON.stringify(this.visualizarValores));
  }

  handleVisualizacaoValores(): Boolean{
    return this.visualizarValores = !this.visualizarValores;
  }
}
