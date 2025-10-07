import { IGroup } from "../services/api/interfaces/Categorie";

interface ISelectCategoryComponentProps {
  groups: IGroup[];
  selectFilterGroupId: Function;
}

function SelectCategoryComponent(props: ISelectCategoryComponentProps) {
  return (
    <select
      className="list-categories-select"
      onChange={(event) => props.selectFilterGroupId(event.target.value)}
    >
      <option value="all">Tous les groupes de catégories</option>
      {props.groups.map((group) => (
        <option
          key={group.id}
          value={group.id}
          onClick={() => props.selectFilterGroupId(group.id.toString())}
        >
          {group.name}
        </option>
      ))}
    </select>
  );
}

export default SelectCategoryComponent;
