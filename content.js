function imageElementGrab() {
  const img = document.querySelectorAll("img");
  for (let i = 0; i < img.length; i++) {
    img[i].src =
      "https://upload.wikimedia.org/wikipedia/commons/f/f0/Flag_of_Japan_%28bordered%29.svg";
  }
}

chrome.runtime.onMessage.addListener(function (request) {
  if (request.message === "start") imageElementGrab();
});
