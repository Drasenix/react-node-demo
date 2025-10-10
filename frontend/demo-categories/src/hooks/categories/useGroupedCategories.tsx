import { useMemo } from "react";
import { ICategory, IGroup } from "../../services/api/interfaces/Categorie";
import { orderCategoriesByGroups } from "../../services/features/category/list/ordered/group/GroupCategoriesService";

export interface IGroupCategories {
  group: IGroup;
  categories: ICategory[];
}

export default function useGroupedCategories(
  categories: ICategory[],
  filterGroupId: number | undefined
): IGroupCategories[] {
  return useMemo(
    () =>
      orderCategoriesByGroups(categories).filter(
        (groupCategories: IGroupCategories) =>
          !!filterGroupId ? groupCategories.group.id === filterGroupId : true
      ),
    [filterGroupId, categories]
  );
}
