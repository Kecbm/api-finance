# Minhas considerações durante o desenvolvimento

`Rodar a aplicação:`

npm run debug
Gerar o BD XPInvestimentos via workbench com sql script com as credenciais do .env
Fazer as requisições nas rotas

**Solução para o erro: "unknown database"**

Passei cerca de 3 horas com esse erro, alterei dados da conexão, substituindo o acesso ao _.env_ por a string equivalente; Excluí os containers algumas vezes e rodei o _docker-compose up -d_ para gera-los novamente porém não resolveu.

Focando em continuar o desenvolvimento do desafio técnico encontrei uma solução na segunda resposta da pergunta do Stack Overflow abaixo:

Referência: https://stackoverflow.com/questions/53426919/mysql-docker-container-gives-unknown-database-error