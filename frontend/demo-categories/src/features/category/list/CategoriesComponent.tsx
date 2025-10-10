import { useState } from "react";
import { ICategory } from "../../../services/api/interfaces/Categorie";
import { CategoryComponent } from "./CategoryComponent";
import { CategoryItemComponent } from "./CategoryItemComponent";
import { OrderingTypes } from "../CategoryMenuComponent";

interface ICategoriesComponentProps {
  ordering: OrderingTypes;
  categories: ICategory[];
}
export default function CategoriesComponent(props: ICategoriesComponentProps) {
  const [selectedCategory, setSelectedCategory] = useState(-1);
  function changeSelectedCategory(id_category: number) {
    setSelectedCategory(id_category);
  }

  return props.categories.map((category) => (
    <CategoryItemComponent
      key={category.id}
      category={category}
      isSelected={category.id === selectedCategory}
      selectCategory={changeSelectedCategory}
    >
      <CategoryComponent key={category.id} category={category}>
        {props.ordering === OrderingTypes.Alphabetical && (
          <CategoryComponent.Title group={category.group} />
        )}
      </CategoryComponent>
    </CategoryItemComponent>
  ));
}
