import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { JeuxActivitesComponent } from './jeux-activites/jeux-activites.component';
import { PourLesParentsComponent } from './pour-les-parents/pour-les-parents.component';
import { QuestCeQueLeDiabeteComponent } from './quest-ce-que-le-diabete/quest-ce-que-le-diabete.component';
import { TypesDiabeteComponent } from './types-diabete/types-diabete.component';
import { VivreAvecDiabeteComponent } from './vivre-avec-diabete/vivre-avec-diabete.component';
import { ColoriageComponent } from './coloriage/coloriage.component';
import { MemoryComponent } from './memory/memory.component';
import { QuizComponent } from './quiz/quiz.component';
import { SugarCatchComponent } from './sugar-catch/sugar-catch.component';
import { SugarChallengeComponent } from './sugar-challenge/sugar-challenge.component';
import { GuessSugarComponent } from './guess-sugar/guess-sugar.component';
import { BikeRaceComponent } from './bike-race/bike-race.component';
import { MazeGameComponent } from './maze-game/maze-game.component';
import { LearnComponent } from './learn/learn.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FoodCalculatorComponent } from './food-calculator/food-calculator.component';
import { MagazineComponent } from './magazine/magazine.component';

 const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'quest-ce-que-le-diabete', component: QuestCeQueLeDiabeteComponent },
  { path: 'types-diabete', component: TypesDiabeteComponent },
  { path: 'vivre-avec-diabete', component: VivreAvecDiabeteComponent },
  { path: 'jeux-activites', component: JeuxActivitesComponent },
  { path: 'pour-les-parents', component: PourLesParentsComponent },
  { path: 'quiz', component: QuizComponent },
  { path: 'memory', component: MemoryComponent },
  { path: 'coloriage', component: ColoriageComponent },
  { path: 'sugar-catch', component: SugarCatchComponent },
  { path: 'sugar-challenge', component: SugarChallengeComponent },
  { path: 'sugar-guess', component: GuessSugarComponent },
  { path: 'bike-race', component: BikeRaceComponent },


  { path: 'maze', component: MazeGameComponent },

  { path: 'learn', component: LearnComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'foodCalculator', component: FoodCalculatorComponent },
  { path: 'magazine', component: MagazineComponent },

  { path: '**', redirectTo: '' } // Redirection pour les routes inconnues
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
