import { Injectable } from '@angular/core';
import { Question } from '../models/questionBike';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  private questions: Question[] = [
    {
        question: 'ما هو مستوى السكر الطبيعي في الدم؟',
        options: ['70-100 mg/dL', '120-150 mg/dL', '200-250 mg/dL'],
        correctAnswer: '70-100 mg/dL',
        isCorrectAnswer: function (selectedAnswer: string): boolean {
            throw new Error('Function not implemented.');
        },
        shuffleOptions: function (): void {
            throw new Error('Function not implemented.');
        }
    },
    {
        question: 'ما هي الأعراض الشائعة لارتفاع السكر في الدم؟',
        options: ['العطش الشديد', 'الدوخة', 'كلا الاثنين'],
        correctAnswer: 'كلا الاثنين',
        isCorrectAnswer: function (selectedAnswer: string): boolean {
            throw new Error('Function not implemented.');
        },
        shuffleOptions: function (): void {
            throw new Error('Function not implemented.');
        }
    },
    {
        question: 'ما هو الغذاء المناسب لمرضى السكري؟',
        options: ['الحلوى', 'الخضروات', 'المشروبات الغازية'],
        correctAnswer: 'الخضروات',
        isCorrectAnswer: function (selectedAnswer: string): boolean {
            throw new Error('Function not implemented.');
        },
        shuffleOptions: function (): void {
            throw new Error('Function not implemented.');
        }
    },
  ];

  getRandomQuestion(): Question {
    const randomIndex = Math.floor(Math.random() * this.questions.length);
    return this.questions[randomIndex];
  }
}