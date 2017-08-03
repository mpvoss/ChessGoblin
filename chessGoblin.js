function modifyDOM() {
    var elements = document.body.innerHTML;
    fenStrings = elements.match(/\{"ply.+?"\}/g);
    for (i in fenStrings){
        console.log(fenStrings[i])
    }

    var xhr = new XMLHttpRequest();
 xhr.open("GET", "https://lichess.org/api/game/BwkGkdMI?with_moves=1&with_fens=1", false);
xhr.onload = function (e) {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      console.log(xhr.response["moves"]);
    } else {
      console.error(xhr.statusText);
    }
  }
};
xhr.onerror = function (e) {
  console.error(xhr.statusText);
};
xhr.send(null);
    
}

//We have permission to access the activeTab, so we can call chrome.tabs.executeScript:
chrome.tabs.executeScript({
    code: '(' + modifyDOM + ')();' //argument here is a string but function.toString() returns function's code
}, (results) => {
});

