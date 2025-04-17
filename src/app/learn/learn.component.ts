import { Component } from '@angular/core';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrl: './learn.component.css'
})
export class LearnComponent {
  pages: string[] = [];
  currentPage: number = 0;

  constructor() {
    const totalPages = 66; // Modifie selon ton nombre de pages
    for (let i = 1; i <= totalPages; i++) {
      this.pages.push(`assets/img/magazine/${i}.png`);

    }
  }

  nextPage() {
    if (this.currentPage < this.pages.length - 1) {
      this.currentPage++;
    }
  }

  prevPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
    }
  }
}
