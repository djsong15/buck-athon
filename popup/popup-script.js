// import * as cheerio from './cheerio';

async function test() {
    const currAmt = document.querySelector('#currency-amt').value;
    const fromCurr = document.querySelector('#from-currency').value;
    const toCurr = document.querySelector('#to-currency').value;
    const result = await fetch(`https://api.exchangerate.host/convert?from=${fromCurr}&to=${toCurr}&amount=${currAmt}`).then(data => data.json());
    console.log(result.result);
    document.querySelector('#result').textContent = result.result;
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs) {
        let activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {'message': 'start'});
    });
}

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector('#calculate').addEventListener('click', test);
});
