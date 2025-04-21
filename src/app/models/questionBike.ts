export class Question {
  constructor(
    public question: string,
    public options: string[],
    public correctAnswer: string
  ) {}

  // Ajoutez cette méthode pour mélanger les options
  shuffleOptions(): void {
    for (let i = this.options.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.options[i], this.options[j]] = [this.options[j], this.options[i]];
    }
  }

  // Méthode pour vérifier la réponse
  isCorrectAnswer(selectedAnswer: string): boolean {
    return selectedAnswer === this.correctAnswer;
  }
}