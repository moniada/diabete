import { Component } from '@angular/core';

@Component({
  selector: 'app-sugar-challenge',
  templateUrl: './sugar-challenge.component.html',
  styleUrls: ['./sugar-challenge.component.css']
})
export class SugarChallengeComponent {
  foods = [
    { name: 'تفاحة', sugarLevel: 5 },
    { name: 'شوكولاتة', sugarLevel: 30 },
    { name: 'سمك', sugarLevel: 0 },
    { name: 'مشروب غازي', sugarLevel: 20 },
    { name: 'خيار', sugarLevel: 1 }
  ];
  
  activities = [
    { name: 'مشي', sugarEffect: -5 },
    { name: 'جري', sugarEffect: -10 },
    { name: 'استراحة', sugarEffect: 0 }
  ];

  selectedFood: any;
  selectedActivity: any;
  predictedSugar: number = 0;

  calculateSugar() {
    if (this.selectedFood && this.selectedActivity) {
      this.predictedSugar = this.selectedFood.sugarLevel + this.selectedActivity.sugarEffect;
    }
  }

  giveReward() {
    // Logic to give rewards based on correct estimation
    alert('أحسنت! لقد حصلت على مكافأة');
  }
}
