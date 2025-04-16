import { Component, inject } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { CurrencyService } from '../../../../shared/services/currency.service';


@Component({
  selector: 'app-account-balance',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './account-balance.component.html',
  styleUrl: './account-balance.component.scss'
})
export class AccountBalanceComponent {
  isBlurred: boolean = true;
  
  faArrowRight = faArrowRight;

  constructor(private currencyService: CurrencyService) {
    this.currencyService.visualizarValores$.subscribe(val => this.isBlurred = val);
  }

  handleVisualizacaoValores(): void {
    this.currencyService.handleVisualizacaoValores();
  }
}
