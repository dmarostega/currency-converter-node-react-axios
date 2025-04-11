import { useState  } from 'react';
import BoardItem from './BoardItem';
import Button from './buttons/Button';

export default function Board({id = 'null'}){
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
            <p>Escolha as moedas a serem convertidas</p>
            <Button title="Adicionar Conversor" onclick={addBoardItem} />
            
            <div>
               {items.map(id => (
                    <BoardItem key={id} id={id} onRemove={removeBoardItem} />
                ))}
            </div>
        </div>
    );
}