import { useMemo } from "react";
import { useFetchCategories } from "./useFetchCategories";
import { IGroup } from "../../services/api/interfaces/Categorie";
import { getGroupsFromCategories } from "../../services/features/category/list/ordered/group/GroupCategoriesService";

export default function useGroups(): IGroup[] {
  const allVisibleCategories = useFetchCategories();

  return useMemo(
    () => getGroupsFromCategories(allVisibleCategories),
    [allVisibleCategories]
  );
}
