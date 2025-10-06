import OrderingButtonComponent from "../../../../components/OrderingButtonComponent";
import group from "../../../../assets/img/features/category/list/ordered/group/group.png";
import group_active from "../../../../assets/img/features/category/list/ordered/group/group-active.png";

interface IGroupOrderingButtonComponentProps {
  isActive: boolean;
  changeOrdering: Function;
}

function GroupOrderingButtonComponent(
  props: IGroupOrderingButtonComponentProps
) {
  return (
    <OrderingButtonComponent
      class={
        props.isActive
          ? "group-categories-btn category-order-active"
          : "group-categories-btn category-order-inactive"
      }
      src={props.isActive ? group_active : group}
      alt={
        props.isActive
          ? "(Actif) Boutton qui permet de regrouper les catégories par groupes"
          : " (Inactif) Boutton qui permet de regrouper les catégories par groupes"
      }
      text={"Groupe de catégorie"}
      selectOrdering={() => props.changeOrdering()}
    ></OrderingButtonComponent>
  );
}

export default GroupOrderingButtonComponent;
