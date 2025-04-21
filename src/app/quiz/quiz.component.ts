import { Component } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent {
  // Liste des questions et réponses
  questions = [
    {
      question: "Qu'est-ce que le diabète ?",
      reponses: ["Une maladie du cœur", "Un problème de sucre dans le sang", "Une infection"],
      bonneReponse: "Un problème de sucre dans le sang"
    },
    {
      question: "Quel organe est affecté par le diabète ?",
      reponses: ["Le foie", "Le pancréas", "Les reins"],
      bonneReponse: "Le pancréas"
    },
    {
      question: "Quel est le rôle de l'insuline ?",
      reponses: ["Aider à digérer", "Réguler le sucre dans le sang", "Renforcer les os"],
      bonneReponse: "Réguler le sucre dans le sang"
    }
  ];

  currentQuestionIndex = 0; // Index de la question actuelle
  score = 0; // Score du quiz
  reponseSoumise = false; // Si une réponse a été soumise
  reponseCorrecte = false; // Si la réponse est correcte
  reponseIncorrecte = false; // Si la réponse est incorrecte
  bonneReponse = ''; // La bonne réponse à afficher
  quizTermine = false; // Si le quiz est terminé

  // Vérifie la réponse sélectionnée
  verifierReponse(reponse: string) {
    this.reponseSoumise = true;
    if (reponse === this.questions[this.currentQuestionIndex].bonneReponse) {
      this.score++;
      this.reponseCorrecte = true;
    } else {
      this.reponseIncorrecte = true;
    }
    this.bonneReponse = this.questions[this.currentQuestionIndex].bonneReponse;
  }

  // Passe à la question suivante
  questionSuivante() {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
      this.reponseSoumise = false;
      this.reponseCorrecte = false;
      this.reponseIncorrecte = false;
    } else {
      this.quizTermine = true;
    }
  }

  // Réinitialise le quiz
  reinitialiserQuiz() {
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.reponseSoumise = false;
    this.reponseCorrecte = false;
    this.reponseIncorrecte = false;
    this.quizTermine = false;
  }
}