  // import axios from 'axios';
  const EXCHANGE_API_KEY = require( "../config");

  const mainUrl = 'https://api.exchangerate.host';

  async function exchangeSymbols() {
      const url = `${mainUrl}/symbols`;
      const response = await axios.get(url,  {
          headers: {
            apikey: EXCHANGE_API_KEY
          }
        });

      return response.data;
  }

  async function getExchangeRate(base = 'USD', target = 'BRL') {
    const url = `${url}/latest?base=${base}&symbols=${target}`;
    const response = await axios.get(url, {
      headers: {
        apikey: EXCHANGE_API_KEY
      }
    });
    return response.data.rates[target];
  }

  module.exports = { exchangeSymbols, getExchangeRate };