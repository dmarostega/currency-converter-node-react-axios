import DefaultLayout from '../layouts/default';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Board from '../components/Board';
import getBackEndURL from '../config'
import Historico from '../utils/Historico';

export default function Home() {
    const [message, setMensagem] = useState('');
    const [historico, setHistorico] = useState(Historico.listar());

    useEffect(() => {
        localStorage.removeItem('currencySymbols');
        setHistorico(Historico.listar())
        const url = getBackEndURL();
        axios.get(url)
                .then(res => {
                    setMensagem(res.data.message);
                })
             .catch(err => {
                console.error('Erro ao buscar mensagem:', err);
                setMensagem('Erro ao carregar mensagem');
             });
    }, []);

    const atualizarHistorico = () => {
        setHistorico(Historico.listar())
    }

    const removerItem = (id) => {
        Historico.removerItem(id)
    }
    
    return (
        <DefaultLayout>
            <div>
                <h2 className="text-2xl font-bold text-red-600">{message}</h2>
                <Board id="Boardes" onConversao={atualizarHistorico}/>
                <div>
                    <p>Histórico</p>
                    {historico.map((item,idx) => {
                        const data = new Date(item.data)
                        return <div key={'historyc_'+idx} className='historic-item'>
                                    <div>
                                        {data.toLocaleDateString()}
                                    </div>
                                    <div>
                                        {Number(item.valor).toFixed(2)} <span style={{padding: "0 .5em 0 0"}}>{item.moedaDe}</span>

                                        é {Number(item.resultado).toFixed(2)}  <span>{item.moedaPara}</span>
                                    </div>
                                <div>
                                {/* <button  className="App-button App-button-remove btn-red-color" 
                                    onClick={() => removerItem(idx)}
                                    ><span></span></button> */}
                                </div>
                            </div>
                    })}
                </div>
            </div>
        </DefaultLayout>
    );
}
