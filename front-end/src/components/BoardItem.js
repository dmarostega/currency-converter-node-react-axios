export default function BoardItem({id,onRemove}) {
    const removerBoardItem = (id) => {
        
    }

    return (
        <div className="" id={id}>
            <div>
                <label>Moeda de origem</label>
                <select>
                    <option>Moeda 1</option>
                </select>
                <input />
            </div>
            <div>
                <label>Moeda de destino</label>
                <select>
                    <option>Moeda 1</option>
                </select>
                <input />

            </div>
            <button 
                onClick={() => onRemove(id)}
                >x</button>
        </div>
    );
}