import React from "react";
import "../../../styles/features/category/list/CategoryListComponent.css";
import { AlphabeticalCategoriesComponent } from "../order/alphabetically/AlphabeticalCategoriesComponent";
import { GroupsCategoriesComponent } from "../order/group/GroupsCategoriesComponent";
import { OrderingTypes } from "../CategoryMenuComponent";
import { ICategory } from "../../../services/api/interfaces/Categorie";

interface IListProps {
  orderingType: OrderingTypes;
  categories: ICategory[];
  filterGroupId: number | undefined;
}

function CategoryListComponent(props: IListProps) {
  return (
    <>
      {props.orderingType === OrderingTypes.Alphabetical ? (
        <AlphabeticalCategoriesComponent
          categories={props.categories}
          filterGroupId={props.filterGroupId}
        />
      ) : (
        <GroupsCategoriesComponent
          categories={props.categories}
          filterGroupId={props.filterGroupId}
        />
      )}
    </>
  );
}

export default CategoryListComponent;
