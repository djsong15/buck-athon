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
const price = document.querySelector('span[itemprop=price]').textContent; //document.querySelector('main>div:nth-child(2)>div:nth-child(2)>div>div>div>div>div:nth-child(2)>div>div>div:nth-child(2)>div>div>div>span>span:nth-child(2)>span').textContent;
console.log(price.slice(price.indexOf('$')));
let index = price.indexOf('$') + 1;

chrome.runtime.onMessage.addListener(
  async function (request) {
    console.log(`received, convert ${price.slice(index)} to ${request.toConv}`);
    const newPrice = await updatePrice(price.slice(index), request.toConv);
    // document.querySelector('main>div:nth-child(2)>div:nth-child(2)>div>div>div>div>div:nth-child(2)>div>div>div:nth-child(2)>div>div>div>span>span:nth-child(2)>span').textContent = newPrice;
    document.querySelector('span[itemprop=price]').textContent = newPrice;
  }
);

const currencySymbols = {
  'USD': '$',
  'EUR': '€',
  'JPY': '¥',
  'GBP': '£',
  'CNY': '¥',
  'AUD': '$',
  'CAD': '$',
  'CHF': 'CHF',
  'HKD': '$',
  'SGD': '$',
  'SEK': 'kr',
  'KRW': '₩',
  'NOK': 'kr',
  'NZD': '$',
  'INR': '₹'
}

async function updatePrice(price, toCurr) {
  console.log(price, toCurr);
  const result = await fetch(
    `https://api.exchangerate.host/convert?from=USD&to=${toCurr}&amount=${price}`
  ).then((data) => data.json());
  let toCurrSym = currencySymbols[toCurr];
  console.log(result.result);
  let roundedResult = result.result.toFixed(2);
  let convertedAmt = toCurrSym.length === 1 ? `${toCurrSym}${roundedResult}` : `${roundedResult} ${toCurrSym}`;
  console.log(convertedAmt);

  return convertedAmt;
}