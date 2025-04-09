import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-maze-game',
  templateUrl: './maze-game.component.html',
  styleUrls: ['./maze-game.component.css']
})
export class MazeGameComponent implements OnInit {
  // Configuration du labyrinthe
  mazeLayout: number[][] = [
    [0, 1, 0, 0, 0, 1, 4, 0, 0, 1],
    [2, 1, 2, 1, 0, 1, 0, 1, 4, 1],
    [0, 0, 0, 1, 0, 0, 4, 1, 0, 0],
    [1, 1, 4, 1, 1, 1, 0, 1, 1, 0],
    [0, 0, 0, 0, 0, 1, 4, 0, 0, 0],
    [0, 1, 1, 1, 4, 1, 0, 1, 1, 0],
    [0, 0, 0, 1, 0, 4, 0, 1, 0, 0],
    [1, 1, 0, 1, 1, 1, 4, 1, 0, 1],
    [0, 0, 0, 1, 0, 0, 0, 1, 0, 0],
    [0, 1, 4, 0, 0, 1, 0, 0, 0, 3]
  ];

  // État du jeu
  playerPosition = { x: 0, y: 0 };
  energy = 100;
  score = 0;
  level = 1;
  showQuestion = false;
  currentQuestion: any = null;
  isQuestionActive = false;
  gameStarted = false;

  // Questions disponibles
  questions = [
    {
      question: 'ما هو المرض الذي يؤثر على قدرة الجسم على تنظيم مستوى السكر في الدم؟',
      options: ['ضغط الدم', 'السكري', 'الربو'],
      correctAnswer: 'السكري'
    },
    {
      question: 'ما هو النوع الأكثر شيوعاً من مرض السكري؟',
      options: ['النوع الأول', 'النوع الثاني', 'سكري الحمل'],
      correctAnswer: 'النوع الثاني'
    },
    {
      question: 'ما هو العضو المسؤول عن إنتاج الأنسولين في الجسم؟',
      options: ['الكبد', 'البنكرياس', 'القلب'],
      correctAnswer: 'البنكرياس'
    },
    {
      question: 'ما هي أعراض ارتفاع مستوى السكر في الدم؟',
      options: ['العطش الشديد', 'كثرة التبول', 'كل ما ذكر'],
      correctAnswer: 'كل ما ذكر'
    },
    {
      question: 'كم مرة يجب على مريض السكري فحص مستوى السكر في الدم يومياً؟',
      options: ['مرة واحدة', '2-4 مرات', 'فقط عند الشعور بأعراض'],
      correctAnswer: '2-4 مرات'
    },
    {
      question: 'ما هو مستوى السكر الطبيعي في الدم أثناء الصيام؟',
      options: ['أقل من 100 مغ/دل', '100-125 مغ/دل', 'أكثر من 126 مغ/دل'],
      correctAnswer: 'أقل من 100 مغ/دل'
    },
    {
      question: 'ما هي مضاعفات السكري على المدى الطويل؟',
      options: ['أمراض القلب', 'مشاكل في العين', 'كل ما ذكر'],
      correctAnswer: 'كل ما ذكر'
    },
    {
      question: 'ما هو اختبار الهيموغلوبين السكري (A1C)؟',
      options: ['فحص لمتوسط السكر في الدم خلال 3 أشهر', 'فحص للسكر العشوائي', 'فحص لوظائف الكلى'],
      correctAnswer: 'فحص لمتوسط السكر في الدم خلال 3 أشهر'
    },
    {
      question: 'ما هو المستوى الطبيعي لاختبار A1C؟',
      options: ['أقل من 5.7%', '5.7%-6.4%', '6.5% أو أعلى'],
      correctAnswer: 'أقل من 5.7%'
    },
    {
      question: 'ما هي العوامل التي تزيد خطر الإصابة بالنوع الثاني من السكري؟',
      options: ['السمنة', 'قلة النشاط البدني', 'كل ما ذكر'],
      correctAnswer: 'كل ما ذكر'
    },
    {
      question: 'ما هو سكري الحمل؟',
      options: ['سكري يظهر أثناء الحمل', 'نوع خاص من السكري عند الأطفال', 'مرحلة قبل السكري'],
      correctAnswer: 'سكري يظهر أثناء الحمل'
    },
    {
      question: 'ما هي التوصيات الغذائية لمرضى السكري؟',
      options: ['تقليل السكريات', 'زيادة الألياف', 'كل ما ذكر'],
      correctAnswer: 'كل ما ذكر'
    },
    {
      question: 'ما هو تأثير الرياضة على مريض السكري؟',
      options: ['تحسين حساسية الأنسولين', 'خفض مستوى السكر في الدم', 'كل ما ذكر'],
      correctAnswer: 'كل ما ذكر'
    },
    {
      question: 'ما هي أعراض انخفاض السكر في الدم؟',
      options: ['التعرق', 'الدوخة', 'كل ما ذكر'],
      correctAnswer: 'كل ما ذكر'
    },
    {
      question: 'كيف يتم علاج انخفاض السكر في الدم؟',
      options: ['تناول 15 جرام من السكر', 'شرب الماء', 'النوم'],
      correctAnswer: 'تناول 15 جرام من السكر'
    },
    {
      question: 'ما هي كمية الكربوهيدرات الموصى بها لمرضى السكري في الوجبة الواحدة؟',
      options: ['15-30 جرام', '45-60 جرام', 'لا يوجد حد'],
      correctAnswer: '45-60 جرام'
    },
    {
      question: 'ما هو تأثير التوتر على مستوى السكر في الدم؟',
      options: ['يرفع مستوى السكر', 'يخفض مستوى السكر', 'لا يؤثر'],
      correctAnswer: 'يرفع مستوى السكر'
    },
    {
      question: 'كم مرة يجب على مريض السكري زيارة الطبيب؟',
      options: ['كل 3 أشهر', 'سنوياً', 'فقط عند وجود مشاكل'],
      correctAnswer: 'كل 3 أشهر'
    },
    {
      question: 'ما هو تأثير التدخين على مريض السكري؟',
      options: ['يزيد خطر المضاعفات', 'يؤثر على الدورة الدموية', 'كل ما ذكر'],
      correctAnswer: 'كل ما ذكر'
    },
    {
      question: 'ما هي أهمية العناية بالقدمين لمريض السكري؟',
      options: ['الوقاية من التقرحات', 'الكشف المبكر عن المشاكل', 'كل ما ذكر'],
      correctAnswer: 'كل ما ذكر'
    }
  ];

  ngOnInit(): void {
    this.initializeGame();
  }

  initializeGame(): void {
    this.playerPosition = { x: 0, y: 0 };
    this.energy = 100;
    this.score = 0;
    this.level = 1;
    this.gameStarted = true;
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent): void {
    if (!this.gameStarted || this.isQuestionActive) return;

    switch (event.key) {
      case 'ArrowUp': this.movePlayer(0, -1); break;
      case 'ArrowDown': this.movePlayer(0, 1); break;
      case 'ArrowRight': this.movePlayer(-1, 0); break;
      case 'ArrowLeft': this.movePlayer(1, 0); break;
    }
  }

  movePlayer(dx: number, dy: number): void {
    const newX = this.playerPosition.x + dx;
    const newY = this.playerPosition.y + dy;

    if (this.isValidMove(newX, newY)) {
      this.playerPosition = { x: newX, y: newY };
      this.checkCell();
      this.energy = Math.max(0, this.energy - 1); // Dépense d'énergie
    }
  }

  isValidMove(x: number, y: number): boolean {
    return (
      x >= 0 && x < 10 &&
      y >= 0 && y < 10 &&
      this.mazeLayout[y][x] !== 1
    );
  }

  checkCell(): void {
    const cell = this.mazeLayout[this.playerPosition.y][this.playerPosition.x];
    console.log(cell);
    switch (cell) {
      case 2: this.showRandomQuestion(); break;
      case 3: this.levelUp(); break;
      case 4: this.showRandomQuestion(); break;
    }
  }

  showRandomQuestion(): void {
    this.isQuestionActive = true;
    this.showQuestion = true;
    console.log( this.isQuestionActive);
    console.log( this.showQuestion);
    this.currentQuestion = this.questions[Math.floor(Math.random() * this.questions.length)];
  }

  handleAnswer(selectedAnswer: string): void {
    const isCorrect = selectedAnswer === this.currentQuestion.correctAnswer;
    
    if (isCorrect) {
      this.score += 10 * this.level;
      this.energy = Math.min(100, this.energy + 20);
    } else {
      this.energy = Math.max(0, this.energy - 20);
    }

    this.resetQuestionState();
    this.checkGameOver();
  }

  resetQuestionState(): void {
    this.isQuestionActive = false;
    this.showQuestion = false;
    this.currentQuestion = null;
  }
  penalizePlayer(): void {
    this.energy = Math.max(0, this.energy - 10);
    this.resetQuestionState();
    this.checkGameOver();
  }


  checkGameOver(): void {
    if (this.energy <= 0) {
      alert('انتهت الطاقة! ❌');
      this.resetGame();
    }
  }

  levelUp(): void {
    this.level++;
    this.energy = 100;
    alert(`🎉 مستوى ${this.level}! 🎉`);
    this.resetPlayerPosition();
  }

  resetPlayerPosition(): void {
    this.playerPosition = { x: 0, y: 0 };
  }

  resetGame(): void {
    this.gameStarted = false;
    this.initializeGame();
  }

  startGame(): void {
    this.initializeGame();
  }
}