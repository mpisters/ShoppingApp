import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInput') nameIngredient;
  @ViewChild('amountInput') amountIngredient;

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit() {
  }

  addNewIngredient() {
    const ingredient = new Ingredient(this.nameIngredient.nativeElement.value, this.amountIngredient.nativeElement.value);
    this.shoppingListService.addIngredientToShoppingList(ingredient);
  }

}
