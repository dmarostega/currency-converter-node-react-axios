

export default function Button({title, onclick}) { 
    return (
        <button 
                onClick={onclick}
                className="App-button"
            >
            {title}
            </button>
    );
}