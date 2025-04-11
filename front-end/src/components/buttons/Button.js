

export default function Button({title, onclick}) { 
    return (
        <button
            onClick={onclick}
            className="p-4"
            >
               {title}
            </button>
    );
}