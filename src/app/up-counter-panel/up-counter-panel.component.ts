import { Component } from '@angular/core';

@Component({
  selector: 'app-up-counter-panel',
  standalone: true,
  imports: [],
  templateUrl: './up-counter-panel.component.html',
  styleUrl: './up-counter-panel.component.css'
})
export class UpCounterPanelComponent {
  counter: number;

  constructor() {
    this.counter = 0

  }

  countUp(number: number) {
    this.counter += number;
  }
}
