export function useStyleForCategoryItem(
  categoryId: number,
  selectedCategoryId: number
) {
  return categoryId === selectedCategoryId
    ? "category-item-selected"
    : "category-item";
}
