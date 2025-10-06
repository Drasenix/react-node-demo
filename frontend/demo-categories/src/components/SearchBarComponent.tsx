import search from "../assets/img/features/category/list/search.png";

interface ISearchBarComponentProps {
  filterCategories: string;
  setFilterCategories: Function;
}

function SearchBarComponent(props: ISearchBarComponentProps) {
  return (
    <div className="list-categories-search">
      <img
        className="list-categories-search-btn-img"
        src={search}
        alt="Loupe"
      />
      <input
        role="search"
        value={props.filterCategories}
        onInput={(e) => props.setFilterCategories(e.currentTarget.value)}
        className="list-categories-search-input"
        type="text"
        placeholder="Rechercher une catégorie"
      />
    </div>
  );
}

export default SearchBarComponent;
