import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { FoodService } from '../services/foodItem.service';

interface SelectedFood {
  food: any;
  quantity: number;
  sugar: number;
}

@Component({
  selector: 'app-food-calculator',
  templateUrl: './food-calculator.component.html',
  styleUrls: ['./food-calculator.component.css']
})
export class FoodCalculatorComponent implements OnInit {
  searchControl = new FormControl();
  searchResults: any[] = [];
  selectedFoods: SelectedFood[] = [];
  totalSugar: number = 0;
  categories: string[] = [];
  activeCategory: string = '';
  categoryFoods: any[] = [];
  showSearchResults: boolean = false;
  favorites: any[] = [];

  constructor(private foodService: FoodService) {}

  ngOnInit(): void {
    this.categories = this.foodService.getFoodCategories();
    
    this.searchControl.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged()
      )
      .subscribe(query => {
        if (query.length > 1) {
          this.searchResults = this.foodService.searchFood(query);
          this.showSearchResults = true;
        } else {
          this.searchResults = [];
          this.showSearchResults = false;
        }
      });

    this.favorites = this.foodService.getFavorites();
  }

  selectCategory(category: string): void {
    this.activeCategory = category;
    this.categoryFoods = this.foodService.getFoodByCategory(category);
    this.showSearchResults = false;
  }

  addFood(food: any, quantity: number = 100): void {
    const existingItem = this.selectedFoods.find(item => item.food.id === food.id);
    
    if (existingItem) {
      existingItem.quantity += quantity;
      existingItem.sugar = this.calculateSugar(food, existingItem.quantity);
    } else {
      this.selectedFoods.push({
        food: food,
        quantity: quantity,
        sugar: this.calculateSugar(food, quantity)
      });
    }
    
    this.calculateTotalSugar();
  }

  removeFood(index: number): void {
    this.selectedFoods.splice(index, 1);
    this.calculateTotalSugar();
  }

  updateQuantity(item: SelectedFood, event: any): void {
    const newQuantity = Number(event.target.value);
    item.quantity = newQuantity;
    item.sugar = this.calculateSugar(item.food, newQuantity);
    this.calculateTotalSugar();
  }

  addToFavorites(food: any): void {
    this.foodService.addToFavorites(food);
    this.favorites = this.foodService.getFavorites();
  }

  private calculateSugar(food: any, quantity: number): number {
    return (food.sugarPer100g * quantity) / 100;
  }

  private calculateTotalSugar(): void {
    this.totalSugar = this.selectedFoods.reduce((total, item) => total + item.sugar, 0);
  }
}