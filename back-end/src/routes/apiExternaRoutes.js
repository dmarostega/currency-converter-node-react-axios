const Router = require('express');
const router = Router();
const { getExchangeRate } = require('../services/exchangeService')
const apiExternaController = require('../controllers/apiExternaController')

router.get('/buscar-symbols', apiExternaController.getSymbols)

router.get('/:base/:target/:valor', async (req, res) => {
    try {
        const  {base,target, valor} = req.params;
        const rateData  = await getExchangeRate(base, target, valor);
        
        res.json({ rate: rateData  })
    } catch (err) {
        res.status(500).json(
            { 
                error: "Erro ao buscar conversão.", 
                message: err.message,
                stack: err.stack 
            })
    }
});

module.exports = router;

