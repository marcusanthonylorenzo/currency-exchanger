import "./css/styles.css";
import Exchange from "./js/exchange.js";

//Country selector via Base Code
//Convert selector via other fetch?
//DOM output: Rate from, Rate to, Timestamp "as of";
//error handling

const convertMoney = () => {
  const button = document.getElementById("getRateBtn");
  button.addEventListener("click", () => {
    resetResults();
    //get select option value
    let input = document.getElementById("selectCountry");
    const currency = {
      primary: "USD",
      target: input.options[input.selectedIndex].value,
    };
    console.log(currency.primary, currency.target);
    let convertFrom = currency.primary;

    Exchange.getRate(convertFrom)
      .then((response) => {
        let baseCurrencyCode = response["base_code"];
        let targetCurrencyCode = currency.target;

        // let targetSelector = converted[responseKeys][targetCode];
        let conversionRate = response["conversion_rates"][currency.target];
        console.log(conversionRate);

        //async use for fetched data
        displayResults(baseCurrencyCode, conversionRate, targetCurrencyCode);
        console.log(`from 1 ${baseCurrencyCode} to ${conversionRate} ${targetCurrencyCode}.`);
      });
  });
};

const displayResults = (baseCode, targetRate, targetCode) => {
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
  baseH1.textContent = "1";
  baseH4.textContent = baseCode;
  equals.textContent = "is equal to";
  convertedH1.textContent = targetRate;
  convertedH4.textContent = targetCode;
};

const resetResults = () =>{
  let output = document.querySelector(".output");
  while (output.hasChildNodes()){
    output.removeChild(output.firstElementChild);
  }
  return output;
};

convertMoney();