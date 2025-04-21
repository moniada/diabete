import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-sugar-catch',
  templateUrl: './sugar-catch.component.html',
  styleUrls: ['./sugar-catch.component.css']
})
export class SugarCatchComponent {
  originalFoodItems = [
    // Aliments sains (valid: true)
    { name: 'جزر', image: 'assets/img/carotte.png', valid: true },
    { name: 'طماطم', image: 'assets/img/tomate.png', valid: true },
    { name: 'بروكلي', image: 'assets/img/broccoli.png', valid: true },
    { name: 'تفاح', image: 'assets/img/apple.png', valid: true },
    { name: 'أفوكادو', image: 'assets/img/avocado.png', valid: true },
    { name: 'خيار', image: 'assets/img/cucumber.jpg', valid: true },
    { name: 'سبانخ', image: 'assets/img/spinach.avif', valid: true },
    { name: 'موز', image: 'assets/img/banana.jpg', valid: true },
    { name: 'فراولة', image: 'assets/img/strawberry.png', valid: true },
    { name: 'ليمون', image: 'assets/img/lemon.png', valid: true },
    { name: 'خس', image: 'assets/img/lettuce.jpg', valid: true },
    { name: 'فلفل', image: 'assets/img/pepper.jpg', valid: true },
    { name: 'عنب', image: 'assets/img/grape.jpg', valid: true },
    { name: 'بطيخ', image: 'assets/img/watermelon.avif', valid: true },
    { name: 'برتقال', image: 'assets/img/orange.avif', valid: true },
  
    // Aliments sucrés (valid: false)
    { name: 'حلوى', image: 'assets/img/candy.png', valid: false },
    { name: 'آيس كريم', image: 'assets/img/ice.png', valid: false },
    { name: 'كعكة', image: 'assets/img/cake.avif', valid: false },
    { name: 'شوكولاتة', image: 'assets/img/chocolate.avif', valid: false },
    { name: 'دونات', image: 'assets/img/donut.avif', valid: false },
    { name: 'مشروب غازي', image: 'assets/img/soda.jfif', valid: false },
    { name: 'بسكويت', image: 'assets/img/cookie.avif', valid: false },
    { name: 'حلوى جيلي', image: 'assets/img/jelly.avif', valid: false },
    { name: 'مصاصة', image: 'assets/img/lollipop.jpg', valid: false },
    { name: 'فطيرة', image: 'assets/img/pie.jpg', valid: false }
  ];

  items: any[] = [];
  validItems: any[] = [];
  invalidItems: any[] = [];

  score = 0;
  showFeedback = false;
  feedbackMessage = '';
  isCorrect = false;
  gameCompleted = false;

  ngOnInit() {
    this.resetGame();
  }

  resetGame() {
    // Sélectionner 10 éléments aléatoires
    this.items = this.getRandomItems(10);
    this.validItems = [];
    this.invalidItems = [];
    this.score = 0;
    this.gameCompleted = false;
  }

  // Fonction pour obtenir N éléments aléatoires sans doublons
  getRandomItems(count: number): any[] {
    // Créer une copie du tableau original
    const shuffled = [...this.originalFoodItems];
    
    // Mélanger le tableau (algorithme de Fisher-Yates)
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    
    // Retourner les N premiers éléments
    return shuffled.slice(0, count);
  }

  getStars(): number[] {
    return Array(Math.floor(this.score / 10)).fill(0);
  }

  drop(event: CdkDragDrop<any[]>) {
    if (this.gameCompleted) return;

    const item = event.item.data;
    
    // Si on déplace dans la même liste (réorganisation)
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      return;
    }

    // Déterminer la catégorie cible
    const targetCategory = event.container.id === 'validList' ? 'valid' : 'invalid';
    
    // Vérifier si le placement est correct
    const isValid = targetCategory === 'valid' ? item.valid : !item.valid;

    if (isValid) {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      
      this.score += 10;
      this.showFeedbackMessage(`👍 أحسنت! ${item.name} ${targetCategory === 'valid' ? 'صحي' : 'سكري'}`, true);
      this.checkGameCompletion();
    } else {
      this.showFeedbackMessage(`❌ خطأ! ${item.name} ليس ${targetCategory === 'valid' ? 'صحي' : 'سكري'}`, false);
    }
  }

  checkGameCompletion() {
    if (this.items.length === 0 && 
        (this.validItems.length + this.invalidItems.length) === 10) {
      this.gameCompleted = true;
      this.showFeedbackMessage('🎉 لقد أكملت التحدي بنجاح! مجموع نقاطك: ' + this.score, true);
    }
  }

  private showFeedbackMessage(message: string, isCorrect: boolean): void {
    this.feedbackMessage = message;
    this.isCorrect = isCorrect;
    this.showFeedback = true;

    setTimeout(() => {
      if (this.showFeedback) {
        this.feedbackMessage += isCorrect ? '\nتعلمت شيئاً جديداً!' : '\nحاول مرة أخرى!';
      }
    }, 1500);

    setTimeout(() => {
      this.showFeedback = false;
    }, 3000);
  }
}