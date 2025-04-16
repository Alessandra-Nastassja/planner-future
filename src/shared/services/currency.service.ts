import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { log } from 'node:console';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  private visualizarValores = new BehaviorSubject<boolean>(true);
  visualizarValores$ = this.visualizarValores.asObservable();

  handleVisualizacaoValores(){
    this.visualizarValores.next(!this.visualizarValores.value);
  }

  setBlur(value: boolean) {
    this.visualizarValores.next(value);
  }
}
