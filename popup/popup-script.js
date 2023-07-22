chrome.runtime.onMessage.addListener(function (message) {
  const contentData = message.data;
  console.log(contentData);
  console.log(typeof contentData);
  //   calculate = document.querySelector("#calculate");
  calculate(contentData);
});

async function calculate(contentData) {
  console.log(contentData, "contentData");
  const currAmt = contentData;
  document.querySelector("#currency-amt").value = contentData;
  const fromCurr = document.querySelector("#from-currency").value;
  const toCurr = document.querySelector("#to-currency").value;
  const result = await fetch(
    `https://api.exchangerate.host/convert?from=${fromCurr}&to=${toCurr}&amount=${currAmt}`
  ).then((data) => data.json());
  console.log(result, "result");
  console.log(result.result);
  document.querySelector("#result").textContent = result.result;
}

// calculate.addEventListener("click", async (contentData) => {
//     console.log(contentData, "contentData");
//     const currAmt = contentData;
//     document.querySelector("#currency-amt").value = contentData;
//     const fromCurr = document.querySelector("#from-currency").value;
//     const toCurr = document.querySelector("#to-currency").value;
//     const result = await fetch(
//       `https://api.exchangerate.host/convert?from=${fromCurr}&to=${toCurr}&amount=${currAmt}`
//     ).then((data) => data.json());
//     console.log(result, "result");
//     console.log(result.result);
//     document.querySelector("#result").textContent = result.result;
//   });

// async function calculate(data) {
//   console.log(data, "this should be an object pointerevent");
//   const currAmt = data;
//   console.log(data);
//   document.querySelector("#currency-amt").value = data;
//   const fromCurr = document.querySelector("#from-currency").value;
//   const toCurr = document.querySelector("#to-currency").value;
//   const result = await fetch(
//     `https://api.exchangerate.host/convert?from=${fromCurr}&to=${toCurr}&amount=${currAmt}`
//   ).then((data) => data.json());
//   console.log(result.result);
//   document.querySelector("#result").textContent = result.result;

//   chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
//     let activeTab = tabs[0];
//     chrome.tabs.sendMessage(activeTab.id, { message: "start" });
//   });
// }
