import OrderingButtonComponent from "../../../../components/OrderingButtonComponent";
import alphabetical from "../../../../assets/img/features/category/list/ordered/alphabetically/alphabetical-order.png";
import alphabetical_active from "../../../../assets/img/features/category/list/ordered/alphabetically/alphabetical-order-active.png";

interface IAlphabeticalOrderingButtonComponentProps {
  isActive: boolean;
  changeOrdering: Function;
}

function AlphabeticalOrderingButtonComponent(
  props: IAlphabeticalOrderingButtonComponentProps
) {
  return (
    <OrderingButtonComponent
      class={
        "alphabetical-order-categories-btn category-order-" +
        (props.isActive ? "active" : "inactive")
      }
      src={props.isActive ? alphabetical_active : alphabetical}
      alt={
        (props.isActive ? "(Actif)" : "(Inactif)") +
        " Boutton qui permet de trier les catégories par ordre alphabétique"
      }
      text={"Ordre alphabétique"}
      selectOrdering={() => props.changeOrdering()}
    ></OrderingButtonComponent>
  );
}

export default AlphabeticalOrderingButtonComponent;
