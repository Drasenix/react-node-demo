import { ICategory, IGroup } from "../../../../../api/interfaces/Categorie";
import { IGroupCategories } from "../../../../../../features/category/order/group/GroupsCategoriesComponent";

export function getGroupsFromCategories(categories: ICategory[]): IGroup[] {
  const groups = Array.from(categories, (categorie) => categorie.group).filter(
    (group) => group !== undefined
  );
  return [...new Map(groups.map((group) => [group.id, group])).values()];
}

export function orderCategoriesByGroups(
  categories: ICategory[]
): IGroupCategories[] {
  const allGroupCategories = new Map();
  categories.forEach((categorie) => {
    if (!categorie.group) {
      console.log(
        "La catégorie id=" + categorie.id + " n'appartient à aucun groupe"
      );
    } else {
      const group: IGroup = categorie.group;
      let groupCategories: IGroupCategories = allGroupCategories.get(group.id);

      if (!!groupCategories) {
        groupCategories.categories.push(categorie);
      } else {
        groupCategories = {
          group,
          categories: [categorie],
        };
      }
      allGroupCategories.set(group.id, groupCategories);
    }
  });

  return Array.from(allGroupCategories, ([id, groupCategory]) => ({
    group: groupCategory.group,
    categories: groupCategory.categories,
  }));
}
