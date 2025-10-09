import OrderingButtonComponent from "../../../../components/OrderingButtonComponent";
import {
  IStyleOrderingButtonResult,
  useStyleForOrderingButton,
} from "../../../../hooks/categories/useStyledOrderingButton";
import { OrderingTypes } from "../../CategoryMenuComponent";

interface IGroupOrderingButtonComponentProps {
  ordering: OrderingTypes;
  isActive: boolean;
  changeOrdering: Function;
}

function GroupOrderingButtonComponent(
  props: IGroupOrderingButtonComponentProps
) {
  const style: IStyleOrderingButtonResult = useStyleForOrderingButton(
    props.ordering,
    props.isActive
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
