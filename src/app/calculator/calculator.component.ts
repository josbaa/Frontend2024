import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [MatGridListModule, MatButtonModule, FormsModule, CommonModule],
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  buttons: string[] = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', 'C', '0', '+', '='];
  calculation: string = '';

  addValue(value: string) {
    if (value === 'C') {
      this.calculation = '';
    } else if (value === '=') {
      try {
        if (this.calculation) {
          this.calculation = eval(this.calculation).toString();
        }
      } catch (error) {
        this.calculation = 'Error';
      }
    } else {
      const lastChar = this.calculation[this.calculation.length - 1];
      if (['+', '-', '*', '/'].includes(value) && ['+', '-', '*', '/'].includes(lastChar)) {
        return;
      }
      this.calculation += value;
    }
  }
}
