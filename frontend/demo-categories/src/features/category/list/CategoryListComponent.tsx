import React from "react";
import "../../../styles/features/category/list/CategoryListComponent.css";
import { AlphabeticalCategoriesComponent } from "../order/alphabetically/AlphabeticalCategoriesComponent";
import { GroupsCategoriesComponent } from "../order/group/GroupsCategoriesComponent";
import { OrderingTypes } from "../CategoryMenuComponent";
import SearchBarComponent from "../../../components/SearchBarComponent";
import SelectCategoryComponent from "../../../components/SelectCategoryComponent";
import useCategories from "../../../hooks/categories/useCategories";

interface IListProps {
  orderingType: OrderingTypes;
}

function CategoryListComponent(props: IListProps) {
  const {
    groupsAvailable,
    filteredCategoriesGrouped,
    filteredCategoriesInAlphabeticalOrder,
    setFilterCategories,
    setFilterGroupId,
  } = useCategories();

  function changeFilterGroupId(group_id: string) {
    if (group_id === "all") {
      setFilterGroupId(undefined);
    } else {
      setFilterGroupId(Number(group_id));
    }
  }
  return (
    <>
      <div className="list-categories-header">
        <SearchBarComponent setFilterCategories={setFilterCategories} />
        <SelectCategoryComponent
          groups={groupsAvailable}
          selectFilterGroupId={changeFilterGroupId}
        ></SelectCategoryComponent>
      </div>
      {props.orderingType === OrderingTypes.Alphabetical ? (
        <AlphabeticalCategoriesComponent
          categories={filteredCategoriesInAlphabeticalOrder}
        />
      ) : (
        <GroupsCategoriesComponent
          groupsCategories={filteredCategoriesGrouped}
        />
      )}
    </>
  );
}

export default CategoryListComponent;
