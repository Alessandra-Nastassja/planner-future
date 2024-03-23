import { Component, Inject } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  faEye = faEye;
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
