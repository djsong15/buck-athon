const body = document.querySelector("#body");
document.addEventListener("click", getSelectionText);

function getSelectionText() {
  var text = "";
  if (window.getSelection) {
    text = window.getSelection().toString();
  } else if (document.selection && document.selection.type != "Control") {
    text = document.selection.createRange().text;
  }
  console.log(typeof text);
  const data1 = Number(text);
  console.log(typeof data1);
  console.log(data1);
  const response = chrome.runtime.sendMessage({
    data: data1,
  });
}
