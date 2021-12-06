import React from "react";

interface GroceryListItemProps {
  ingredient: string;
}

const GroceryListItem: React.FC<GroceryListItemProps> = ({
  ingredient
}) => {

  return (
    <>
      <li className={"list-item"}>
        <div
          className={"list-item__body grocery-list__item"}
        >
          <span className="list-item__name">{ingredient}</span>
        </div>
      </li>
    </>
  );
};

export default GroceryListItem;
