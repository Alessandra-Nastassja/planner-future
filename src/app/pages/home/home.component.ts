import { Component } from '@angular/core';
import { MenuComponent } from '../../../shared/components/menu/menu.component';
import { QuickSendsComponent } from './quick-sends/quick-sends.component';
import { TotalBalanceComponent } from './total-balance/total-balance.component';
import { RouterModule } from '@angular/router';
import { AccountBalanceComponent } from "./account-balance/account-balance.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TotalBalanceComponent, QuickSendsComponent, MenuComponent, RouterModule, AccountBalanceComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
