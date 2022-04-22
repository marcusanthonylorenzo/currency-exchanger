import "./css/styles.css";
import Exchange from "./js/exchange.js";
import { convertCash } from "./js/business-logic.js";

//DOM output: Rate from, Rate to, Timestamp "as of";
//error handling

const convertMoney = () => {
  const button = document.getElementById("getRateBtn");
  button.addEventListener("click", () => {
    resetResults();
    //get select option value
    let input = document.getElementById("selectCountry");
    const currency = {
      amount: document.getElementById("amount").value,
      primary: "USD",
      target: input.options[input.selectedIndex].value,
    };
    console.log(currency.amount, currency.primary, currency.target);
    let convertFrom = currency.primary;

    Exchange.getRate(convertFrom)
      .then((response) => {
        let baseCurrencyCode = response["base_code"];
        let targetCurrencyCode = currency.target;

        // let targetSelector = converted[responseKeys][targetCode];
        let conversionRate = response["conversion_rates"][currency.target];

        //async use for fetched data
        displayResults(currency.amount, baseCurrencyCode, conversionRate, targetCurrencyCode);
      })
      .catch(error => displayError(error));
  });
};

const displayResults = (baseAmount, baseCode, targetRate, targetCode) => {
  let exchanged = convertCash(baseAmount, targetRate);

  if(isNaN(baseAmount) || isNaN(targetRate)){
    let error = `Please make sure you've entered a proper number and select a currency.`;
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
  //placeholder value for baseH1 later.
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