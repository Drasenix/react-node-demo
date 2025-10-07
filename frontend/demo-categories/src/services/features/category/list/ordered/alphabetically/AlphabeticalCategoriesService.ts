import { isAlphabeticalOrder } from "../../../../../../utils/strings";
import { ICategory } from "../../../../../api/interfaces/Categorie";

export function orderCategoriesAlphabetically(
  categories: ICategory[]
): ICategory[] {
  categories.sort((a, b) => isAlphabeticalOrder(a.wording, b.wording));

  return categories;
}
