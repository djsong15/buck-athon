function imageElementGrab() {
  // console.log('test inside of imageElement')
  // const expression = "//img"
  // const xpathResult = document.evaluate(expression, document, null, XPathResult.ANY_TYPE, null);
  // const arr = [];
  // let node = xpathResult.iterateNext();
  // while(node){
  //     arr.push(node);
  //     node = xpathResult.iterateNext();
  // }
  // console.log(arr);
  const img = document.querySelectorAll("img");
  // const test = document.querySelector('#conversion-ui')
  for (let i = 0; i < img.length; i++) {
    img[i].src = "images/japanflag.png";
  }
}
// imageElementGrab();
chrome.runtime.onMessage.addListener(function (request) {
  if (request.message === "start") imageElementGrab();
});
