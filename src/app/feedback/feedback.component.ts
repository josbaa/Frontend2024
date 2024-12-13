import { Component } from '@angular/core';
import { Question } from '../question';
import { MatSliderModule } from '@angular/material/slider';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [CommonModule, MatSliderModule],
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {
  questions: Question[] = [
    new Question("Kysymys 1"),
    new Question("Kysymys 2"),
    new Question("Kysymys 3")
  ];

  onInputChange(event: Event, question: Question): void {
    const inputElement = event.target as HTMLElement;
    const value = Number(inputElement.getAttribute('aria-valuenow')) ?? 0;
    question.setFeedback(value);
  }
}


