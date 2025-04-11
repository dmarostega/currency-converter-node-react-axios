
export default function DefaultLayout({children}) {
    return (
        <div className="App-body">
            {children ?? <p>Carregando conteúdo...</p>}             
        </div>
    )
} 