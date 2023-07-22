// function imageElementGrab() {
//   const img = document.querySelectorAll("img");
//   for (let i = 0; i < img.length; i++) {
//     img[i].src =
//       "https://upload.wikimedia.org/wikipedia/commons/f/f0/Flag_of_Japan_%28bordered%29.svg";
//   }
// }

// chrome.runtime.onMessage.addListener(function (request) {
//   if (request.message === "start") imageElementGrab();
// });

// document.addEventListener("click", getSelectionText);

// async function getSelectionText() {
//   var text = "";
//   if (window.getSelection) {
//     text = window.getSelection().toString();
//   } else if (document.selection && document.selection.type != "Control") {
//     text = document.selection.createRange().text;
//   }
//   const amtToConvert = Number(text);
//   console.log(amtToConvert);
//   const response = await chrome.runtime.sendMessage({
//     data: amtToConvert,
//   });
//   console.log(response);
// }
