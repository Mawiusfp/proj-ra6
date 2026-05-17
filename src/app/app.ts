import { Component, signal } from '@angular/core';
import { Example } from './example/example';

@Component({
  selector: 'app-root',
  imports: [Example],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ra6');
}
