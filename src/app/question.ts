export class Question {
    questionText: string;
    answer: string;
  
    constructor(question: string) {
      this.questionText = question;
      this.answer = "Ei vielä arvosteltu";
    }
  
    setFeedback(value: number): void {
      if (value === 0) {
        this.answer = "Huono";
      } else if (value === 1) {
        this.answer = "OK";
      } else {
        this.answer = "Hyvä";
      }
    }
  }
  
  