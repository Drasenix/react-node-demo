import OrderingButtonComponent from "../../../../components/OrderingButtonComponent";
import { OrderingTypes } from "../../CategoryMenuComponent";
import {
  IStyleOrderingButtonResult,
  useStyleForOrderingButton,
} from "../../../../hooks/categories/useStyledOrderingButton";

interface IAlphabeticalOrderingButtonComponentProps {
  ordering: OrderingTypes;
  isActive: boolean;
  changeOrdering: Function;
}

function AlphabeticalOrderingButtonComponent(
  props: IAlphabeticalOrderingButtonComponentProps
) {
  const style: IStyleOrderingButtonResult = useStyleForOrderingButton(
    props.ordering,
    props.isActive
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
