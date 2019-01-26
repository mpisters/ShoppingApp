import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('test', 'lipsum', 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/reci' +
      'pe-image/2018/02/easter-nest-cake.jpg?itok=-ZAZCCss'),
    new Recipe('test', 'lipsum', 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/reci' +
      'pe-image/2018/02/easter-nest-cake.jpg?itok=-ZAZCCss')

  ];
  constructor() {
    console.log(this.recipes);
  }

  ngOnInit() {
  }

}
