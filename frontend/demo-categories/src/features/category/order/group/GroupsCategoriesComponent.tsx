import useGroupedCategories from "../../../../hooks/categories/useGroupedCategories";
import {
  IGroup,
  ICategory,
} from "../../../../services/api/interfaces/Categorie";
import "../../../../styles/features/category/list/ordered/group/GroupsCategoriesComponent.css";
import { GroupCategoriesComponent } from "./GroupCategoriesComponent";
import { useState } from "react";
interface IGroupProps {
  categories: ICategory[];
  filterGroupId: number | undefined;
}

export interface IGroupCategories {
  group: IGroup;
  categories: ICategory[];
}

export function GroupsCategoriesComponent(props: IGroupProps) {
  const [groupHavingSelectedCategory, setGroupHavingSelectedCategory] =
    useState(-1);

  const groupedCategories: IGroupCategories[] = useGroupedCategories(
    props.categories,
    props.filterGroupId
  );

  function changeGroupHavingSelectedCategory(id_group: number) {
    setGroupHavingSelectedCategory(id_group);
  }

  return (
    <ul className="groups-categories-list">
      {groupedCategories.map((groupCategories) => (
        <GroupCategoriesComponent
          key={groupCategories.group.id}
          groupCategories={groupCategories}
          changeGroupContainingSelectedCategory={
            changeGroupHavingSelectedCategory
          }
          containsSelectedCategory={
            groupHavingSelectedCategory === groupCategories.group.id
          }
        />
      ))}
    </ul>
  );
}
