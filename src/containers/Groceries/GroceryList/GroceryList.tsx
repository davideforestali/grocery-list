import React, { useEffect, useState } from "react"
import "./GroceryList.scss"
import { useDispatch } from "react-redux"
import * as actions from "../../../store/actions/index"
import axios from "../../../axios-groceries"
import GroceryListItem from "./GroceryListItem/GroceryListItem"
import {
  addIngrToGroceryList
} from "../../../helpers/helpers"
import { useTypedSelector } from "../../../hooks/use-typed-selector"
import InsertIngredientInput from '../../../components/InsertIngredientInput/InsertIngredientInput'

const GroceryList: React.FC = () => {
  const dispatch = useDispatch()

  const { groceryList } = useTypedSelector(
    (state) => state.groceries
  )
  const [insertIngInput, setInsertIngInput] = useState('')

  useEffect(() => {
    dispatch(actions.fetchGroceryList())
  }, [dispatch])

  const clearListHandler = () => {
    axios
      .put("/groceryList.json", [])
      .then(() => dispatch(actions.fetchGroceryList()))
  }

  const insertIngInputChangeHandler = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    if (e.target.value !== "\n") {
      setInsertIngInput(e.target.value)
    }
  }

  const insertIngredientHandler = async () => {
    await addIngrToGroceryList(groceryList, [insertIngInput])
    setInsertIngInput('')
    dispatch(actions.fetchGroceryList())
  }

  let groceryListToRender: JSX.Element | JSX.Element[] = (
    <p>No ingredients added</p>
  )

  if (groceryList.length) {
    groceryListToRender = groceryList.map((ing, i) => {
      return (
        <GroceryListItem
          key={i}
          ingredient={ing}
        />
      )
    })
  }

  return (
    <>
      <div className="grocery-list">
        <h1 className="h2">Grocery list</h1>

        <div className="grocery-list__header">
          <InsertIngredientInput
            onInsertIngInputChange={insertIngInputChangeHandler}
            onInsertIngredient={insertIngredientHandler}
            insertIngInput={insertIngInput}
          />
        </div>

        <ul>{groceryListToRender}</ul>
        
        <button
          className="btn-primary btn--sm"
          onClick={clearListHandler}
          data-test='clear'
        >
          Clear
        </button>
      </div>
    </>
  )
}

export default GroceryList
