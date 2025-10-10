import OrderingButtonComponent from "../../components/OrderingButtonComponent";
import { OrderingTypes } from "./CategoryMenuComponent";

interface ICategoryHeaderComponentProps {
  ordering: OrderingTypes;
  selectOrderingType: Function;
}

export default function CategoryHeaderComponent(
  props: ICategoryHeaderComponentProps
) {
  return (
    <header className="Main-header">
      <p className="title-categories">Catégories</p>
      <OrderingButtonComponent
        orderingType={OrderingTypes.Group}
        currentOrderingType={props.ordering}
        selectOrderingType={() => props.selectOrderingType(OrderingTypes.Group)}
      ></OrderingButtonComponent>
      <OrderingButtonComponent
        orderingType={OrderingTypes.Alphabetical}
        currentOrderingType={props.ordering}
        selectOrderingType={() =>
          props.selectOrderingType(OrderingTypes.Alphabetical)
        }
      ></OrderingButtonComponent>
    </header>
  );
}
