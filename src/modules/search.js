import getData from "./getData";
import renderGoods from "./renderGoods";
import { searchFilter } from './filters';

const search = () => {
  const searchInput = document.querySelector(".search-wrapper_input");

  searchInput.addEventListener("input", (event) => {
    getData().then((data) => renderGoods(searchFilter(data, event.target.value)));
  });
};

export default search;
