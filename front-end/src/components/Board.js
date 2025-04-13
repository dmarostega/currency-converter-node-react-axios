import { useState  } from 'react';
import BoardItem from './BoardItem';
import Button from './buttons/Button';

export default function Board({onConversao}){
    const [items, setItems] = useState([]);

    const addBoardItem = () => {
        const novoId = Date.now();
        setItems([...items, novoId])
    }

    const removeBoardItem = (idRemover) => {
        setItems(items.filter(id => id !== idRemover));
    };

    return (
        <div>
            <Button title="Adicionar Conversor" onclick={addBoardItem} />
            
            <div className='board-items'  style={{ paddingTop: '1em' }}>
               {items.map(id => (
                    <BoardItem key={id} id={id} onFunc={removeBoardItem} onConversao={onConversao} />
                ))}
            </div>
        </div>
    );
}