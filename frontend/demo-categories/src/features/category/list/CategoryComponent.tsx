import { ICategory, IGroup } from "../../../services/api/interfaces/Categorie";
import "../../../styles/features/category/list/CategoryComponent.css";

interface ICategoryTitleProps {
  group: IGroup | undefined;
}

interface ICategoryProps {
  category: ICategory;
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

export function Title(props: ICategoryTitleProps) {
  return (
    !!props.group && (
      <div className={"category-name-title " + props.group.color}>
        {props.group.name}
      </div>
    )
  );
}

CategoryComponent.Title = Title;
