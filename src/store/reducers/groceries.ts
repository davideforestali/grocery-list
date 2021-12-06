
import {
  GroceriesAction,
  FetchGroceryListAction,
} from "../action-interfaces/groceries";
import { ActionTypes } from "../action-types";

interface GroceriesState {
  groceryList: string[];
}

const initalState: GroceriesState = {
  groceryList: [],
};

const fetchGroceryList = (
  state: GroceriesState,
  action: FetchGroceryListAction
) => {
  return {
    ...state,
    groceryList: action.groceryList,
  };
};

// RECIPES REDUCER

const reducer = (state = initalState, action: GroceriesAction): GroceriesState => {
  switch (action.type) {
    case ActionTypes.SET_GROCERY_LIST:
      return fetchGroceryList(state, action);
    default:
      return state;
  }
};

export default reducer;
