export default class Exchange {  
  static getRate(currency) {
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/${currency}`)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .catch((error) => {
        console.log(error, error.message);
        return Error(error);
      });
  }
}