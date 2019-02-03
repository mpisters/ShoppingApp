import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('test', 'lipsum', 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/reci' +
      'pe-image/2018/02/easter-nest-cake.jpg?itok=-ZAZCCss', [new Ingredient('butter' ,200), new Ingredient('bread', 1)]),
    new Recipe('test2', 'lipsum2', 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/reci' +
      'pe-image/2018/02/easter-nest-cake.jpg?itok=-ZAZCCss', [new Ingredient('sugar', 100), new Ingredient('salt', 50)])

  ];

  constructor() {
  }

  getRecipes() {
    return this.recipes.slice();
  }
}
