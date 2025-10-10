import { ICategory } from "../../services/api/interfaces/Categorie";
import "../../styles/features/category/list/CategoryItemComponent.css";
import { useSelectedCategoryContext } from "../../hooks/categories/context/SelectedCategoryContext";
import { useStyleForCategoryItem } from "../../hooks/categories/useStyleForCategoryItem";

interface ICategoryItemProps {
  category: ICategory;
  children?: React.ReactNode;
}

export function CategoryItemComponent(props: ICategoryItemProps) {
  const selectedCategoryContext = useSelectedCategoryContext();
  const className = useStyleForCategoryItem(
    props.category.id,
    selectedCategoryContext.selectedCategoryId
  );

  function changeSelectedCategory(id_category: number) {
    selectedCategoryContext.setSelectedCategoryId(id_category);
  }

  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      changeSelectedCategory(props.category.id);
    }
  };

  return (
    <li
      tabIndex={0}
      className={className}
      onClick={() => changeSelectedCategory(props.category.id)}
      onKeyDown={handleKeyDown}
    >
      {props.children}
    </li>
  );
}
