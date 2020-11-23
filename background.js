const verybuySearchPageUrl = "https://www.verybuy.cc/search/user_submit";

function searchQuery(word) {
  var query = word.selectionText;

  chrome.tabs.create({
    url: `${verybuySearchPageUrl}/${query}`,
  });
}

chrome.contextMenus.create({
  title: "在 Verybuy 搜尋「%s」",
  contexts: ["selection"],
  onclick: searchQuery,
});
