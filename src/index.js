import "./css/styles.css";
import Exchange from "./js/exchange.js";

//Country selector via Base Code
//Convert selector via other fetch?
//
//new Promise handling
//DOM output: Rate from, Rate to, Timestamp "as of";
//error handling

const convertMoney = () => {
  //currency storage
  const currency = {
    primary: "USD",
  };

  let convertFrom = currency.primary;

  //selectors
  const button = document.getElementById("getRateBtn");

  //event handling
  button.addEventListener("click", () => {
    Exchange.getRate(convertFrom)
      .then((response) => {
        console.table(response);
        // Code = Rate;
        let baseCurrencyCode = response["base_code"];
        let targetCurrencyCode = "AUD";

        // let targetSelector = converted[responseKeys][targetCode];
        let conversionRate = response["conversion_rates"][targetCurrencyCode];

        //async use for fetched data
        displayResults(conversionRate);
        console.log(`from 1 ${baseCurrencyCode} to ${conversionRate} ${targetCurrencyCode}.`);
      });

  });
};

const displayResults = (data) => {
  let output = document.querySelector(".output");
  let h1 = document.createElement("h1");
  let h4 = document.createElement("h4");
  output.append(h1, h4);

  h1.textContent = data;
};

convertMoney();