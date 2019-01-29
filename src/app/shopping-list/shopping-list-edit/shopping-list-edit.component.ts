import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInput') nameIngredient;
  @ViewChild('amountInput') amountIngredient;
  @Output() addIngredient = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  addNewIngredient() {
    const ingredient = new Ingredient(this.nameIngredient.nativeElement.value, this.amountIngredient.nativeElement.value);
    this.addIngredient.emit(ingredient);
  }

}
