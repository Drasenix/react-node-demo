import { OrderingTypes } from "../../features/category/CategoryMenuComponent";
import group from "../../assets/img/features/category/list/ordered/group/group.png";
import group_active from "../../assets/img/features/category/list/ordered/group/group-active.png";
import alphabetical from "../../assets/img/features/category/list/ordered/alphabetically/alphabetical-order.png";
import alphabetical_active from "../../assets/img/features/category/list/ordered/alphabetically/alphabetical-order-active.png";

export interface IStyleOrderingButtonResult {
  class: string;
  src: string;
  alt: string;
  text: string;
}

export function useStyleForOrderingButton(
  ordering: OrderingTypes,
  isActive: boolean
): IStyleOrderingButtonResult {
  switch (ordering) {
    case OrderingTypes.Alphabetical:
      return createStyleForAlphabeticalOrderingButton(isActive);
    case OrderingTypes.Group:
      return createStyleForGroupOrderingButton(isActive);
  }
}

function createStyleForAlphabeticalOrderingButton(isActive: boolean) {
  return {
    class:
      "alphabetical-order-categories-btn category-order-" +
      (isActive ? "active" : "inactive"),
    src: isActive ? alphabetical_active : alphabetical,
    alt:
      (isActive ? "(Actif)" : "(Inactif)") +
      " Boutton qui permet de trier les catégories par ordre alphabétique",
    text: "Ordre alphabétique",
  };
}

function createStyleForGroupOrderingButton(isActive: boolean) {
  return {
    class:
      "group-categories-btn category-order-" +
      (isActive ? "active" : "inactive"),
    src: isActive ? group_active : group,
    alt:
      (isActive ? "(Actif)" : " (Inactif)") +
      " Boutton qui permet de regrouper les catégories par groupes",
    text: "Groupe de catégorie",
  };
}
