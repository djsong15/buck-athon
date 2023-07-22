document.addEventListener("click", getSelectionText);

async function getSelectionText() {
  var text = "";
  if (window.getSelection) {
    text = window.getSelection().toString();
  } else if (document.selection && document.selection.type != "Control") {
    text = document.selection.createRange().text;
  }
  const amtToConvert = Number(text);
  console.log(amtToConvert);
  const response = await chrome.runtime.sendMessage({
    data: amtToConvert,
  });
  console.log(response);
}
