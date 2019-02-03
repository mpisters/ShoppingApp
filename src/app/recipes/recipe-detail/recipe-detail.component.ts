import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {ShoppingListService} from '../../shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input('selectedRecipe') recipe: Recipe;

  constructor(private shopplistService: ShoppingListService) {
  }

  ngOnInit() {
  }

  addIngredients() {
    this.shopplistService.addIngredientToShoppingList(...this.recipe.ingredients);
  }

}
