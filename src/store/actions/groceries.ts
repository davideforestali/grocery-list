import axios from 'axios';
import { Dispatch } from 'react';
import { GroceriesAction } from '../action-interfaces/groceries';
import { ActionTypes } from '../action-types';

export const fetchGroceryList = () => {
  return (dispatch: Dispatch<GroceriesAction>) => {
    return axios.get('https://grocery-list-test-f11f0-default-rtdb.europe-west1.firebasedatabase.app/groceryList.json')
      .then(res => {
        dispatch({
          type: ActionTypes.SET_GROCERY_LIST, 
          groceryList: res.data || []
        })
      })
  }
}