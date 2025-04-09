import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

class Question {
  constructor(
    public question: string,
    public options: string[],
    public correctAnswer: string
  ) {}

  shuffleOptions(): void {
    for (let i = this.options.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.options[i], this.options[j]] = [this.options[j], this.options[i]];
    }
  }

  isCorrectAnswer(selectedAnswer: string): boolean {
    return selectedAnswer === this.correctAnswer;
  }
}

@Component({
  selector: 'app-bike-race',
  templateUrl: './bike-race.component.html',
  styleUrls: ['./bike-race.component.css'],
  animations: [
    trigger('optionAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('300ms {{delay}}ms ease-out', 
          style({ opacity: 1, transform: 'translateY(0)' }))
      ], { params: { delay: 0 } })
    ]),
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-out', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class BikeRaceComponent implements OnInit {
  @ViewChild('gameCanvas', { static: true }) gameCanvas!: ElementRef<HTMLCanvasElement>;
  private ctx!: CanvasRenderingContext2D;

  readonly MINIMUM_WIN_SCORE = 100; // Objectif de 100 points
  speed: number = 10;
  distance: number = 0;
  score: number = 0;
  correctAnswers: number = 0;
  progress: number = 0;
  currentQuestion!: Question;
  gameOver: boolean = false;
  feedbackMessage: string = '';
  showFeedback: boolean = false;
  isCorrect: boolean = false;

  medals = [
    { color: '#FFD700' },
    { color: '#C0C0C0' },
    { color: '#CD7F32' }
  ];

  questions: Question[] = [
    new Question('ما هو مستوى السكر الطبيعي في الدم؟', ['70-100 mg/dL', '120-150 mg/dL', '200-250 mg/dL'], '70-100 mg/dL'),
    new Question('ما هي الأعراض الشائعة لارتفاع السكر في الدم؟', ['العطش الشديد', 'الدوخة', 'كلا الاثنين'], 'كلا الاثنين'),
    new Question('ما هو الغذاء المناسب لمرضى السكري؟', ['الحلوى', 'الخضروات', 'المشروبات الغازية'], 'الخضروات'),
    new Question('ما هو دور الأنسولين في الجسم؟', ['يخفض نسبة السكر', 'يرفع نسبة السكر', 'ليس له دور'], 'يخفض نسبة السكر'),
    new Question('أي من هذه الأطعمة غنية بالألياف؟', ['الخبز الأبيض', 'البقوليات', 'الحلوى'], 'البقوليات'),
    new Question('أي نوع من الرياضة يساعد في تقليل نسبة السكر؟', ['المشي', 'مشاهدة التلفاز', 'تناول الطعام'], 'المشي'),
    new Question('ما هو أحد المضاعفات المحتملة لمرض السكري؟', ['ضعف البصر', 'زيادة الوزن', 'نمو العضلات'], 'ضعف البصر'),
    new Question('ما هو المشروب الأكثر فائدة لمرضى السكري؟', ['الماء', 'العصير المحلى', 'المشروبات الغازية'], 'الماء'),
    new Question('كم مرة يجب على مريض السكري قياس نسبة السكر في الدم؟', ['يومياً', 'مرة في الشهر', 'لا يحتاج'], 'يومياً'),
    new Question('أي من هذه العادات تساعد في التحكم بالسكري؟', ['تناول الحلويات يومياً', 'ممارسة الرياضة', 'السهر الطويل'], 'ممارسة الرياضة')
  ];

  bikeX: number = 450;
  bikeY: number = 300;
  finishLineX: number = 50;

  bikeImage!: HTMLImageElement;
  backgroundImage!: HTMLImageElement;

  ngOnInit(): void {
    this.ctx = this.gameCanvas.nativeElement.getContext('2d')!;
    this.loadAssets();
    this.loadNextQuestion();
    this.drawGame(); // On initialise le dessin une seule fois
  }

  loadAssets(): void {
    this.bikeImage = new Image();
    this.bikeImage.src = 'assets/img/bike.png';
    
    this.backgroundImage = new Image();
    this.backgroundImage.src = 'assets/img/route.avif';
    this.backgroundImage.onload = () => {
      this.drawGame();
    };
  }

  drawInitialFrame(): void {
    this.ctx.clearRect(0, 0, 800, 400);
    this.ctx.drawImage(this.backgroundImage, 0, 0, 800, 400);
    this.ctx.drawImage(this.bikeImage, this.bikeX, this.bikeY, 80, 50);
  }

  loadNextQuestion(): void {
    if (this.questions.length === 0) {
      console.error('Aucune question disponible');
      return;
    }
    
    const randomIndex = Math.floor(Math.random() * this.questions.length);
    this.currentQuestion = new Question(
      this.questions[randomIndex].question,
      [...this.questions[randomIndex].options],
      this.questions[randomIndex].correctAnswer
    );
    
    this.currentQuestion.shuffleOptions();
  }

  checkAnswer(selectedAnswer: string): void {
    if (!this.currentQuestion) return;

    this.isCorrect = this.currentQuestion.isCorrectAnswer(selectedAnswer);

    if (this.isCorrect) {
      // Réponse correcte
      this.speed += 5;
      this.score += 10;
      this.correctAnswers++;
      this.bikeX = Math.max(this.finishLineX, this.bikeX - 50); // Déplacement plus important
      this.playSound('correct');
      this.showTemporaryFeedback('👍 أحسنت! إجابة صحيحة');
      
      // Vérifier si le joueur a gagné
      if (this.score >= this.MINIMUM_WIN_SCORE) {
        this.gameOver = true;
      }
    } else {
      // Réponse incorrecte
      this.speed = Math.max(5, this.speed - 5);
      this.score = Math.max(0, this.score - 5); // Le score ne peut pas devenir négatif
      this.bikeX = Math.min(450, this.bikeX + 30);
      this.playSound('wrong');
      this.showTemporaryFeedback('❌ خطأ! حاول مرة أخرى');
    }
    
    this.updateProgress();
    this.drawGame();
    this.loadNextQuestion();
  }

  showTemporaryFeedback(message: string): void {
    this.feedbackMessage = message;
    this.showFeedback = true;
    
    setTimeout(() => {
      this.showFeedback = false;
    }, 2000);
  }

  playSound(type: 'correct' | 'wrong'): void {
    const audio = new Audio();
    audio.src = type === 'correct' 
      ? 'assets/sounds/correct.mp3' 
      : 'assets/sounds/wrong.mp3';
    audio.play().catch(e => console.error('Erreur de lecture audio:', e));
  }

  updateProgress(): void {
    const totalDistance = 450 - this.finishLineX;
    const currentDistance = this.bikeX - this.finishLineX;
    this.progress = Math.min(100, Math.round((1 - currentDistance / totalDistance) * 100));
  }

  drawGame(): void {
    this.ctx.clearRect(0, 0, 800, 400);
    this.ctx.drawImage(this.backgroundImage, 0, 0, 800, 400);
    
    // Ligne d'arrivée
    this.ctx.strokeStyle = this.score >= this.MINIMUM_WIN_SCORE ? 'green' : 'red';
    this.ctx.lineWidth = 5;
    this.ctx.beginPath();
    this.ctx.moveTo(this.finishLineX, 0);
    this.ctx.lineTo(this.finishLineX, 400);
    this.ctx.stroke();
    
    // Vélo
    this.ctx.drawImage(this.bikeImage, this.bikeX, this.bikeY, 80, 50);
    
    // Afficher le score
    this.ctx.fillStyle = 'black';
    this.ctx.font = '20px Arial';
    this.ctx.textAlign = 'right';
    this.ctx.fillText(`النقاط: ${this.score}/${this.MINIMUM_WIN_SCORE}`, 750, 30);
  }

  resetGame(): void {
    this.speed = 10;
    this.distance = 0;
    this.score = 0;
    this.correctAnswers = 0;
    this.progress = 0;
    this.bikeX = 450;
    this.gameOver = false;
    this.loadNextQuestion();
    this.drawGame();
  }
}