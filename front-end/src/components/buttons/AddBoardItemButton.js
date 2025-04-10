

export default function AddBoardItemButton({title, onclick}) { 
    return (
        <button
            onClick={onclick}
            className="p-4"
            >
               {title}
            </button>
    );
}