

export default function CardError({messagem}) {
    return  (
        <div className={
            `error-card
            `}
        >
            {messagem}
        </div>
    );
}