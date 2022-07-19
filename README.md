# Boas vindas ao repositório do Desafio Técnico de Backend da Turma XP - Trybe 🚀

### O que foi desenvolvido

Uma _API_ que simula o funcionamento de uma corretora, utilizando _Node.JS_ e a arquitetura MSC (_Models_, _Service_ e _Controllers_).

### Desenvolvimento

Na aplicação desenvolvida é possível **ler, escrever ou atualizar** informações sobre `compra e venda de ações`, `carteira de ações do cliente`, `código e valor de um ativo`, `depositar e sacar da conta do cliente` e `solicitar o saldo disponível da conta do cliente`. Todas as informações estão em um _banco de dados_, que foi desenvolvido e manipulado utilizando o **MySQL**.

### Tecnologias utilizadas

<img title="NodeJS" alt="NodeJS" height="80" width="80" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" /> <img title="Docker" alt="Docker" height="80" width="80" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" /> <img title="Express" alt="Express" height="80" width="80" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" /> <img title="MySQL" alt="MySQL" height="80" width="80" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" />
          

### Instalando depedências

cd psel-turma-XP

npm install

### Executando a aplicação

cd psel-turma-XP

npm run dev

## Minhas considerações durante o desenvolvimento

`Rodar a aplicação:`

**1.** `npm run debug`

**2.** `Gerar o BD XPInvestimentos via workbench com sql script com as credenciais do .env`

**3.** `Fazer as requisições nas rotas`

**Solução para o erro: "unknown database"**

Passei cerca de 3 horas com esse erro, alterei dados da conexão, substituindo o acesso ao _.env_ por a string equivalente; Excluí os containers algumas vezes e rodei o _docker-compose up -d_ para gera-los novamente porém não resolveu.

Focando em continuar o desenvolvimento do desafio técnico encontrei uma solução na segunda resposta da pergunta do Stack Overflow abaixo:

Referência: https://stackoverflow.com/questions/53426919/mysql-docker-container-gives-unknown-database-error