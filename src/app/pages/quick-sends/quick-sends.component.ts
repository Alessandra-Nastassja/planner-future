import { Component } from '@angular/core';
import { HeaderComponent } from '../../../shared/components/header/header.component';

@Component({
  selector: 'app-quick-sends',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './quick-sends.component.html',
  styleUrl: './quick-sends.component.scss'
})
export class QuickSendsComponent {

  dadaClients = [
    { name: "joy" },
    { name: "Mike" },
    { name: "Josh" },
  ]
}
