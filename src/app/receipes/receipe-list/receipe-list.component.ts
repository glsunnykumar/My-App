import { Component, OnInit } from '@angular/core';
import {Receipe} from '../receipe.model';

@Component({
  selector: 'app-receipe-list',
  templateUrl: './receipe-list.component.html',
  styleUrls: ['./receipe-list.component.css']
})
export class ReceipeListComponent implements OnInit {
  
  receipes :Receipe[] =[
    new Receipe('A Test Receipe','this is a simple Test','https://c.pxhere.com/photos/9e/73/bowl_delicious_dinner_dish_food_healthy_meal_tasty-1575227.jpg!d'),
    new Receipe('A Test Receipe1','this is a simple Test1','https://c.pxhere.com/photos/9e/73/bowl_delicious_dinner_dish_food_healthy_meal_tasty-1575227.jpg!d')
  ];

  constructor() { }

  ngOnInit() {
  }

}
