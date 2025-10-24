import { IGroupCategories } from "../../../../../../../hooks/categories/useGroupedCategories";
import {
  ICategory,
  IGroup,
} from "../../../../../../../services/api/interfaces/Categorie";
import {
  getGroupsFromCategories,
  orderCategoriesByGroups,
} from "../../../../../../../services/features/category/list/ordered/group/GroupCategoriesService";
import { expect, it } from "@jest/globals";

it("should return all groups from given categories without dupliucates", () => {
  // Given
  const category_with_group_one: ICategory = {
    id: 1,
    group: {
      id: 1,
      name: "groupe 1",
      color: "m-blue",
    },
    wording: "AAA",
    description: "desc",
  };

  const category_with_group_one_again: ICategory = {
    id: 4,
    wording: "AAAAbis",
    group: {
      id: 1,
      name: "groupe 1",
      color: "m-blue",
    },
    description: "desc",
  };

  const category_with_group_two: ICategory = {
    id: 1,
    group: {
      id: 2,
      name: "groupe 2",
      color: "m-pink",
    },
    wording: "BBB",
    description: "desc",
  };

  const category_without_group: ICategory = {
    id: 3,
    wording: "CCC",
    description: "desc",
  };

  const categories: ICategory[] = [
    category_with_group_one,
    category_with_group_two,
    category_without_group,
    category_with_group_one_again,
  ];

  // When
  const result: IGroup[] = getGroupsFromCategories(categories);

  // Then
  const expected_result: IGroup[] = [
    {
      id: 1,
      name: "groupe 1",
      color: "m-blue",
    },
    {
      id: 2,
      name: "groupe 2",
      color: "m-pink",
    },
  ];
  expect(result).toEqual(expected_result);
});

it("should return an array of groups with their categories based on category's group id", () => {
  // Given
  const first_category_in_group_one: ICategory = {
    id: 1,
    group: {
      id: 1,
      name: "groupe 1",
      color: "m-blue",
    },
    wording: "AAA",
    description: "desc",
  };

  const second_category_in_group_one: ICategory = {
    id: 2,
    group: {
      id: 1,
      name: "groupe 1",
      color: "m-blue",
    },
    wording: "AAAA",
    description: "desc",
  };

  const category_in_group_two: ICategory = {
    id: 3,
    group: {
      id: 2,
      name: "groupe 2",
      color: "m-pink",
    },
    wording: "BBB",
    description: "desc",
  };

  const categories: ICategory[] = [
    first_category_in_group_one,
    second_category_in_group_one,
    category_in_group_two,
  ];

  // When
  const result: IGroupCategories[] = orderCategoriesByGroups(categories);

  // Then
  const group_categories_one: IGroupCategories = {
    group: {
      id: 1,
      color: "m-blue",
      name: "groupe 1",
    },
    categories: [first_category_in_group_one, second_category_in_group_one],
  };

  const group_categories_two: IGroupCategories = {
    group: {
      id: 2,
      color: "m-pink",
      name: "groupe 2",
    },
    categories: [category_in_group_two],
  };

  const expected_result: IGroupCategories[] = [
    group_categories_one,
    group_categories_two,
  ];
  expect(result).toEqual(expected_result);
});
