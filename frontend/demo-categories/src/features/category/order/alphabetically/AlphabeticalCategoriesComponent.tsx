import { ICategory } from "../../../../services/api/interfaces/Categorie";
import "../../../../styles/features/category/list/ordered/alphabetically/AlphabeticalCategoriesComponent.css";
import { useState } from "react";
import { CategoryComponent } from "../../list/CategoryComponent";
import { CategoryItemComponent } from "../../list/CategoryItemComponent";
import useCategoriesInAlphabeticalOrder from "../../../../hooks/categories/useCategoriesInAlphabeticalOrder";

interface IAlpheticalProps {
  categories: ICategory[];
  filterGroupId: number | undefined;
}

export function AlphabeticalCategoriesComponent(props: IAlpheticalProps) {
  const [selectedCategory, setSelectedCategory] = useState(-1);

  const categoriesInAlphabeticalOrder: ICategory[] =
    useCategoriesInAlphabeticalOrder(props.categories, props.filterGroupId);

  function changeSelectedCategory(id_category: number) {
    setSelectedCategory(id_category);
  }

  const class_name_even_or_odd: string =
    categoriesInAlphabeticalOrder.length % 2 === 0
      ? "even-nb-categories"
      : "odd-nb-categories";

  return (
    <>
      <ul className={"alphabetical-categories-list " + class_name_even_or_odd}>
        {categoriesInAlphabeticalOrder.map((category) => (
          <CategoryItemComponent
            key={category.id}
            category={category}
            isSelected={category.id === selectedCategory}
            selectCategory={changeSelectedCategory}
          >
            <CategoryComponent key={category.id} category={category}>
              <div className={"category-name-title " + category.group?.color}>
                {category.group?.name}
              </div>
            </CategoryComponent>
          </CategoryItemComponent>
        ))}
      </ul>
    </>
  );
}
