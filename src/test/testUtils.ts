import { applyMiddleware, createStore } from "redux"
import { middlewares, rootReducer } from "../store"

export const testStore = (initialState: {}) => {
    return createStore(rootReducer, initialState, applyMiddleware(...middlewares))
}