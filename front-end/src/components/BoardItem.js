import {useState, useEffect} from 'react';
import getBackEndURL from '../config';
import axios from 'axios';

export default function BoardItem({id, onFunc, onChange}) {
     const [symbols, setSymbols] = useState('');


        useEffect(() => { 
            const url = getBackEndURL();
            console.log("Front-end ", `${url}api-externa/buscar-symbols`)
            axios.get(`${url}api-externa/buscar-symbols`)
            .then(res => {
                setSymbols(res.data.symbols)
                console.log('Buscando simbolos', res.data)
            })
            .catch(err => {
                console.error('Erro ao buscar mensagem:', err);
             });
        }, [])

    
        return (
            <div id={id} className="board-item" >
                <div>
                    <label>Valor</label>
                    <input id={`result_${id}`}/>
                
                    <label>Converter de</label>
                    <select>                  
                    </select>
                
                    <label>para</label>
                    <select>
                    </select>
                    <div className='board-item-buttons'>
                        <button className="App-button" style={{width: "20px", borderRadius: "50%"}}                            
                            >ir</button>
                        <button  className="App-button App-button-remove btn-red-color" 
                            onClick={() => onFunc(id)}
                            ><span></span></button>
                    </div>
                </div>
                <div className='board-item-result'>
                    <p>resultado</p>
                </div>
            </div>
    );
}