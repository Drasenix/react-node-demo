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
    () => orderCategoriesByGroups(filteredVisibleCategories),
    [filteredVisibleCategories]
  );
  const filteredCategoriesInAlphabeticalOrder: ICategory[] = useMemo(
    () => orderCategoriesAlphabetically(filteredVisibleCategories),
    [filteredVisibleCategories]
  );

  return {
    allCategoriesGrouped,
    filterCategories,
    setFilterCategories,
    filteredCategoriesGrouped,
    filteredCategoriesInAlphabeticalOrder,
  };
}
