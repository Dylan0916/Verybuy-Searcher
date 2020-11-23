const verybuySearchPageUrl = "https://www.verybuy.cc/search/user_submit";

document.addEventListener("DOMContentLoaded", () => {
  chrome.tabs.getSelected(null, getSelectedTab);

  const searchTextDOM = document.getElementById("search-text");
  const searchForm = document.getElementById("search-form");

  searchForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const searchText = searchTextDOM.value;

    window.open(`${verybuySearchPageUrl}/${searchText}`);
  });
});
