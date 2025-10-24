import { IGroupCategories } from "../../../../../../hooks/categories/useGroupedCategories";
import { ICategory, IGroup } from "../../../../../api/interfaces/Categorie";

export function getGroupsFromCategories(categories: ICategory[]): IGroup[] {
  const groups_with_duplicates_entries: IGroup[] = Array.from(
    categories,
    (categorie) => categorie.group
  ).filter((group) => group !== undefined);
  return [
    ...new Map(
      groups_with_duplicates_entries.map((group) => [group.id, group])
    ).values(),
  ];
}

export function orderCategoriesByGroups(
  categories: ICategory[]
): IGroupCategories[] {
  const categoriesInGroup: Required<ICategory>[] = categories.filter(
    (categorie: ICategory): categorie is Required<ICategory> =>
      !!categorie.group
  );
  return categoriesInGroup
    .reduce(
      (
        groupedCategories: IGroupCategories[],
        categorie: Required<ICategory>
      ) => {
        const key = categorie.group.id;
        if (!groupedCategories[key])
          groupedCategories[key] = {
            group: categorie.group,
            categories: [],
          };

        groupedCategories[key].categories = [
          ...groupedCategories[key].categories,
          categorie,
        ];

        return groupedCategories;
      },
      []
    )
    .filter(() => true); // reseting indexes from 0 not to have wrong array length
}
