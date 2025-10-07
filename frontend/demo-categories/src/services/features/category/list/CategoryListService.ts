import { ignoreCaseAndAccent } from "../../../../utils/strings";
import {
  getVisibleCategories,
  getAllCategories,
} from "../../../api/CategoryService";
import { ICategory } from "../../../api/interfaces/Categorie";
import { IVisibleCategorie } from "../../../api/interfaces/VisibleCategorie";

export async function getAllVisibleCategories(): Promise<ICategory[]> {
  let completeVisibleCategories: ICategory[] = [];
  try {
    const visibleCategories: IVisibleCategorie[] = await getVisibleCategories();
    const allCategories: ICategory[] = await getAllCategories();

    completeVisibleCategories = allCategories.filter((category) =>
      visibleCategories.map((visible) => visible.id).includes(category.id)
    );
    return completeVisibleCategories;
  } catch (error) {
    console.error("Problème avec la récupération des catégories");
  } finally {
    return completeVisibleCategories;
  }
}

export function applyFilterOnCategories(
  filter: string,
  categories: ICategory[]
): ICategory[] {
  if (filter.length === 0) {
    return categories;
  }
  return categories.filter((category) => {
    return (
      ignoreCaseAndAccent(category.wording).includes(
        ignoreCaseAndAccent(filter)
      ) ||
      ignoreCaseAndAccent(category.description).includes(
        ignoreCaseAndAccent(filter)
      )
    );
  });
}
