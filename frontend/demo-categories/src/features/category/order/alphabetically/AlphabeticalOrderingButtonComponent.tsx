import OrderingButtonComponent from "../../../../components/OrderingButtonComponent";
import { OrderingTypes } from "../../CategoryMenuComponent";
import {
  IStyleOrderingButtonResult,
  useStyleForOrderingButton,
} from "../../../../hooks/categories/useStyleForOrderingButton";

interface IAlphabeticalOrderingButtonComponentProps {
  ordering: OrderingTypes;
  changeOrdering: Function;
}

function AlphabeticalOrderingButtonComponent(
  props: IAlphabeticalOrderingButtonComponentProps
) {
  const style: IStyleOrderingButtonResult = useStyleForOrderingButton(
    OrderingTypes.Alphabetical,
    props.ordering
  );
  return (
    <OrderingButtonComponent
      {...style}
      text={"Ordre alphabétique"}
      selectOrdering={() => props.changeOrdering()}
    ></OrderingButtonComponent>
  );
}

export default AlphabeticalOrderingButtonComponent;
