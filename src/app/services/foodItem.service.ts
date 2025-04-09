import { Injectable } from '@angular/core';

interface FoodItem {
  id: number;
  name: string;
  sugarPer100g: number;
  category: string;
  icon: string;
}

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  private foodDatabase: FoodItem[] = [
    { id: 1, name: 'شراب الشعير', sugarPer100g: 8, category: 'مشروبات', icon: 'fa-wine-bottle' },
    { id: 2, name: 'موز', sugarPer100g: 12, category: 'فواكه', icon: 'fa-apple-alt' },
    { id: 3, name: 'تفاح', sugarPer100g: 10, category: 'فواكه', icon: 'fa-apple-alt' },
    { id: 4, name: 'أرز', sugarPer100g: 0.3, category: 'نشويات', icon: 'fa-bread-slice' },
    { id: 5, name: 'بطاطا', sugarPer100g: 0.8, category: 'نشويات', icon: 'fa-bread-slice' },
    { id: 6, name: 'خبز أبيض', sugarPer100g: 5, category: 'نشويات', icon: 'fa-bread-slice' },
    { id: 7, name: 'خس', sugarPer100g: 0.5, category: 'خضار', icon: 'fa-leaf' },
    { id: 8, name: 'فراولة', sugarPer100g: 4.9, category: 'فواكه', icon: 'fa-apple-alt' }
  ];

  private favorites: FoodItem[] = [];

  searchFood(query: string): FoodItem[] {
    return this.foodDatabase.filter(item => 
      item.name.includes(query)
    );
  }

  getFoodCategories(): string[] {
    return [...new Set(this.foodDatabase.map(item => item.category))];
  }

  getFoodByCategory(category: string): FoodItem[] {
    return this.foodDatabase.filter(item => item.category === category);
  }

  addToFavorites(item: FoodItem): void {
    if (!this.favorites.some(fav => fav.id === item.id)) {
      this.favorites.push(item);
    }
  }

  getFavorites(): FoodItem[] {
    return this.favorites;
  }
}