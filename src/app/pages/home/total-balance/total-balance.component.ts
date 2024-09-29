import { Component, Inject } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEye, faBell, faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { CircleImageComponent } from '../../../../shared/components/circle-image/circle-image.component';

@Component({
  selector: 'app-total-balance',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule, CircleImageComponent],
  templateUrl: './total-balance.component.html',
  styleUrl: './total-balance.component.scss'
})
export class TotalBalanceComponent {
  faEye = faEye;
  faBell = faBell;
  faArrowDown = faArrowDown;
  faArrowUp = faArrowUp;

  visualizarValores;

  itensButtons = [
    { name: 'Send', icon: faArrowDown, link: '' },
    { name: 'Request', icon: faArrowUp, link: '' },
  ]

  dadoClient = [
    { 
      name: "Charles Oliveira Jr.", 
      image: "https://img.freepik.com/fotos-gratis/retrato-de-um-empresario-bem-sucedido-de-pele-escura-usando-um-terno-formal-cinza-de-pe-contra-a-parede_273609-5600.jpg",
      finance: {
        totalBalance: 12000,
      }
    }
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
