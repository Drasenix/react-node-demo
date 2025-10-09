import { useMemo, useState } from "react";
import { ICategory, IGroup } from "../services/api/interfaces/Categorie";
import { applyFilterOnCategories } from "../services/features/category/list/CategoryListService";
import {
  getGroupsFromCategories,
  orderCategoriesByGroups,
} from "../services/features/category/list/ordered/group/GroupCategoriesService";
import { orderCategoriesAlphabetically } from "../services/features/category/list/ordered/alphabetically/AlphabeticalCategoriesService";
import { IGroupCategories } from "../features/category/order/group/GroupsCategoriesComponent";
import { useFetchCategories } from "./useFetchCategories";

export default function useCategories() {
  const [allVisibleCategories] = useState<ICategory[]>(useFetchCategories());

  const [filterCategories, setFilterCategories] = useState<string>("");
  const [filterGroupId, setFilterGroupId] = useState<number | undefined>();

  const groupsAvailable: IGroup[] = useMemo(
    () => getGroupsFromCategories(allVisibleCategories),
    [allVisibleCategories]
  );

  const filteredVisibleCategories: ICategory[] = useMemo(
    () => applyFilterOnCategories(filterCategories, allVisibleCategories),
    [allVisibleCategories, filterCategories]
  );

  const filteredCategoriesGrouped: IGroupCategories[] = useMemo(() => {
    return orderCategoriesByGroups(filteredVisibleCategories).filter(
      (groupCategories: IGroupCategories) =>
        !!filterGroupId ? groupCategories.group.id === filterGroupId : true
    );
  }, [filteredVisibleCategories, filterGroupId]);

  const filteredCategoriesInAlphabeticalOrder: ICategory[] = useMemo(() => {
    return orderCategoriesAlphabetically(filteredVisibleCategories).filter(
      (category: ICategory) =>
        !!filterGroupId ? category.group?.id === filterGroupId : true
    );
  }, [filteredVisibleCategories, filterGroupId]);

  return {
    groupsAvailable,
    filteredCategoriesGrouped,
    filteredCategoriesInAlphabeticalOrder,
    setFilterCategories,
    setFilterGroupId,
  };
}
