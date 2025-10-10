import { IGroup } from "../../../../services/api/interfaces/Categorie";

interface IGroupItemComponentProps {
  group: IGroup;
  children?: React.ReactNode;
}
export default function GroupItemComponent(props: IGroupItemComponentProps) {
  return (
    <li className="group-categories-li">
      <div className={"group-categories-title " + props.group.color}>
        {props.group.name}
      </div>
      {props.children}
    </li>
  );
}
