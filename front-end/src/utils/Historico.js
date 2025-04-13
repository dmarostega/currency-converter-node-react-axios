export default class Historico 
{
    static chave = 'historico';
    static total = 2;
    static itens = [];

    constructor() {
        this.chave = 'historico';
        this.total = 2;
        this.itens = [];
    }

    static salvar = (data, moedaDe, moedaPara, valor, resultado) => {
        this.itens = [{
            data,
            moedaDe,
            moedaPara,
            valor,
            resultado
        },
    ...this.itens]

        localStorage.setItem(this.chave, JSON.stringify(this.itens))
    }

    static listar = () => { 
        try {
            const res = localStorage.getItem(this.chave);
            return res ? JSON.parse(res) : []            
        } catch (error) {
            return [];
        }
    }

    static removerItem = (id) => {
        this.itens.splice(id,1)
        localStorage.setItem(this.chave, JSON.stringify(this.itens))
    }

    static limpar = () => {
        localStorage.removeItem(this.chave)
    }

}