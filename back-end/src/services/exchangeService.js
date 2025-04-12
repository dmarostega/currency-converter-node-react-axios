const axios = require('axios');
  const getKey = require( "../config");
  EXCHANGE_API_KEY = getKey();

  const mainUrl = 'https://api.exchangerate.host';

  async function exchangeSymbols() {
      const url = `${mainUrl}/list`;
      const response = await axios.get(`${url}?access_key=${EXCHANGE_API_KEY}`);

      return response.data;
  }

  async function getExchangeRate(base = 'USD', target = 'BRL') {
    const url = `${url}/latest?base=${base}&symbols=${target}`;
    const response = await axios.get(url, {
      headers: {
        access_key: EXCHANGE_API_KEY
      }
    });
    return response.data.rates[target];
  }

  module.exports = { exchangeSymbols, getExchangeRate };