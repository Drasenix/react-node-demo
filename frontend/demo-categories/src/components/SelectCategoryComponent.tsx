import { useState } from "react";
import useGroups from "../hooks/categories/useGroups";
import { IGroup } from "../services/api/interfaces/Categorie";

interface ISelectCategoryComponentProps {
  selectFilterGroupId: Function;
}

function SelectCategoryComponent(props: ISelectCategoryComponentProps) {
  const [groupsAvailable] = useState<IGroup[]>(useGroups());
  return (
    <select
      className="list-categories-select"
      onChange={(event) => props.selectFilterGroupId(event.target.value)}
    >
      <option value="all">Tous les groupes de catégories</option>
      {groupsAvailable.map((group) => (
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
