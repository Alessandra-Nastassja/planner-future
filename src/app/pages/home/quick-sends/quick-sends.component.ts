import { Component } from '@angular/core';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { CircleImageComponent } from "../../../shared/components/circle-image/circle-image.component";

import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-quick-sends',
  standalone: true,
  imports: [HeaderComponent, CircleImageComponent, FontAwesomeModule],
  templateUrl: './quick-sends.component.html',
  styleUrl: './quick-sends.component.scss'
})
export class QuickSendsComponent {
  faPlus = faPlus;

  dataClients = [
    { 
      name: "Joy", 
      image: "https://img.freepik.com/fotos-premium/uma-mulher-de-camisa-branca-com-uma-camisa-branca-na-frente_1148406-9921.jpg",
      finance: null
    },
    { 
      name: "Mike", 
      image: "https://img.freepik.com/fotos-gratis/retrato-de-um-homem-jovem-com-bracos-cruzaram-isolado-branco-fundo_23-2148056436.jpg",
      finance: null
    },
    { 
      name: "Josh", 
      image: "https://img.freepik.com/fotos-gratis/vista-frontal-homem-falando-em-seu-smartphone_23-2148542642.jpg",
      finance: null
    }
  ]
}
