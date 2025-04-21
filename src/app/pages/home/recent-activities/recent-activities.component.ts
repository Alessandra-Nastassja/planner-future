import { Component } from '@angular/core';
import { HeaderComponent } from '../../../../shared/components/header/header.component';
import { CircleImageComponent } from "../../../../shared/components/circle-image/circle-image.component";
import { CurrencyService } from '../../../../shared/services/currency.service';

@Component({
  selector: 'app-recent-activities',
  standalone: true,
  imports: [
    HeaderComponent, 
    CircleImageComponent
  ],
  templateUrl: './recent-activities.component.html',
  styleUrl: './recent-activities.component.scss'
})
export class RecentActivitiesComponent {
  recentActivities = [
    {
      img: "https://img.freepik.com/fotos-premium/uma-mulher-de-camisa-branca-com-uma-camisa-branca-na-frente_1148406-9921.jpg",
      name: "Joy Miller",
      value: 50
    },
    {
      img: "https://img.freepik.com/fotos-gratis/retrato-de-um-homem-jovem-com-bracos-cruzaram-isolado-branco-fundo_23-2148056436.jpg",
      name: "Mike Peter",
      value: 50
    },
    {
      img: "https://img.freepik.com/fotos-gratis/vista-frontal-homem-falando-em-seu-smartphone_23-2148542642.jpg",
      name: "Josh Danis",
      value: 50
    }
  ];

  isBlurred: boolean = false;

  constructor(private currencyService: CurrencyService) {
    this.currencyService.visualizarValores$.subscribe(val => this.isBlurred = val);
  }

  handleVisualizacaoValores(): void {
    this.currencyService.handleVisualizacaoValores();
  }
}
