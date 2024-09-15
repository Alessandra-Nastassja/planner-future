import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { TotalBalanceComponent } from './pages/total-balance/total-balance.component';
import { QuickSendsComponent } from "./pages/quick-sends/quick-sends.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TotalBalanceComponent, QuickSendsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-planner';
}