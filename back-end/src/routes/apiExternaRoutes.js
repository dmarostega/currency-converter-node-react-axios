const Router = require('express');
const router = Router();
const { getExchangeRate } = require('../services/exchangeService')
const apiExternaController = require('../controllers/apiExternaController')

router.get('/buscar-symbols', apiExternaController.getSymbols)

router.get('/:base/:target', async (req, res) => {
    try {
        const  {base,target} = req.params;
        const rate = await getExchangeRate(base, target);
        res.json({ rate })
    } catch (error) {
        res.status(500).json({ "error": "Erro ao buscar conversão."})
    }
});

module.exports = router;

