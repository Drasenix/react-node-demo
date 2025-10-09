import OrderingButtonComponent from "../../../../components/OrderingButtonComponent";
import {
  IStyleOrderingButtonResult,
  useStyleForOrderingButton,
} from "../../../../hooks/categories/useStyleForOrderingButton";
import { OrderingTypes } from "../../CategoryMenuComponent";

interface IGroupOrderingButtonComponentProps {
  ordering: OrderingTypes;
  changeOrdering: Function;
}

function GroupOrderingButtonComponent(
  props: IGroupOrderingButtonComponentProps
) {
  const style: IStyleOrderingButtonResult = useStyleForOrderingButton(
    OrderingTypes.Group,
    props.ordering
  );

  return (
    <OrderingButtonComponent
      {...style}
      text={"Groupe de catégorie"}
      selectOrdering={() => props.changeOrdering()}
    ></OrderingButtonComponent>
  );
}

export default GroupOrderingButtonComponent;
