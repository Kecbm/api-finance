# Boas vindas ao repositório do Desafio Técnico de Backend da Turma XP - Trybe 🚀

### O que foi desenvolvido

Uma _API_ que simula o funcionamento de uma corretora, utilizando _Node.JS_ e a arquitetura MSC (_Models_, _Service_ e _Controllers_).

### Desenvolvimento

Na aplicação desenvolvida é possível **ler, escrever ou atualizar** informações sobre `compra e venda de ações`, `carteira de ações do cliente`, `código e valor de um ativo`, `depositar e sacar da conta do cliente` e `solicitar o saldo disponível da conta do cliente`. Todas as informações estão em um _banco de dados_, que foi desenvolvido e manipulado utilizando o **MySQL**.

### Tecnologias utilizadas

<img title="NodeJS" alt="NodeJS" height="80" width="80" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" /> <img title="Docker" alt="Docker" height="80" width="80" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" /> <img title="Express" alt="Express" height="80" width="80" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" /> <img title="MySQL" alt="MySQL" height="80" width="80" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" />
          

### Instalando depedências

```bash
  cd psel-turma-XP
```

```bash
  npm install
```

### Executando a aplicação

```bash
  cd psel-turma-XP
```

```bash
  docker-compose up -d
```

O comando irá inicializar um container chamado *XP_Investimentos* e outro chamado *XP_Investimentos_db*

```bash
  docker exec -it XP_Investimentos bash
```

```bash
  npm install
```

```bash
  npm run debug
```

*Gerar o BD XPInvestimentos* via workbench com sql script com as *credenciais do .env*

*Fazer as requisições* nas rotas

### Executando os testes unitários

```bash
  cd psel-turma-XP
```

```bash
  npm run test:mocha
```

## Minhas considerações durante o desenvolvimento

#### Rodar a aplicação:

**Solução para o erro: "unknown database"**

Passei cerca de 3 horas com esse erro, alterei dados da conexão, substituindo o acesso ao *.env* por a string equivalente; Excluí os containers algumas vezes e rodei o *docker-compose up -d* para gera-los novamente porém não resolveu.

Focando em continuar o desenvolvimento do desafio técnico encontrei uma solução na segunda resposta da pergunta do Stack Overflow abaixo (referente a os dois ultimos passos da seção *executando a aplicação*):

- [Referência](https://stackoverflow.com/questions/53426919/mysql-docker-container-gives-unknown-database-error)