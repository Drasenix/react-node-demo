export function ignoreCaseAndAccent(string: string | undefined) {
  if (!string) {
    return "";
  }
  return string
    .toLocaleLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

export function isAlphabeticalOrder(a: string, b: string) {
  return a.localeCompare(b);
}
