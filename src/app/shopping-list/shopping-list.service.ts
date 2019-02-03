import {Ingredient} from '../shared/ingredient.model';
import {EventEmitter} from '@angular/core';


export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [new Ingredient('Apples', 5), new Ingredient('Tomotoes', 3)];
  constructor() {
  }

  addIngredientToShoppingList(...ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  getShoppingList(): Ingredient[] {
    return this.ingredients.slice();
  }
}
