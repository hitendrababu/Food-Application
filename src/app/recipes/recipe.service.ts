import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';


export class RecipeService{

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Samosa','Indian Samosa Recipe',
        'https://inhabitat.com/wp-content/blogs.dir/1/files/2016/03/Leftovers-for-Hungry-Indian-Food.jpg'),
        new Recipe('Chicken Masala','Indian Chicken Masala Recipe',
        'https://thecitypaperbogota.com/wp-content/uploads/2015/11/curry-charles-haynes.jpg')
    
      ];

    getRecipes(){
        return this.recipes.slice();
    }
      
}