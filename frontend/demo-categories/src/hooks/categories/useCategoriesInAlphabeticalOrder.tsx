import { useMemo } from "react";
import { ICategory } from "../../services/api/interfaces/Categorie";
import { orderCategoriesAlphabetically } from "../../services/features/category/list/ordered/alphabetically/AlphabeticalCategoriesService";

export default function useCategoriesInAlphabeticalOrder(
  categories: ICategory[],
  filterGroupId: number | undefined
): ICategory[] {
  return useMemo(
    () =>
      orderCategoriesAlphabetically(categories).filter((category: ICategory) =>
        !!filterGroupId ? category.group?.id === filterGroupId : true
      ),
    [filterGroupId, categories]
  );
}
