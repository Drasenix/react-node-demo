import { useEffect, useMemo, useState } from "react";
import { ICategory } from "../services/api/interfaces/Categorie";
import {
  applyFilterOnCategories,
  getAllVisibleCategories,
} from "../services/features/category/list/CategoryListService";
import { orderCategoriesByGroups } from "../services/features/category/list/ordered/group/GroupCategoriesService";
import { orderCategoriesAlphabetically } from "../services/features/category/list/ordered/alphabetically/AlphabeticalCategoriesService";
import { IGroupCategories } from "../features/category/order/group/GroupsCategoriesComponent";

export default function useCategories() {
  const [allVisibleCategories, setAllVisibleCategories] = useState<ICategory[]>(
    []
  );

  const [filterCategories, setFilterCategories] = useState<string>("");
  const [filterGroupId, setFilterGroupId] = useState<number | undefined>();

  useEffect(() => {
    async function prepareAllVisibleCategories() {
      const allVisibleCategories: ICategory[] = await getAllVisibleCategories();
      setAllVisibleCategories(allVisibleCategories);
    }

    prepareAllVisibleCategories().catch((error) => console.error(error));
  }, []);

  const allCategoriesGrouped: IGroupCategories[] = useMemo(
    () => orderCategoriesByGroups(allVisibleCategories),
    [allVisibleCategories]
  );

  const filteredVisibleCategories: ICategory[] = useMemo(
    () => applyFilterOnCategories(filterCategories, allVisibleCategories),
    [allVisibleCategories, filterCategories]
  );

  const filteredCategoriesGrouped: IGroupCategories[] = useMemo(
    () =>
      !!filterGroupId
        ? orderCategoriesByGroups(filteredVisibleCategories).filter(
            (groupCategories: IGroupCategories) =>
              groupCategories.group.id === filterGroupId
          )
        : orderCategoriesByGroups(filteredVisibleCategories),

    [filteredVisibleCategories, filterGroupId]
  );

  const filteredCategoriesInAlphabeticalOrder: ICategory[] = useMemo(
    () =>
      !!filterGroupId
        ? orderCategoriesAlphabetically(filteredVisibleCategories).filter(
            (category) => category.group?.id === filterGroupId
          )
        : orderCategoriesAlphabetically(filteredVisibleCategories),
    [filteredVisibleCategories, filterGroupId]
  );

  return {
    allCategoriesGrouped,
    filterCategories,
    filteredCategoriesGrouped,
    filteredCategoriesInAlphabeticalOrder,
    setFilterCategories,
    setFilterGroupId,
  };
}
