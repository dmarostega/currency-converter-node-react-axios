export default function BoardItem({id, onFunc, onChange}) {
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