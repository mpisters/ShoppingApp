import {Injectable} from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  private recipes: Recipe[] = [
    new Recipe('test', 'lipsum', 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/reci' +
      'pe-image/2018/02/easter-nest-cake.jpg?itok=-ZAZCCss', [new Ingredient('butter' , 200), new Ingredient('bread', 1)]),
    new Recipe('test2', 'lipsum2', 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/reci' +
      'pe-image/2018/02/easter-nest-cake.jpg?itok=-ZAZCCss', [new Ingredient('sugar', 100), new Ingredient('salt', 50)])

  ];

  constructor() {
  }

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  getRecipe(id: number): Recipe {
    return this.recipes[id];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
