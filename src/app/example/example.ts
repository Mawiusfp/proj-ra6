import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './example.html',
  styleUrl: './example.css',
})
export class Example {
  n1: number = 0;
  n2: number = 0;
  result: number = 0;

  addNumbers() {
    this.result = this.n1 + this.n2;
  }
}