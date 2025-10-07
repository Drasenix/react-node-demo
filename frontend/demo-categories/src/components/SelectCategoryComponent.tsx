import { IGroupCategories } from "../features/category/order/group/GroupsCategoriesComponent";

interface ISelectCategoryComponentProps {
  groups: IGroupCategories[];
  selectGroup: Function;
}

function SelectCategoryComponent(props: ISelectCategoryComponentProps) {
  return (
    <select
      className="list-categories-select"
      onChange={(event) => props.selectGroup(event.target.value)}
    >
      <option value="all">Tous les groupes de catégories</option>
      {props.groups.map((groupCategories) => (
        <option
          key={groupCategories.group.id}
          value={groupCategories.group.id}
          onClick={() => props.selectGroup(groupCategories.group.id.toString())}
        >
          {groupCategories.group.name}
        </option>
      ))}
    </select>
  );
}

export default SelectCategoryComponent;
