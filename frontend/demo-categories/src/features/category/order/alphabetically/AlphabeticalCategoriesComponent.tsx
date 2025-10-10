import { ICategory } from "../../../../services/api/interfaces/Categorie";
import "../../../../styles/features/category/list/ordered/alphabetically/AlphabeticalCategoriesComponent.css";
import useCategoriesInAlphabeticalOrder from "../../../../hooks/categories/useCategoriesInAlphabeticalOrder";
import CategoriesComponent from "../../CategoriesComponent";
import { OrderingTypes } from "../../CategoryMenuComponent";
import { SelectedCategoryContextProvider } from "../../../../hooks/categories/context/SelectedCategoryContext";
interface IAlpheticalProps {
  categories: ICategory[];
  filterGroupId: number | undefined;
}

export function AlphabeticalCategoriesComponent(props: IAlpheticalProps) {
  const categoriesInAlphabeticalOrder: ICategory[] =
    useCategoriesInAlphabeticalOrder(props.categories, props.filterGroupId);

  return (
    <SelectedCategoryContextProvider>
      <CategoriesComponent
        ordering={OrderingTypes.Alphabetical}
        categories={categoriesInAlphabeticalOrder}
      />
    </SelectedCategoryContextProvider>
  );
}
