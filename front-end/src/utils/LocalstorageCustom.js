class LocalStorageCustom{

    static set = (chave, dados, tempo) =>  {
        const data = {
            dados, 
            expiracao: (tempo ? new Date().getTime() + tempo : null)
        }
        localStorage.setItem(chave, JSON.stringify(data));
    }
    
    static get = (chave) => {
        const dadosStr = localStorage.getItem(chave);
                
        if(dadosStr == null) return null;
    
        const dados = JSON.parse(dadosStr);

        if(new Date().getTime() > dados.expiracao) {
            localStorage.removeItem(chave);
            return null;
        }
    
        return dados.value;
    } 
}

export default LocalStorageCustom;
