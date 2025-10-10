import { ICategory } from "../../../../services/api/interfaces/Categorie";
import "../../../../styles/features/category/list/ordered/alphabetically/AlphabeticalCategoriesComponent.css";
import { useState } from "react";
import { CategoryComponent } from "../../CategoryComponent";
import { CategoryItemComponent } from "../../CategoryItemComponent";
import useCategoriesInAlphabeticalOrder from "../../../../hooks/categories/useCategoriesInAlphabeticalOrder";
import CategoriesComponent from "../../CategoriesComponent";
import { OrderingTypes } from "../../CategoryMenuComponent";

interface IAlpheticalProps {
  categories: ICategory[];
  filterGroupId: number | undefined;
}

export function AlphabeticalCategoriesComponent(props: IAlpheticalProps) {
  const categoriesInAlphabeticalOrder: ICategory[] =
    useCategoriesInAlphabeticalOrder(props.categories, props.filterGroupId);

  const class_name_even_or_odd: string =
    categoriesInAlphabeticalOrder.length % 2 === 0
      ? "even-nb-categories"
      : "odd-nb-categories";

  return (
    <ul className={"alphabetical-categories-list " + class_name_even_or_odd}>
      <CategoriesComponent
        ordering={OrderingTypes.Alphabetical}
        categories={props.categories}
      />
    </ul>
  );
}
