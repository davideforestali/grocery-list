
import { ActionTypes } from "../action-types";

export interface FetchGroceryListAction {
  type: ActionTypes.SET_GROCERY_LIST;
  groceryList: string[];
}

export type GroceriesAction = FetchGroceryListAction
