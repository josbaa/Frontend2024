export class Question {
  questionText: string;
  answer: string;
  feedback: string;

  constructor(question: string, feedback: string = '') {
    this.questionText = question;
    this.feedback = feedback;
    this.answer = 'Ei vielä arvosteltu';
  }

  getFeedbackText(): string {
    return this.feedback || 'Ei palautetta annettu';
  }

  setFeedback(value: number): void {
    if (value === 0) {
      this.answer = 'Huono';
    } else if (value === 1) {
      this.answer = 'OK';
    } else {
      this.answer = 'Hyvä';
    }
  }
}

  