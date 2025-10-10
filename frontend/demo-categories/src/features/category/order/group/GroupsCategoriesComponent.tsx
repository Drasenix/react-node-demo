import useGroupedCategories, {
  IGroupCategories,
} from "../../../../hooks/categories/useGroupedCategories";
import { ICategory } from "../../../../services/api/interfaces/Categorie";
import "../../../../styles/features/category/list/ordered/group/GroupsCategoriesComponent.css";
import "../../../../styles/features/category/list/ordered/group/GroupCategoriesComponent.css";
import CategoriesComponent from "../../CategoriesComponent";
import { OrderingTypes } from "../../CategoryMenuComponent";
import GroupItemComponent from "./GroupItemComponent";
import { SelectedCategoryContextProvider } from "../../../../hooks/categories/context/SelectedCategoryContext";
interface IGroupProps {
  categories: ICategory[];
  filterGroupId: number | undefined;
}

export function GroupsCategoriesComponent(props: IGroupProps) {
  const groupedCategories: IGroupCategories[] = useGroupedCategories(
    props.categories,
    props.filterGroupId
  );

  return (
    <SelectedCategoryContextProvider>
      <ul className="groups-categories-list">
        {groupedCategories.map((groupCategories) => (
          <GroupItemComponent group={groupCategories.group}>
            <CategoriesComponent
              ordering={OrderingTypes.Group}
              categories={groupCategories.categories}
            />
          </GroupItemComponent>
        ))}
      </ul>
    </SelectedCategoryContextProvider>
  );
}
