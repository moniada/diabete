import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular Material Modules
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field'; // <-- Ajouter MatFormFieldModule
import { MatInputModule } from '@angular/material/input';         // <-- Ajouter MatInputModule
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { QuestCeQueLeDiabeteComponent } from './quest-ce-que-le-diabete/quest-ce-que-le-diabete.component';
import { TypesDiabeteComponent } from './types-diabete/types-diabete.component';
import { VivreAvecDiabeteComponent } from './vivre-avec-diabete/vivre-avec-diabete.component';
import { JeuxActivitesComponent } from './jeux-activites/jeux-activites.component';
import { PourLesParentsComponent } from './pour-les-parents/pour-les-parents.component';
import { ColoriageComponent } from './coloriage/coloriage.component';
import { MemoryComponent } from './memory/memory.component';
import { QuizComponent } from './quiz/quiz.component';
import { SugarCatchComponent } from './sugar-catch/sugar-catch.component';
import { SugarChallengeComponent } from './sugar-challenge/sugar-challenge.component';
import { CharacterComponent } from './character/character.component';
import { ChallengeComponent } from './challenge/challenge.component';
import { ResultComponent } from './result/result.component';
import { GuessSugarComponent } from './guess-sugar/guess-sugar.component';
import { MatSelectModule } from '@angular/material/select';
import { HealthMazeComponent } from './health-maze/health-maze.component';
import { BikeRaceComponent } from './bike-race/bike-race.component';
import { MazeGameComponent } from './maze-game/maze-game.component';
import { LearnComponent } from './learn/learn.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FoodCalculatorComponent } from './food-calculator/food-calculator.component';
import { MagazineComponent } from './magazine/magazine.component'; // <-- Ajouter MatSelectModule

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    QuestCeQueLeDiabeteComponent,
    TypesDiabeteComponent,
    VivreAvecDiabeteComponent,
    JeuxActivitesComponent,
    PourLesParentsComponent,
    ColoriageComponent,
    MemoryComponent,
    QuizComponent,
    SugarCatchComponent,
    SugarChallengeComponent,
    CharacterComponent,
    ChallengeComponent,
    ResultComponent,
    GuessSugarComponent,
    HealthMazeComponent,
    BikeRaceComponent,
    MazeGameComponent,
    LearnComponent,
    AboutComponent,
    ContactComponent,
    FoodCalculatorComponent,
    MagazineComponent,
  ],
  imports: [
    // Modules Angular de base
    BrowserModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    // Modules Angular Material
    MatCardModule,        // Pour <mat-card>
    MatButtonModule,      // Pour <button mat-button>
    MatIconModule,        // Pour <mat-icon>
    MatToolbarModule,     // Pour <mat-toolbar>
    MatFormFieldModule,   // Pour <mat-form-field>
    MatInputModule,       // Pour <input matInput>
    DragDropModule,       // Pour le glisser-déposer (si utilisé)
    MatSelectModule, 
    // Module de routage
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}