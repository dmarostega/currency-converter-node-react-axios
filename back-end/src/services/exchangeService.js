const axios = require('axios');
  const getKey = require( "../config");
  EXCHANGE_API_KEY = getKey();

  const mainUrl = 'https://api.exchangerate.host';

  async function exchangeSymbols() {
      const url = `${mainUrl}/list`;
      const response = await axios.get(`${url}?access_key=${EXCHANGE_API_KEY}`);

      return response.data;
  }

  async function getExchangeRate(base = 'USD', target = 'BRL', valor = 10) {
    /*
    // "convert" - convert one currency to another  
        https://api.exchangerate.host/convert?from=EUR&to=GBP&amount=100

        https://api.exchangerate.host/convert
        ? access_key = 154a81d8c4d2272fb0eb96b7569185d6
        & from = USD
        & to = GBP
        & amount = 10
        Fonte: https://exchangerate.host/documentation
 */
    const url = `${mainUrl}/convert?from=${base}&to=${target}&amount=${valor}&access_key=${EXCHANGE_API_KEY}`;
    const response = await axios.get(url);
    return response.data;
  }

  module.exports = { exchangeSymbols, getExchangeRate };