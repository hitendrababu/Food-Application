import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Injectable } from '@angular/core';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService{

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Samosa',
        'Indian Samosa Recipe',
        'https://inhabitat.com/wp-content/blogs.dir/1/files/2016/03/Leftovers-for-Hungry-Indian-Food.jpg',
        [new Ingredient('Potato', 5),
         new Ingredient('Onion',4)]),
        new Recipe('Chicken Masala',
        'Indian Chicken Masala Recipe',
        'https://thecitypaperbogota.com/wp-content/uploads/2015/11/curry-charles-haynes.jpg',
        [new Ingredient('Chicken', 5),
        new Ingredient('Onion',4)])
      ];

      constructor(private shoppingListService: ShoppingListService){

      }

    getRecipes(){
        return this.recipes.slice();
    }

    getRecipe(index: number){
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.shoppingListService.addIngredients(ingredients);
    }
      
}