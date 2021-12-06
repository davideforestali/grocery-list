import { ActionTypes } from './action-types';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import groceriesReducer from './reducers/groceries';
import thunk from 'redux-thunk';

const appReducer = combineReducers({
  groceries: groceriesReducer
})
   
export type RootState = ReturnType<typeof appReducer>

export const rootReducer = (
  state: RootState | undefined, 
  action: any
) => {
  // reset redux state
  if (action.type === ActionTypes.CLEAR_STATE) {
    state = undefined;
  }
  return appReducer(state, action);
}

export const middlewares = [thunk]

export const store = createStore(rootReducer, {}, applyMiddleware(...middlewares));
  