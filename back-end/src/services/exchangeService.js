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
    const url = `${mainUrl}/convert?from=${base}&to=${target}&amount=${valor}&access_key=${EXCHANGE_API_KEY}`;
    const response = await axios.get(url);
    return response.data;
  }

  module.exports = { exchangeSymbols, getExchangeRate };