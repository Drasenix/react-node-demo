import { useMemo } from "react";
import { IGroupCategories } from "../../features/category/order/group/GroupsCategoriesComponent";
import { ICategory } from "../../services/api/interfaces/Categorie";
import { orderCategoriesByGroups } from "../../services/features/category/list/ordered/group/GroupCategoriesService";

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
