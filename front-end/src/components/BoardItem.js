import {useState, useEffect} from 'react';
import getBackEndURL from '../config';
import axios from 'axios';
import Historico from '../utils/Historico';

export default function BoardItem({id, onFunc, onConversao}) {
    
    const [symbols, setSymbols] = useState([]);
    const [moedaDe, setMoedaDe] = useState('');
    const [moedaPara, setMoedaPara] = useState('');
    const [valor, setValor] = useState('');
    const [resultado, setResultado] = useState('');

    useEffect(() => { 
        
        const localSymbols = localStorage.getItem('currencySymbols');

        if(localSymbols) {
            setSymbols(JSON.parse(localSymbols));
        } else { 
            const url = getBackEndURL();

            axios.get(`${url}api-externa/buscar-symbols`)
            .then(res => {
                if(res.data.symbols) {
                    setSymbols(res.data.symbols.currencies)                
                    localStorage.setItem('currencySymbols', JSON.stringify(res.data.symbols.currencies))                
                }
            })
            .catch(err => {
                console.error('Erro ao buscar simbolos:', err);
            });
        }

    }, [])

    const buscarConversao = async (params) => {
        if(!moedaDe | !moedaPara | !valor) {
            alert("Preencha todos os campos")
        }

        try {
            const url = getBackEndURL();
            const res = await axios.get(`${url}api-externa/${moedaDe}/${moedaPara}/${valor}`)

            setResultado(res.data.rate.result);
            Historico.salvar(Date.now(),moedaDe,moedaPara, valor, res.data.rate.result)

            if (onConversao) onConversao(); // notifica o Home

        } catch (err) {
            console.error(
                { 
                    error: "Erro ao buscar conversão.", 
                    message: err.message,
                    stack: err.stack 
                })            
        }        
    }

    if(!symbols) {
        return (<p>Não foi possível carregar moedas</p>)
    }
    return (
        <div id={id} className="board-item" >
            <div>
                <label>Valor</label>
                <input  id={`result_${id}`}
                    style={{maxWidth: '50px'}}
                    value={valor}
                    onChange={(e) => setValor(e.target.value)}
                />
            
                <label>Converter de</label>
                <select value={moedaDe} onChange={(e) => setMoedaDe(e.target.value)}>
                    <option value="" disabled hidden>Selecione uma moeda</option>
                    {Object.entries(symbols).map(([code, name]) => {
                        return <option key={code} value={code}>{code}</option>    
                    })} 
                </select>
                   
                <label>para</label>
                <select value={moedaPara} onChange={(e) => setMoedaPara(e.target.value)}>
                    <option value="" disabled hidden>Selecione uma moeda</option>
                    {Object.entries(symbols).filter(([code]) => code !== moedaDe)
                                            .map(([code, name]) => {
                        return <option key={code} value={code}>{code}</option>    
                    })} 
                </select>
                <div className='board-item-buttons'>
                    <button className="App-button" style={{width: "20px", borderRadius: "50%"}}
                        onClick={buscarConversao}                       
                        >ir</button>
                    <button  className="App-button App-button-remove btn-red-color" 
                        onClick={() => onFunc(id)}
                        ><span></span></button>
                </div>
            </div>
            <div className='board-item-result'>
                <p>{resultado} {resultado ? moedaPara : ''}</p>
            </div>
        </div>
    );
}