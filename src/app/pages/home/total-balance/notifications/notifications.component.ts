import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { faBell } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.scss'
})
export class NotificationsComponent {
  faBell = faBell;
}
