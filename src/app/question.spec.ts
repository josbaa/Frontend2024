import { Question } from './question';

describe('Question', () => {
  it('should create an instance', () => {
    const question = new Question('Testikysymys', 'Testipalautetta');
    expect(question).toBeTruthy();
  });

  it('should set feedback correctly', () => {
    const question = new Question('Testikysymys');
    question.setFeedback(1);
    expect(question.answer).toBe('OK');
  });
});
