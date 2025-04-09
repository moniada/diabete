import { trigger, state, style, transition, animate } from '@angular/animations';

export const fadeIn = trigger('fadeIn', [
  state('void', style({ opacity: 0 })), // État initial (invisible)
  transition(':enter', [animate('500ms ease-in', style({ opacity: 1 }))]), // Animation d'entrée
]);