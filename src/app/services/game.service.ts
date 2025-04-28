import { Injectable } from '@angular/core';

export interface Character {
  name: string;
  age: number;
  imageUrl: string;
  baseSugarLevel: number;
  mood: string;
}

export interface Challenge {
  description: string;
  simpleDescription: string;
  effect: number;
  imageUrl: string;
  emoji: string;
  category?: 'food' | 'activity' | 'drink' | 'medical';
}

export interface GameLevel {
  name: string;
  multiplier: number;
  color: string;
}

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private characters: Character[] = [
    {
      name: 'علي',
      age: 10,
      imageUrl: 'assets/img/characters/ali.png',
      baseSugarLevel: 90,
      mood: 'سعيد'
    },
    {
      name: 'ليلى',
      age: 8,
      imageUrl: 'assets/img/characters/layla.png',
      baseSugarLevel: 85,
      mood: 'مرحة'
    },
    {
      name: 'نور',
      age: 9,
      imageUrl: 'assets/img/characters/nour.png',
      baseSugarLevel: 88,
      mood: 'ذكية'
    }
  ];
  
  private challenges: Challenge[] = [
    {
      description: 'تناول وجبة سكرية',
      simpleDescription: 'أكل قطعة كبيرة من الكعك 🍰',
      effect: 35,
      imageUrl: 'assets/img/challenges/cake.png',
      emoji: '🍰',
      category: 'food'
    },
    {
      description: 'مارس الرياضة',
      simpleDescription: 'لعب كرة القدم مع الأصدقاء ⚽',
      effect: -25,
      imageUrl: 'assets/img/challenges/soccer.png',
      emoji: '⚽',
      category: 'activity'
    },
    {
      description: 'تناول وجبة صحية',
      simpleDescription: 'أكل سلطة خضار لذيذة 🥗',
      effect: -15,
      imageUrl: 'assets/img/challenges/salad.png',
      emoji: '🥗',
      category: 'food'
    },
    {
      description: 'شرب عصير محلى',
      simpleDescription: 'شرب كوب من العصير 🧃',
      effect: 30,
      imageUrl: 'assets/img/challenges/juice.png',
      emoji: '🧃',
      category: 'drink'
    },
    {
      description: 'قفز على الترامبولين',
      simpleDescription: 'قفز على الترامبولين لمدة 20 دقيقة 🤸',
      effect: -20,
      imageUrl: 'assets/img/challenges/jump.png',
      emoji: '🤸',
      category: 'activity'
    },
    {
      description: 'أكل الفواكه الطازجة',
      simpleDescription: 'تناول موزة وحبة تفاح 🍎',
      effect: 10,
      imageUrl: 'assets/img/challenges/fruits.png',
      emoji: '🍎',
      category: 'food'
    },
    {
      description: 'شرب الماء بكثرة',
      simpleDescription: 'شرب لتر من الماء خلال ساعة 💧',
      effect: -5,
      imageUrl: 'assets/img/challenges/water.png',
      emoji: '💧',
      category: 'drink'
    },
    {
      description: 'السباحة في المسبح',
      simpleDescription: 'سباحة لمدة 30 دقيقة 🏊',
      effect: -30,
      imageUrl: 'assets/img/challenges/swimming.png',
      emoji: '🏊',
      category: 'activity'
    },
    {
      description: 'تناول الشوكولاتة',
      simpleDescription: 'أكل لوح شوكولاتة 🍫',
      effect: 40,
      imageUrl: 'assets/img/challenges/chocolate.png',
      emoji: '🍫',
      category: 'food'
    },
    {
      description: 'ركوب الدراجة',
      simpleDescription: 'تجولة بالدراجة لمدة 45 دقيقة 🚴',
      effect: -35,
      imageUrl: 'assets/img/challenges/biking.png',
      emoji: '🚴',
      category: 'activity'
    },
    {
      description: 'شرب مشروب غازي',
      simpleDescription: 'علبة كوكاكولا 🥤',
      effect: 45,
      imageUrl: 'assets/img/challenges/soda.png',
      emoji: '🥤',
      category: 'drink'
    },
    {
      description: 'تمارين اليوجا',
      simpleDescription: 'جلسة يوجا لمدة 20 دقيقة 🧘',
      effect: -15,
      imageUrl: 'assets/img/challenges/yoga.png',
      emoji: '🧘',
      category: 'activity'
    },
    {
      description: 'أكل المعجنات',
      simpleDescription: 'حبتان من الدونات 🍩',
      effect: 50,
      imageUrl: 'assets/img/challenges/donut.png',
      emoji: '🍩',
      category: 'food'
    },
    {
      description: 'المشي السريع',
      simpleDescription: 'مشي سريع لمدة 25 دقيقة 🚶',
      effect: -25,
      imageUrl: 'assets/img/challenges/walking.png',
      emoji: '🚶',
      category: 'activity'
    },
    {
      description: 'حقنة أنسولين',
      simpleDescription: 'أخذ جرعة أنسولين 💉',
      effect: -60,
      imageUrl: 'assets/img/challenges/insulin.png',
      emoji: '💉',
      category: 'medical'
    }
  ];

  levels: GameLevel[] = [
    { name: 'سهل', multiplier: 1, color: '#4CAF50' },
    { name: 'متوسط', multiplier: 1.2, color: '#FFC107' },
    { name: 'صعب', multiplier: 1.5, color: '#F44336' },
  ];

  currentCharacter: Character | null = null;
  currentChallenge: Challenge | null = null;
  currentLevel: GameLevel = this.levels[0];
  score: number = 0;
  isPlaying: boolean = false;
  streak: number = 0;
  maxStreak: number = 0;

  constructor() {}

  startNewGame(): void {
    this.isPlaying = true;
    this.score = 0;
    this.streak = 0;
    this.currentCharacter = this.getRandomCharacter();
    this.currentChallenge = this.getRandomChallenge();
  }

  nextRound(): void {
    this.currentCharacter = this.getRandomCharacter();
    this.currentChallenge = this.getRandomChallenge();
  }

  checkGuess(selectedLevel: string): { isCorrect: boolean, correctValue: string, actualLevel: number } {
    if (!this.currentChallenge || !this.currentCharacter) {
      return { isCorrect: false, correctValue: '', actualLevel: 0 };
    }
    
    const sugarLevel = this.currentCharacter.baseSugarLevel + this.currentChallenge.effect;
    const correctStatus = this.getSugarLevelStatus(sugarLevel);
    
    let correctValueText = '';
    if (correctStatus === 'منخفض') correctValueText = 'low';
    else if (correctStatus === 'طبيعي') correctValueText = 'normal';
    else correctValueText = 'high';
    
    const isCorrect = selectedLevel === correctValueText;
    
    if (isCorrect) {
      const pointsEarned = Math.floor(10 * this.currentLevel.multiplier);
      this.score += pointsEarned;
      this.streak++;
      if (this.streak > this.maxStreak) {
        this.maxStreak = this.streak;
      }
    } else {
      this.streak = 0;
    }
    
    return { 
      isCorrect, 
      correctValue: correctStatus,
      actualLevel: sugarLevel 
    };
  }

  getSugarLevelStatus(level: number): string {
    if (level < 70) return 'منخفض';
    if (level >= 70 && level <= 120) return 'طبيعي';
    return 'مرتفع';
  }

  private getRandomCharacter(): Character {
    const char = {...this.characters[Math.floor(Math.random() * this.characters.length)]};
    // Small random variation to base sugar level
    char.baseSugarLevel += Math.floor(Math.random() * 6) - 3;
    return char;
  }

  private getRandomChallenge(): Challenge {
    const challenge = {...this.challenges[Math.floor(Math.random() * this.challenges.length)]};
    // Adjust effect based on level
    challenge.effect = Math.floor(challenge.effect * this.currentLevel.multiplier);
    return challenge;
  }
}