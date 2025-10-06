import React from "react";
import "../styles/features/category/OrderingButtonComponent.css";

interface IOrderingButtonComponentProps {
  class: string;
  src: string;
  alt: string;
  text: string;
  selectOrdering: Function;
}

function OrderingButtonComponent(props: IOrderingButtonComponentProps) {
  return (
    <button className={props.class} onClick={() => props.selectOrdering()}>
      <img className="category-order-btn-img" src={props.src} alt={props.alt} />
      <p className="category-order-btn-text">{props.text}</p>
    </button>
  );
}

export default OrderingButtonComponent;
