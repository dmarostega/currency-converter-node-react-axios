import { useState } from 'react';
import BoardItem from './BoardItem';
import Button from './buttons/Button';
import CardError from './CardErro';

export default function Board({onConversao, onError, errorMessage}){
    const [items, setItems] = useState([]);
 
    const addBoardItem = () => {
        const novoId = Date.now();
        setItems([...items, novoId])

        if(onError) {            
            setTimeout(() => removeBoardItem(novoId),15000)
        }
    }

    const removeBoardItem = (idRemover) => {
        setItems(items.filter(id => id !== idRemover));
    };

    return (
        <div>
            <Button title="Adicionar Conversor" onclick={addBoardItem} />
            <div>
               {errorMessage && <CardError message={errorMessage}/>} 
            </div>
            <div className='board-items'  style={{ paddingTop: '1em' }}>
               {items.map(id => (
                    <BoardItem key={id} id={id} onFunc={removeBoardItem} onConversao={onConversao} onErro={onError} />
                ))}
            </div>
        </div>
    );
}