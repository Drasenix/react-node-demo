import { useEffect, useMemo, useState } from "react";
import { ICategory, IGroup } from "../services/api/interfaces/Categorie";
import {
  applyFilterOnCategories,
  getAllVisibleCategories,
} from "../services/features/category/list/CategoryListService";
import {
  getGroupsFromCategories,
  orderCategoriesByGroups,
} from "../services/features/category/list/ordered/group/GroupCategoriesService";
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

  const groupsAvailable: IGroup[] = useMemo(
    () => getGroupsFromCategories(allVisibleCategories),
    [allVisibleCategories]
  );

  const filteredVisibleCategories: ICategory[] = useMemo(
    () => applyFilterOnCategories(filterCategories, allVisibleCategories),
    [allVisibleCategories, filterCategories]
  );

  const filteredCategoriesGrouped: IGroupCategories[] = useMemo(() => {
    const groupCategories: IGroupCategories[] = orderCategoriesByGroups(
      filteredVisibleCategories
    );
    if (!!filterGroupId) {
      return groupCategories.filter(
        (groupCategories: IGroupCategories) =>
          groupCategories.group.id === filterGroupId
      );
    }
    return groupCategories;
  }, [filteredVisibleCategories, filterGroupId]);

  const filteredCategoriesInAlphabeticalOrder: ICategory[] = useMemo(() => {
    const categories: ICategory[] = orderCategoriesAlphabetically(
      filteredVisibleCategories
    );
    if (!!filterGroupId) {
      return categories.filter(
        (category) => category.group?.id === filterGroupId
      );
    }
    return categories;
  }, [filteredVisibleCategories, filterGroupId]);

  return {
    groupsAvailable,
    filteredCategoriesGrouped,
    filteredCategoriesInAlphabeticalOrder,
    setFilterCategories,
    setFilterGroupId,
  };
}
