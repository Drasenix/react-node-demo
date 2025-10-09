import { ignoreCaseAndAccent } from "../../../../utils/strings";
import { ICategory } from "../../../api/interfaces/Categorie";

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
