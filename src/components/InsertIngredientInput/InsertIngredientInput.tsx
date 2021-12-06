import React from "react"
import './InsertIngredientInput.scss'

interface InsertIngredientInputProps {
  onInsertIngInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void,
  onInsertIngredient: () => void,
  insertIngInput: string
}

const InsertIngredientInput: React.FC<InsertIngredientInputProps> = ({
  onInsertIngInputChange,
  onInsertIngredient,
  insertIngInput
}) => {

  const checkInsertIngEnter = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.keyCode === 13 && (e.target as HTMLTextAreaElement).value !== '') {
      e.preventDefault() // prevents textarea from create newline
      onInsertIngredient()
    }
  }

  return (
    <div className="form-group insert-input">
      <textarea
        placeholder="insert manually or paste list"
        className="form-group__input insert-input__control"
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          onInsertIngInputChange(e)
        }
        onKeyDown={checkInsertIngEnter}
        value={insertIngInput}
      />

      <button
        onClick={onInsertIngredient}
        className="btn-secondary btn--sm"
      >
        Insert
      </button>
    </div>
  )
}

export default InsertIngredientInput
