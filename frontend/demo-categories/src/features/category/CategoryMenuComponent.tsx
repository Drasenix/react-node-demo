import React, { useState } from "react";
import "../../styles/features/category/CategoryMenuComponent.css";
import CategoryMainComponent from "./CategoryMainComponent";
import CategoryFooterComponent from "./CategoryFooterComponent";
import CategoryHeaderComponent from "./CategoryHeaderComponent";

export enum OrderingTypes {
  Alphabetical = "alphabetical",
  Group = "group",
}
function CategoryMenuComponent() {
  const [ordering, setOrdering] = useState(OrderingTypes.Group);

  function changeOrdering(ordering: OrderingTypes) {
    setOrdering(ordering);
  }

  return (
    <>
      <CategoryHeaderComponent
        ordering={ordering}
        selectOrderingType={changeOrdering}
      />
      <CategoryMainComponent ordering={ordering} />
      <CategoryFooterComponent />
    </>
  );
}

export default CategoryMenuComponent;
