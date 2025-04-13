Conversor de Moedas em Node.js, Reacts.js e Axios.

Obrigatório: possuir API KEY Válida no https://exchangerate.host; (Veja item 2)

1. Baixando: 
 `git clone https://github.com/dmarostega/currency-converter-node-react-axios.git conversor-moeda`

2. Configurar EXCHANGE_API_KEY em: 
    - back-end\src\config\index.js
    - API KEY deve ser gerada em: https://exchangerate.host
    - Atenção: plano Free permite apenas 100 requisições por mês
    
    - Contato / chave key: dev.diogo.marostega@gmail.com

3. Startando
 (raiz do projeto)
 - cd back-end
 - npm install
 - node index.js

 Em outro terminal
 (raiz do projeto)
 - cd front-end
 - npm install
 - npm run build
 - npm start
 - Confirmar:
 "Something is already running on port 3000.
 Would you like to run the app on another port instead? » (Y/n) -> Y"


Versões de implementação
 node -v = v20.11.1
 npm -v = 10.2.4
