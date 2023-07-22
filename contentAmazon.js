document.addEventListener("click", getSelectionText);

async function getSelectionText() {
  var text = "";
  if (window.getSelection) {
    text = window.getSelection().toString();
  } else if (document.selection && document.selection.type != "Control") {
    text = document.selection.createRange().text;
  }
  console.log(text);
  console.log(typeof text);
  const amtToConvert = Number(text);
  console.log(amtToConvert);
  console.log(typeof amtToConvert);

  const response = await chrome.runtime.sendMessage({
    data: amtToConvert,
  });
}
