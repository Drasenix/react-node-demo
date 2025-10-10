import { OrderingTypes } from "../../features/category/CategoryMenuComponent";
import { ICategory } from "../../services/api/interfaces/Categorie";

export function useStyleForCategories(
  categories: ICategory[],
  orderingType: OrderingTypes
) {
  const class_name_even_or_odd: string =
    categories.length % 2 === 0 ? "even-nb-categories" : "odd-nb-categories";

  return (
    "categories-list " +
    class_name_even_or_odd +
    (orderingType === OrderingTypes.Alphabetical ? " alphabetical" : "")
  );
}
