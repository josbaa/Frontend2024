import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';
import { Question } from '../question';
import { FormsModule } from '@angular/forms';
import { QuestionsService } from '../question.service';

@Component({
  selector: 'app-palaute',
  standalone: true,
  imports: [CommonModule, MatSliderModule, FormsModule],
  templateUrl: './palaute.component.html',
  styleUrls: ['./palaute.component.css'],
  providers: [QuestionsService],
})
export class PalauteComponent implements OnInit {
  questions: Question[] = [];

  constructor(private questionsService: QuestionsService) {}

  ngOnInit(): void {
    this.questions = this.questionsService.getQuestions();
  }

  onInputChange(event: any, question: Question): void {
    // Extract value from the event
    let value = Number(event.target?.value || event.value);
    console.log('Raw slider value:', value);
  
    // Clamp value between 0 and 4
    value = Math.min(Math.max(value, 0), 4);
    console.log('Clamped slider value:', value);
  
    if (isNaN(value)) {3

      console.error('Invalid value:', value);
      return;
    }
  
    // Update the feedback
    question.setFeedback(value);
    console.log(`Feedback updated: Question = ${question.questionText}, Value = ${value}`);
  }
  submitFeedback(): void {
    const feedback = this.questions.map((q) => ({
      question: q.questionText,
      feedback: q.setFeedback,
    }));
    

    console.log('Feedback submitted:', feedback);
  }
}
