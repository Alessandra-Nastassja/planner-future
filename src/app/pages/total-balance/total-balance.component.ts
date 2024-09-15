import { Component, Inject } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEye, faBell } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-total-balance',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './total-balance.component.html',
  styleUrl: './total-balance.component.scss'
})
export class TotalBalanceComponent {
  faEye = faEye;
  faBell = faBell;
  visualizarValores;

  itensButtons = [
    { name: 'Send', icon: 'faEye', link: '' },
    { name: 'Request', icon: '', link: '' },
  ]

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
