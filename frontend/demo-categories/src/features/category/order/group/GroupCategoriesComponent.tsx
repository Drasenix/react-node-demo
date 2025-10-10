import { IGroupCategories } from "./GroupsCategoriesComponent";
import "../../../../styles/features/category/list/ordered/group/GroupCategoriesComponent.css";
import CategoriesComponent from "../../list/CategoriesComponent";
import { OrderingTypes } from "../../CategoryMenuComponent";
interface IGroupCategoryProps {
  groupCategories: IGroupCategories;
  changeGroupContainingSelectedCategory: Function;
  containsSelectedCategory: boolean;
}
export function GroupCategoriesComponent(props: IGroupCategoryProps) {
  const class_name_color = props.groupCategories.group.color;
  const class_name_even_or_odd: string =
    props.groupCategories.categories.length % 2 === 0
      ? "even-nb-categories"
      : "odd-nb-categories";
  return (
    <li className="group-categories-li">
      <div className={"group-categories-title " + class_name_color}>
        {props.groupCategories.group.name}
      </div>
      <ul className={"group-categories-list " + class_name_even_or_odd}>
        <CategoriesComponent ordering={OrderingTypes.Group} categories={props.groupCategories.categories} />
      </ul>
    </li>
  );
}
