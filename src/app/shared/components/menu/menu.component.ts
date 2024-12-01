import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHome, faTicket, faQrcode, faReceipt, faGear } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule, RouterModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  faHome = faHome;
  faTicket = faTicket;
  faQrcode = faQrcode;
  faReceipt = faReceipt;
  faGear = faGear;

  itensButtons = [
    { name: 'Home', icon: faHome, link: '/home' },
    { name: 'Transactions', icon: faTicket, link: null },
    { name: null, icon: faQrcode, link: null },
    { name: 'Report', icon: faReceipt, link: null },
    { name: 'Settings', icon: faGear, link: null },
  ]

}
