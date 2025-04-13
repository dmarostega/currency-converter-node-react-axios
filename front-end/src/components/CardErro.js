

export default function CardError({message, visible}) {
    return  (
        <div className={
            `error-card
             ${visible ? 'opacity-100' : 'opacity-0'}
            `}
        >
            {message}
        </div>
    );
}