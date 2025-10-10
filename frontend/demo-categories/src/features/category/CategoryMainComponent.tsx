import { useState } from "react";
import SearchBarComponent from "../../components/SearchBarComponent";
import SelectCategoryComponent from "../../components/SelectCategoryComponent";
import useFilteredCategories from "../../hooks/categories/useFilteredCategories";
import CategoryListComponent from "./list/CategoryListComponent";
import { OrderingTypes } from "./CategoryMenuComponent";

interface ICategoryMainComponentPops {
  ordering: OrderingTypes;
}

export default function CategoryMainComponent(
  props: ICategoryMainComponentPops
) {
  const [filterGroupId, setFilterGroupId] = useState<number | undefined>();
  const { setFilterCategories, filteredCategories } = useFilteredCategories();

  function changeFilterGroupId(group_id: string) {
    if (group_id === "all") {
      setFilterGroupId(undefined);
    } else {
      setFilterGroupId(Number(group_id));
    }
  }

  return (
    <main className="Main-main">
      <div className="main-container">
        <div className="list-categories-header">
          <SearchBarComponent setFilterCategories={setFilterCategories} />
          <SelectCategoryComponent
            selectFilterGroupId={changeFilterGroupId}
          ></SelectCategoryComponent>
        </div>
        <CategoryListComponent
          orderingType={props.ordering}
          categories={filteredCategories}
          filterGroupId={filterGroupId}
        />
      </div>
    </main>
  );
}
