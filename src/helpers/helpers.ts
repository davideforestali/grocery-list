import axios from "../axios-groceries";

export const addIngrToGroceryList = (
  currentGroceryList: string[],
  incomingIngredients: string[]
) => {
  let updatedIngredients = currentGroceryList.concat(incomingIngredients)
  return axios.put("/groceryList.json", updatedIngredients)
}