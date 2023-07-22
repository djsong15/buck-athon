// chrome.runtime.onMessage.addListener(function (message) {
//   const contentData = message.data;
//   document
//     .querySelector("#calculate")
//     .addEventListener("click", calculate(contentData));
// });

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
  console.log(result.result);

  document.querySelector("#result").textContent = result.result;
  chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
    let activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, { message: "start" });
  });
}

  document.querySelector('#calculate').addEventListener('click', calculate);
  document.querySelector('#to-currency').addEventListener('change', calculate);