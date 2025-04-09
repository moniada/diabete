export interface Challenge {
  description: string;
  effect: number;
  imageUrl: string;
  question:String; 
   options: string[],
   correctAnswer: string// Chemin de l'image du défi
}