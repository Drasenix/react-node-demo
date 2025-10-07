import React, { useState } from "react";
import "../../../styles/features/category/list/CategoryListComponent.css";
import { AlphabeticalCategoriesComponent } from "../order/alphabetically/AlphabeticalCategoriesComponent";
import {
  GroupsCategoriesComponent,
  IGroupCategories,
} from "../order/group/GroupsCategoriesComponent";
import { OrderingTypes } from "../CategoryMenuComponent";
import SearchBarComponent from "../../../components/SearchBarComponent";
import SelectCategoryComponent from "../../../components/SelectCategoryComponent";
import useCategories from "../../../hooks/useCategories";

interface IListProps {
  ordering: OrderingTypes;
}

function CategoryListComponent(props: IListProps) {
  const [filterGroupId, setFilterGroupId] = useState<number | undefined>();

  function changeFilterGroupId(group_id: string) {
    if (group_id === "all") {
      setFilterGroupId(undefined);
    } else {
      setFilterGroupId(Number(group_id));
    }
  }

  const {
    allCategoriesGrouped,
    filterCategories,
    setFilterCategories,
    filteredCategoriesGrouped,
    filteredCategoriesInAlphabeticalOrder,
  } = useCategories();
  return (
    <>
      <div className="list-categories-header">
        <SearchBarComponent
          filterCategories={filterCategories}
          setFilterCategories={setFilterCategories}
        />
        <SelectCategoryComponent
          groups={allCategoriesGrouped}
          selectGroup={changeFilterGroupId}
        ></SelectCategoryComponent>
      </div>
      {props.ordering === OrderingTypes.Alphabetical ? (
        <AlphabeticalCategoriesComponent
          categories={
            !!filterGroupId
              ? filteredCategoriesInAlphabeticalOrder.filter(
                  (category) => category.group?.id === filterGroupId
                )
              : filteredCategoriesInAlphabeticalOrder
          }
        />
      ) : (
        <GroupsCategoriesComponent
          groupsCategories={
            !!filterGroupId
              ? filteredCategoriesGrouped.filter(
                  (groupCategories: IGroupCategories) =>
                    groupCategories.group.id === filterGroupId
                )
              : filteredCategoriesGrouped
          }
        />
      )}
    </>
  );
}

export default CategoryListComponent;
