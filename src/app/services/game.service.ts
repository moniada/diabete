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
      imageUrl: 'assets/img/characters/girls.jpg',
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
      emoji: '🍰'
    },
    {
      description: 'مارس الرياضة',
      simpleDescription: 'لعب كرة القدم مع الأصدقاء ⚽',
      effect: -25,
      imageUrl: 'assets/img/challenges/soccer.png',
      emoji: '⚽'
    },
    {
      description: 'تناول وجبة صحية',
      simpleDescription: 'أكل سلطة خضار لذيذة 🥗',
      effect: -15,
      imageUrl: 'assets/img/challenges/salad.png',
      emoji: '🥗'
    },
    {
      description: 'شرب عصير محلى',
      simpleDescription: 'شرب كوب من العصير 🧃',
      effect: 30,
      imageUrl: 'assets/img/challenges/juice.png',
      emoji: '🧃'
    },
    {
      description: 'قفز على الترامبولين',
      simpleDescription: 'قفز على الترامبولين لمدة 20 دقيقة 🤸',
      effect: -20,
      imageUrl: 'assets/img/challenges/jump.png',
      emoji: '🤸'
    }
  ];

  levels: GameLevel[] = [
    { name: 'سهل', multiplier: 1, color: '#4CAF50' },
    { name: 'متوسط', multiplier: 1.2, color: '#FFC107' },
    { name: 'صعب', multiplier: 1.5, color: '#F44336' },
  ];

  currentCharacter: Character | null = null;
  currentChallenge: Challenge | null = null;
  userGuess: number | null = null;
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
    this.userGuess = null;
  }

  checkGuess(guess: number): { isCorrect: boolean, correctValue: number } {
    if (!this.currentChallenge) {
      return { isCorrect: false, correctValue: 0 };
    }
    
    // Calculate correct value based on character base level and challenge effect
    const correctValue = this.currentCharacter!.baseSugarLevel + this.currentChallenge.effect;
    const tolerance = 10 / this.currentLevel.multiplier;
    
    const isCorrect = Math.abs(guess - correctValue) <= tolerance;
    
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
    
    return { isCorrect, correctValue };
  }

  getSugarLevelRange(): { min: number, max: number } {
    return { min: 50, max: 200 };
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

  getCurrentSugarLevel(): number {
    if (!this.currentCharacter || !this.currentChallenge) return 0;
    return this.currentCharacter.baseSugarLevel + this.currentChallenge.effect;
  }
}