import React, { useState } from "react";
import "../../styles/features/category/CategoryMenuComponent.css";
import CategoryListComponent from "./list/CategoryListComponent";
import OrderingButtonComponent from "../../components/OrderingButtonComponent";

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
      <header className="Main-header">
        <p className="title-categories">Catégories</p>
        <OrderingButtonComponent
          orderingType={OrderingTypes.Group}
          currentOrderingType={ordering}
          selectOrderingType={() => changeOrdering(OrderingTypes.Group)}
        ></OrderingButtonComponent>
        <OrderingButtonComponent
          orderingType={OrderingTypes.Alphabetical}
          currentOrderingType={ordering}
          selectOrderingType={() => changeOrdering(OrderingTypes.Alphabetical)}
        ></OrderingButtonComponent>
      </header>

      <main className="Main-main">
        <div className="main-container">
          <CategoryListComponent ordering={ordering} />
        </div>
      </main>

      <footer className="Main-footer">
        <button className="category-select-btn">
          <p className="category-select-btn-txt">Sélectionner la catégorie</p>
        </button>
      </footer>
    </>
  );
}

export default CategoryMenuComponent;
