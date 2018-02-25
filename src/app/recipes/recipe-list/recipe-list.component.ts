import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Samosa','Indian Samosa Recipe',
    'https://inhabitat.com/wp-content/blogs.dir/1/files/2016/03/Leftovers-for-Hungry-Indian-Food.jpg'),
    new Recipe('Chicken Masala','Indian Chicken Masala Recipe',
    'https://thecitypaperbogota.com/wp-content/uploads/2015/11/curry-charles-haynes.jpg')

  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
