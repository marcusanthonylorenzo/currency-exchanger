import "./css/styles.css";
import Exchange from "./js/exchange.js";

//set var
//Country selector
//new Promise handling
//DOM creation
//error handling

const convertMoney = () => {
  const currency = {
    primary: "USD",
    secondary: "EUR",
  };

  let convertFrom = currency.primary;

  //selectors
  const button = document.getElementById("getRateBtn");

  button.addEventListener("click", () => {
    Exchange.getRate(convertFrom)
      .then((converted) => {
        console.table(converted);
      });
  });
};

convertMoney();