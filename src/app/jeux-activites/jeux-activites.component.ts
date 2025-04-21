import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jeux-activites',
  templateUrl: './jeux-activites.component.html',
  styleUrls: ['./jeux-activites.component.css']
})
export class JeuxActivitesComponent {

  constructor(private router: Router) {}

  // Méthode pour commencer le quiz
  commencerQuiz() {
    this.router.navigate(['/quiz']);
  }

  // Méthode pour commencer le memory
  commencerMemory() {
    this.router.navigate(['/memory']);
  }

  // Méthode pour commencer le coloriage
  commencerColoriage() {
    this.router.navigate(['/coloriage']);
  }
}