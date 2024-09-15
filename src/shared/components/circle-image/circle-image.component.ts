import { Component, input } from '@angular/core';

@Component({
  selector: 'app-circle-image',
  standalone: true,
  imports: [],
  templateUrl: './circle-image.component.html',
  styleUrl: './circle-image.component.scss'
})
export class CircleImageComponent {
  img = input<string>()
}
