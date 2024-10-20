import { Component } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-account-balance',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './account-balance.component.html',
  styleUrl: './account-balance.component.scss'
})
export class AccountBalanceComponent {
  faArrowRight = faArrowRight;
}
