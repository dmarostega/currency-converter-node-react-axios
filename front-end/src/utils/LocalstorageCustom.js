class LocalStorageCustom{

    static set = (chave, dados, tempo) =>  {
        const data = {
            dados, 
            expiracao: (tempo ? new Date().getTime() + tempo : null)
        }
        console.log('LocalStorageCustom.set()', data)
        localStorage.setItem(chave, JSON.stringify(data));
    }
    
    static get = (chave) => {
        const dadosStr = localStorage.getItem(chave);
        console.log("Dados do get: ", dadosStr)
        console.log('LocalStorageCustom.get()', dadosStr)
                
        if(dadosStr == null) return null;
    
        const dados = JSON.parse(dadosStr);

        console.log("DADOS: ", dados)
        if(new Date().getTime() > dados.expiracao) {
            localStorage.removeItem(chave);
            return null;
        }
    
        return dados.value;
    } 
}

export default LocalStorageCustom;
