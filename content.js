const price = document.querySelector('span[itemprop=price]').textContent;
console.log(price.slice(price.indexOf('$')));
let index = price.indexOf('$') + 1;

chrome.runtime.onMessage.addListener(
  async function (request) {
    console.log(`received, convert ${price.slice(index)} to ${request.toConv}`);
    const newPrice = await updatePrice(price.slice(index), request.toConv);
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