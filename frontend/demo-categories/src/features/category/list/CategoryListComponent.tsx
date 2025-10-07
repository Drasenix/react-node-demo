import React, { useEffect, useState } from "react";
import "../../../styles/features/category/list/CategoryListComponent.css";
import { ICategory } from "../../../services/api/interfaces/Categorie";
import { AlphabeticalCategoriesComponent } from "../order/alphabetically/AlphabeticalCategoriesComponent";
import {
  GroupsCategoriesComponent,
  IGroupCategories,
} from "../order/group/GroupsCategoriesComponent";
import { OrderingTypes } from "../CategoryMenuComponent";
import { orderCategoriesAlphabetically } from "../../../services/features/category/list/ordered/alphabetically/AlphabeticalCategoriesService";
import { orderCategoriesByGroups } from "../../../services/features/category/list/ordered/group/GroupCategoriesService";
import {
  getAllVisibleCategories,
  applyFilterOnCategories,
} from "../../../services/features/category/list/CategoryListService";
import SearchBarComponent from "../../../components/SearchBarComponent";
import SelectCategoryComponent from "../../../components/SelectCategoryComponent";

interface IListProps {
  ordering: OrderingTypes;
}

function CategoryListComponent(props: IListProps) {
  const [allVisibleCategories, setAllVisibleCategories] = useState<ICategory[]>(
    []
  );

  const [filterGroupId, setFilterGroupId] = useState<number | undefined>();
  const [filterCategories, setFilterCategories] = useState<string>("");

  useEffect(() => {
    async function prepareAllVisibleCategories() {
      const allVisibleCategories: ICategory[] = await getAllVisibleCategories();
      setAllVisibleCategories(allVisibleCategories);
    }

    prepareAllVisibleCategories().catch((error) => console.error(error));
  }, []);

  function changeFilterGroupId(group_id: string) {
    if (group_id === "all") {
      setFilterGroupId(undefined);
    } else {
      setFilterGroupId(Number(group_id));
    }
  }

  const allCategoriesGrouped: IGroupCategories[] =
    orderCategoriesByGroups(allVisibleCategories);

  const filteredVisibleCategories: ICategory[] = applyFilterOnCategories(
    filterCategories,
    allVisibleCategories
  );

  const filteredCategoriesGrouped: IGroupCategories[] = orderCategoriesByGroups(
    filteredVisibleCategories
  );
  const filteredCategoriesInAlphabeticalOrder: ICategory[] =
    orderCategoriesAlphabetically(filteredVisibleCategories);

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
