import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-guess-sugar',
  templateUrl: './guess-sugar.component.html',
  styleUrls: ['./guess-sugar.component.css']
})
export class GuessSugarComponent implements OnInit {
  feedbackMessage = '';
  isCorrect: boolean | null = null;
  selectedLevel: string = '';
  showFeedback: boolean = false;
  showTip: boolean = true;
  hasWon: boolean = false;

  constructor(public gameService: GameService) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.showTip = false;
    }, 10000);
  }

  startGame(): void {
    this.gameService.startNewGame();
    this.resetGameState();
    this.hasWon = false;
  }

  submitGuess(): void {
    if (!this.selectedLevel) {
      this.feedbackMessage = 'الرجاء اختيار مستوى السكر!';
      this.isCorrect = false;
      this.showFeedback = true;
      return;
    }

    const result = this.gameService.checkGuess(this.selectedLevel);
    this.isCorrect = result.isCorrect;
    this.feedbackMessage = this.getFeedbackMessage(result);
    this.showFeedback = true;

    setTimeout(() => {
      if (this.gameService.score >= 100) {
        this.hasWon = true;
      } else {
        this.gameService.nextRound();
        this.resetGameState();
      }
    }, 2000);
  }

  private getFeedbackMessage(result: { isCorrect: boolean, correctValue: string, actualLevel: number }): string {
    const levelText = `المستوى الفعلي: ${result.actualLevel} (${result.correctValue})`;
    return result.isCorrect ? `🎉 أحسنت! ${levelText}` : `❌ خطأ! ${levelText}`;
  }

  private resetGameState(): void {
    this.feedbackMessage = '';
    this.isCorrect = null;
    this.selectedLevel = '';
    this.showFeedback = false;
  }
}
