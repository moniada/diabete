import { Injectable } from '@angular/core';

interface FoodItem {
  id: number;
  name: string;
  sugarPer100g: number;
  category: string;
  icon: string;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  private foodDatabase: FoodItem[] = [
    // Fruits
    { id: 2, name: 'موز', sugarPer100g: 12, category: 'فواكه', icon: 'fa-apple-alt', image: 'banana.png' },
    { id: 3, name: 'تفاح', sugarPer100g: 10, category: 'فواكه', icon: 'fa-apple-alt', image: 'red-apple-17.png' },
    { id: 8, name: 'فراولة', sugarPer100g: 4.9, category: 'فواكه', icon: 'fa-apple-alt', image: 'strawberry.png' },
    { id: 9, name: 'عنب', sugarPer100g: 16, category: 'فواكه', icon: 'fa-apple-alt', image: 'grapes.jfif' },
    { id: 10, name: 'مانجو', sugarPer100g: 14, category: 'فواكه', icon: 'fa-apple-alt', image: 'mango.jfif' },
    { id: 11, name: 'برتقال', sugarPer100g: 9, category: 'فواكه', icon: 'fa-apple-alt', image: '1f34a.png' },
    { id: 12, name: 'تمر', sugarPer100g: 63, category: 'فواكه', icon: 'fa-apple-alt', image: 'dates.webp' },

    // Starches
    { id: 4, name: 'أرز', sugarPer100g: 0.3, category: 'نشويات', icon: 'fa-bread-slice', image: 'rice-bowl.png' },
    { id: 5, name: 'بطاطا', sugarPer100g: 0.8, category: 'نشويات', icon: 'fa-bread-slice', image: 'batata.jfif' },
    { id: 6, name: 'خبز أبيض', sugarPer100g: 5, category: 'نشويات', icon: 'fa-bread-slice', image: 'pain.jpg' },
    { id: 13, name: 'معكرونة', sugarPer100g: 1.1, category: 'نشويات', icon: 'fa-bread-slice', image: 'pasta.jfif' },
    { id: 14, name: 'خبز قمح كامل', sugarPer100g: 3.5, category: 'نشويات', icon: 'fa-bread-slice', image: 'whole-wheat-bread.jpg' },
    { id: 15, name: 'كسكس', sugarPer100g: 1.5, category: 'نشويات', icon: 'fa-bread-slice', image: 'couscous.png' },

    // Vegetables  
    { id: 7, name: 'خس', sugarPer100g: 0.5, category: 'خضار', icon: 'fa-leaf', image: 'khass.png' },
    { id: 16, name: 'طماطم', sugarPer100g: 2.6, category: 'خضار', icon: 'fa-leaf', image: 'tomato.jpg' },
    { id: 17, name: 'خيار', sugarPer100g: 1.7, category: 'خضار', icon: 'fa-leaf', image: 'cucumber.png' },
    { id: 18, name: 'جزر', sugarPer100g: 4.7, category: 'خضار', icon: 'fa-leaf', image: 'carrot.png' },
    { id: 19, name: 'بصل', sugarPer100g: 4.2, category: 'خضار', icon: 'fa-leaf', image: 'onion.png' },

    // Dairy
    { id: 20, name: 'حليب كامل الدسم', sugarPer100g: 4.8, category: 'ألبان', icon: 'fa-cheese', image: 'milk.jpg' },
    { id: 21, name: 'زبادي طبيعي', sugarPer100g: 4.7, category: 'ألبان', icon: 'fa-cheese', image: 'yogurt.webp' },
    { id: 22, name: 'جبنة بيضاء', sugarPer100g: 1.3, category: 'ألبان', icon: 'fa-cheese', image: 'white-cheese.png' },

    // Proteins
    { id: 23, name: 'دجاج', sugarPer100g: 0, category: 'بروتينات', icon: 'fa-drumstick-bite', image: 'chicken.jpg' },
    { id: 24, name: 'لحم بقري', sugarPer100g: 0, category: 'بروتينات', icon: 'fa-drumstick-bite', image: 'beef.jpg' },
    { id: 25, name: 'سمك', sugarPer100g: 0, category: 'بروتينات', icon: 'fa-fish', image: 'fish.jpg' },
    { id: 26, name: 'بيض', sugarPer100g: 0.6, category: 'بروتينات', icon: 'fa-egg', image: 'eggs.png' },

    // Nuts
    { id: 27, name: 'لوز', sugarPer100g: 4.4, category: 'مكسرات', icon: 'fa-acorn', image: 'almonds.gif' },
    { id: 28, name: 'جوز', sugarPer100g: 2.6, category: 'مكسرات', icon: 'fa-acorn', image: 'walnuts.jpg' }
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