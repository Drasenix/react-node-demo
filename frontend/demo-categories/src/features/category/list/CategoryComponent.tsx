import { ICategory } from "../../../services/api/interfaces/Categorie";
import "../../../styles/features/category/list/CategoryComponent.css";
import { OrderingTypes } from "../CategoryMenuComponent";

interface ICategoryProps {
  category: ICategory;
  ordering: OrderingTypes;
  children?: React.ReactNode;
}

export function CategoryComponent(props: ICategoryProps) {
  return (
    <div className={"category-content"}>
      {props.children}
      <p className="categorie-wording">{props.category.wording}</p>
      <p
        className="categorie-description"
        dangerouslySetInnerHTML={{ __html: props.category.description }}
      />
    </div>
  );
}
