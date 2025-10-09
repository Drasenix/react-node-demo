import {
  useSuspenseQuery,
  UseSuspenseQueryResult,
} from "@tanstack/react-query";
import {
  getVisibleCategories,
  getAllCategories,
} from "../services/api/CategoryService";
import { IVisibleCategorie } from "../services/api/interfaces/VisibleCategorie";
import { ICategory } from "../services/api/interfaces/Categorie";

export const useFetchCategories = () => {
  const visibleCategories: UseSuspenseQueryResult<IVisibleCategorie[], Error> =
    useSuspenseQuery({
      queryFn: () => getVisibleCategories(),
      queryKey: ["visibleCategories"],
    });

  const allCategories: UseSuspenseQueryResult<ICategory[], Error> =
    useSuspenseQuery({
      queryFn: () => getAllCategories(),
      queryKey: ["allCategories"],
    });

  if (visibleCategories.isError || allCategories.isError) {
    console.error("Problème avec la récupération des catégories");
    return [];
  }

  return allCategories.data.filter((category) =>
    visibleCategories.data.map((visible) => visible.id).includes(category.id)
  );
};
