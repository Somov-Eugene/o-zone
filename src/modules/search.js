const search = () => {
  const searchInput = document.querySelector(".search-wrapper_input");
  const searchBtn = document.querySelector(".search-btn > button");

  searchBtn.addEventListener("click", () => {
    console.log(searchInput.value);
    searchInput.value = "";
  });
};

export default search;
