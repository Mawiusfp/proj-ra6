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
  result: any = 0;

  addNumbers() {
    if(this.n1 < 0 || this.n2 < 0) {
      this.result = "No queremos números negativos";
    } else {
      this.result = String(this.n1 + this.n2);
    }
  }
}