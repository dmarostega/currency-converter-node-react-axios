
export default function DefaultLayout({children}) {
    return (
        <div className="min-h-screen bg-gray-100 text-black p-8">
            {children ?? <p>Carregando conteúdo...</p>}             
        </div>
    )
} 