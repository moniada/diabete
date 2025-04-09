import { Component } from '@angular/core';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-guess-sugar',
  templateUrl: './guess-sugar.component.html',
  styleUrls: ['./guess-sugar.component.css']
})
export class GuessSugarComponent {
  feedbackMessage = '';
  isCorrect: boolean | null = null;

  constructor(public gameService: GameService) {}

  startGame() {
    this.gameService.startNewGame();
    this.resetFeedback();
  }

  submitGuess() {
    if (this.gameService.userGuess === null) {
      this.feedbackMessage = 'الرجاء إدخال تخمينك!';
      this.isCorrect = false;
      return;
    }

    const result = this.gameService.checkGuess(this.gameService.userGuess);
    this.isCorrect = result.isCorrect;
    
    if (this.isCorrect) {
      this.feedbackMessage = `🎉 أحسنت! الجواب الصحيح: ${result.correctValue}`;
    } else {
      this.feedbackMessage = `❌ خطأ! الجواب الصحيح: ${result.correctValue}`;
    }

    setTimeout(() => {
      this.gameService.nextRound();
      this.resetFeedback();
    }, 2000);
  }

  private resetFeedback() {
    this.feedbackMessage = '';
    this.isCorrect = null;
  }
}