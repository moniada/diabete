import { Component, OnInit } from '@angular/core';
import * as Phaser from 'phaser';

@Component({
  selector: 'app-health-maze',
  templateUrl: './health-maze.component.html',
  styleUrls: ['./health-maze.component.css'],
})
export class HealthMazeComponent implements OnInit {
currentActivity: any;
checkGuess() {
throw new Error('Method not implemented.');
}
  game!: Phaser.Game;
userGuess: any;

  ngOnInit() {
    this.game = new Phaser.Game({
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      scene: {
        preload: this.preload,
        create: this.create,
        update: this.update,
      },
    });
  }

  preload() {
    // Charger les assets
  }

  create() {
    // Créer le labyrinthe
  }

  update() {
    // Logique de mise à jour
  }
}