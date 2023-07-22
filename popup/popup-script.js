// chrome.runtime.onMessage.addListener(function (message) {
//   const contentData = message.data;
//   document
//     .querySelector("#calculate")
//     .addEventListener("click", calculate(contentData));
// });

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

async function calculate() {
  // const currAmt = data;
  // console.log(data);
  // document.querySelector("#currency-amt").value = data;
  const currAmt = document.querySelector('#currency-amt').value;
  const fromCurr = document.querySelector("#from-currency").value;
  const toCurr = document.querySelector("#to-currency").value;
  const result = await fetch(
    `https://api.exchangerate.host/convert?from=${fromCurr}&to=${toCurr}&amount=${currAmt}`
  ).then((data) => data.json());
  let toCurrSym = currencySymbols[toCurr];
  let roundedResult = result.result.toFixed(2);
  let convertedAmt = toCurrSym.length === 1 ? `${toCurrSym}${roundedResult}` : `${roundedResult} ${toCurrSym}`;
  console.log(convertedAmt);

  document.querySelector("#result").textContent = convertedAmt;
  // chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
  //   let activeTab = tabs[0];
  //   chrome.tabs.sendMessage(activeTab.id, { message: "start" });
  // });
}

  document.querySelector('#calculate').addEventListener('click', calculate);
  document.querySelector('#to-currency').addEventListener('change', calculate);
  document.querySelector('#from-currency').addEventListener('change', calculate);