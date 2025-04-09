import { Component } from '@angular/core';
import { GameService } from '../services/game.service';
import { fadeIn } from '../animations';

@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.css'],
  animations: [fadeIn], // Ajouter l'animation
})
export class ChallengeComponent {
  userGuess: number | null = null;

  constructor(public gameService: GameService) {}

  submitGuess() {
    if (this.userGuess !== null) {
      const isCorrect = this.gameService.checkGuess(this.userGuess);
      alert(isCorrect ? 'تهانينا! تخمينك صحيح.' : 'للأسف، تخمينك غير صحيح.');
    }
  }
}