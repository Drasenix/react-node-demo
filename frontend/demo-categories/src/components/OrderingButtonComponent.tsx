import React from "react";
import "../styles/features/category/OrderingButtonComponent.css";
import {
  IStyleOrderingButtonResult,
  useStyleForOrderingButton,
} from "../hooks/categories/useStyleForOrderingButton";
import { OrderingTypes } from "../features/category/CategoryMenuComponent";

interface IOrderingButtonComponentProps {
  orderingType: OrderingTypes;
  currentOrderingType: OrderingTypes;
  selectOrderingType: Function;
}

function OrderingButtonComponent(props: IOrderingButtonComponentProps) {
  const style: IStyleOrderingButtonResult = useStyleForOrderingButton(
    props.orderingType,
    props.currentOrderingType
  );
  return (
    <button className={style.class} onClick={() => props.selectOrderingType()}>
      <img className="category-order-btn-img" src={style.src} alt={style.alt} />
      <p className="category-order-btn-text">{style.text}</p>
    </button>
  );
}

export default OrderingButtonComponent;
