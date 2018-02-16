import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Test Recipe','This is test recipe',
    'https://inhabitat.com/wp-content/blogs.dir/1/files/2016/03/Leftovers-for-Hungry-Indian-Food.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
