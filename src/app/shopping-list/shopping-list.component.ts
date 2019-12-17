import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../Shared/Ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  Ingredient : Ingredient[] =[
    new Ingredient('Apple',5),
    new Ingredient('TOmatoes',5)
  ];

  constructor() { }

  ngOnInit() {
  }

}
