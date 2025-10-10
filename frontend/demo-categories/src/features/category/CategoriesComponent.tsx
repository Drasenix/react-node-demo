import { useStyleForCategories } from "../../hooks/categories/useStyleForCategories";
import { ICategory } from "../../services/api/interfaces/Categorie";
import { CategoryComponent } from "./CategoryComponent";
import { CategoryItemComponent } from "./CategoryItemComponent";
import { OrderingTypes } from "./CategoryMenuComponent";

interface ICategoriesComponentProps {
  ordering: OrderingTypes;
  categories: ICategory[];
}
export default function CategoriesComponent(props: ICategoriesComponentProps) {
  const className: string = useStyleForCategories(
    props.categories,
    props.ordering
  );

  return (
    <ul className={className}>
      {props.categories.map((category) => (
        <CategoryItemComponent key={category.id} category={category}>
          <CategoryComponent key={category.id} category={category}>
            {props.ordering === OrderingTypes.Alphabetical && (
              <CategoryComponent.Title group={category.group} />
            )}
          </CategoryComponent>
        </CategoryItemComponent>
      ))}
    </ul>
  );
}
