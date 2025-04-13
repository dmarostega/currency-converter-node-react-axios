export default function ErrMensagens(validador, prefixMensagem = '') {
    let mensagem = '';
    switch (validador) {
        case 'invalid_access_key':
            mensagem = `Erro ao ${prefixMensagem}: Chave de API inválida ou limite de requisições excedido.`
            break;
        case 'usage_limit_reached':
            mensagem = `Erro ao ${prefixMensagem}: limite de requisições da API foi atingido.`
            break;                            
        default:
            mensagem = `Erro desconhecido ao ${prefixMensagem}.`
            break;
    }

    return mensagem;
}