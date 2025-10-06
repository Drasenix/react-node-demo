import OrderingButtonComponent from "../../../../components/OrderingButtonComponent";
import alphabetical from "../../../../assets/img/features/category/list/ordered/alphabetically/alphabetical-order.png";
import alphabetical_active from "../../../../assets/img/features/category/list/ordered/alphabetically/alphabetical-order-active.png"; //
import { OrderingTypes } from "../../CategoryMenuComponent";

interface IAlphabeticalOrderingButtonComponentProps {
  isActive: boolean;
  changeOrdering: (ordering: OrderingTypes) => void;
}

function AlphabeticalOrderingButtonComponent(
  props: IAlphabeticalOrderingButtonComponentProps
) {
  return (
    <OrderingButtonComponent
      class={
        props.isActive
          ? "alphabetical-order-categories-btn category-order-active"
          : "alphabetical-order-categories-btn category-order-inactive"
      }
      src={props.isActive ? alphabetical_active : alphabetical}
      alt={
        props.isActive
          ? "(Actif) Boutton qui permet de trier les catégories par ordre alphabétique"
          : "(Inactif) Boutton qui permet de trier les catégories par ordre alphabétique"
      }
      text={"Ordre alphabétique"}
      selectOrdering={() => props.changeOrdering(OrderingTypes.Alphabetical)}
    ></OrderingButtonComponent>
  );
}

export default AlphabeticalOrderingButtonComponent;
