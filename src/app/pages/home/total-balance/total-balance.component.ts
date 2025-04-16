import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEye, faBell, faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';

import { CurrencyService } from '../../../../shared/services/currency.service';

import { CircleImageComponent } from '../../../../shared/components/circle-image/circle-image.component';

@Component({
  selector: 'app-total-balance',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule, CircleImageComponent],
  templateUrl: './total-balance.component.html',
  styleUrl: './total-balance.component.scss'
})
export class TotalBalanceComponent {
  isBlurred: boolean = true;

  faEye = faEye;
  faBell = faBell;
  faArrowDown = faArrowDown;
  faArrowUp = faArrowUp;

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

  constructor(private currencyService: CurrencyService) {
    this.currencyService.visualizarValores$.subscribe(val => this.isBlurred = val);
  }

  handleVisualizacaoValores(): void {
    this.currencyService.handleVisualizacaoValores();
  }
}
