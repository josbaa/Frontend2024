import { Injectable } from '@angular/core';
import { Question } from './question';

@Injectable({
  providedIn: 'root',
})
export class QuestionsService {
  private questions: Question[] = [
    new Question('Miten arvioisit kokemuksesi?'),
    new Question('Mitä voisimme parantaa?'),
    new Question('Oliko jotain erityisen hyvää?'),
  ];

  getQuestions(): Question[] {
    return this.questions;
  }
}
