import "./css/styles.css";
import Exchange from "./js/exchange.js";
import { convertCash } from "./js/business-logic.js";

const convertMoney = () => {
  const button = document.getElementById("getRateBtn");
  button.addEventListener("click", () => {
    resetResults();
    let input1 = document.getElementById("selectCountry1");
    let input2 = document.getElementById("selectCountry2");
    const currency = {
      amount: document.getElementById("amount").value,
      primary: input1.options[input1.selectedIndex].value,
      target: input2.options[input2.selectedIndex].value,
    };
    let convertFrom = currency.primary;

    if(currency.amount.length === 0){
      let error = "Please enter an amount.";
      displayError(error);
      return convertMoney;
    }

    Exchange.getRate(convertFrom)
      .then((response) => {
        let baseCurrencyCode = response["base_code"][currency.primary];
        let targetCurrencyCode = currency.target;
        let conversionRate = response["conversion_rates"][currency.target];
        console.log(response);
        //async use for fetched data
        displayResults(currency.amount, baseCurrencyCode, conversionRate, targetCurrencyCode);
      })
      .catch((error) => {
        error = "Unable to fetch data, please select a valid currency to convert from. If selected, please check your API key is correct, or your internet is connected.";
        displayError(error);
        return error;
      });
    window.addEventListener('error', function(e) {
      console.log(e);
    }, true);
  });
};

const displayResults = (baseAmount, baseCode, targetRate, targetCode) => {
  let exchanged = convertCash(baseAmount, targetRate);
  if(isNaN(baseAmount) || isNaN(targetRate)){
    let error = `
    <p>Please make sure you've selected an existing currency.</p>
    <p>(We've included some obsolete currencies here for novelty.)</p>
    `;
    displayError(error);
    return displayResults;
  }
  let output = document.querySelector(".output");
  let baseH1 = document.createElement("h1");
  let baseH4 = document.createElement("h4");
  let convertedH1 = document.createElement("h1");
  let convertedH4 = document.createElement("h4");
  let equals = document.createElement("h3");
  output.append(baseH1, baseH4);
  output.append(equals);
  output.append(convertedH1, convertedH4);

  baseH1.textContent = baseAmount;
  baseH4.textContent = baseCode;
  equals.textContent = "is equal to";
  convertedH1.textContent = exchanged;
  convertedH4.textContent = targetCode;
};

const resetResults = () =>{
  let output = document.querySelector(".output");
  while (output.hasChildNodes()){
    output.removeChild(output.firstElementChild);
  }
  return output;
};

const displayError = (error) => {
  let output = document.querySelector(".output");
  let div = document.createElement("div");
  output.append(div);
  div.innerHTML = `
    <h3>Sorry! Something went wrong: </h3>
    <h4>${error}</h4>
    `;
};

convertMoney();