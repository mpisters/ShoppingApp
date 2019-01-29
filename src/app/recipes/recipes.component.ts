import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recipe} from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  @Input() selectedRecipe: Recipe;

  constructor() {
  }

  ngOnInit() {
  }

  onSelectedRecipe(recipe) {
    this.selectedRecipe = recipe;
  }

}
