import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {UpCounterPanelComponent} from './up-counter-panel/up-counter-panel.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UpCounterPanelComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'up';
}
