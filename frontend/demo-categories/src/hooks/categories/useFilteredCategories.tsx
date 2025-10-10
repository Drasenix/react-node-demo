import { useMemo, useState } from "react";
import { ICategory } from "../../services/api/interfaces/Categorie";
import { applyFilterOnCategories } from "../../services/features/category/list/CategoryListService";
import { useFetchCategories } from "./useFetchCategories";

export default function useFilteredCategories() {
  const [allVisibleCategories] = useState<ICategory[]>(useFetchCategories());
  const [filterCategories, setFilterCategories] = useState<string>("");

  const filteredCategories: ICategory[] = useMemo(
    () => applyFilterOnCategories(filterCategories, allVisibleCategories),
    [allVisibleCategories, filterCategories]
  );

  return { setFilterCategories, filteredCategories };
}
