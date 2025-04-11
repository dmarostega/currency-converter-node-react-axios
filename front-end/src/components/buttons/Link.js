

export default function Link({title, onclick}) { 
    return (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a  href="#"
            onClick={onclick}
            className="p-4 App-button"
            >
               {title}
            </a>
    );
}