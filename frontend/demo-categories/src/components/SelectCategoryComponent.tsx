import { IGroupCategories } from "../features/category/order/group/GroupsCategoriesComponent";

interface ISelectCategoryComponentProps {
  groups: IGroupCategories[];
  selectFilterGroupId: Function;
}

function SelectCategoryComponent(props: ISelectCategoryComponentProps) {
  return (
    <select
      className="list-categories-select"
      onChange={(event) => props.selectFilterGroupId(event.target.value)}
    >
      <option value="all">Tous les groupes de catégories</option>
      {props.groups.map((groupCategories) => (
        <option
          key={groupCategories.group.id}
          value={groupCategories.group.id}
          onClick={() =>
            props.selectFilterGroupId(groupCategories.group.id.toString())
          }
        >
          {groupCategories.group.name}
        </option>
      ))}
    </select>
  );
}

export default SelectCategoryComponent;
