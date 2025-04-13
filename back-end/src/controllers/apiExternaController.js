const { exchangeSymbols } = require('../services/exchangeService')

exports.getSymbols = async (req, res) => {
    try {
        const data = await exchangeSymbols();
        res.json({'symbols': data});
    } catch (err) {
        console.error('Erro ao buscar símbolos:', err);
        res.status(500).json({ error: 'Erro ao buscar símbolos' });
    }
}