import { useState } from 'react';
import BoardItem from './BoardItem';
import Button from './buttons/Button';
import CardError from './CardErro';

export default function Board({onConversao, onError, errorMessage}){
    const [itens, setItens] = useState([]);
 
    const addBoardItem = () => {
        const novoId = Date.now();
        setItens([...itens, novoId])
    }

    const removeBoardItem = (idRemover) => {
        setItens(itens.filter(id => id !== idRemover));
    };

    return (
        <div>
            <Button title="Adicionar Conversor" onclick={addBoardItem} />
            <div>
               {errorMessage && <CardError messagem={errorMessage}/>} 
            </div>
            <div className='board-items'  style={{ paddingTop: '1em' }}>
               {itens.map(id => (
                    <BoardItem key={id} id={id} onFunc={removeBoardItem} onConversao={onConversao} onErro={onError} />
                ))}
            </div>
        </div>
    );
}