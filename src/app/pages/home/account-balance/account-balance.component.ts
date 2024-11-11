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
  faArrowRight = faArrowRight;

  private currencyService = inject(CurrencyService);

  handleVisualizacaoValores(): Boolean {
    return this.currencyService.handleVisualizacaoValores();
  }
}
