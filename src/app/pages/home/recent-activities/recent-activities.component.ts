import { Component } from '@angular/core';
import { HeaderComponent } from '../../../../shared/components/header/header.component';

@Component({
  selector: 'app-recent-activities',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './recent-activities.component.html',
  styleUrl: './recent-activities.component.scss'
})
export class RecentActivitiesComponent {

}
