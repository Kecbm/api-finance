# Boas vindas ao repositório do Desafio Técnico de Backend da Turma XP - Trybe 🚀

## O que foi desenvolvido 👩‍💻

Uma `API` que simula o funcionamento de uma corretora, utilizando `Node.JS` e a arquitetura MSC (**Models**, **Service** e **Controllers**).

## Desenvolvimento 🎯

Na aplicação desenvolvida é possível **ler, escrever ou atualizar** informações sobre `compra e venda de ações`, `carteira de ações do cliente`, `código e valor de um ativo`, `depositar e sacar da conta do cliente` e `solicitar o saldo disponível da conta do cliente`. Todas as informações estão em um **banco de dados**, que foi desenvolvido e manipulado utilizando o **MySQL**.

## Tecnologias utilizadas 🛠

<img title="NodeJS" alt="NodeJS" height="80" width="80" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" /> <img title="Docker" alt="Docker" height="80" width="80" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" /> <img title="Express" alt="Express" height="80" width="80" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" /> <img title="MySQL" alt="MySQL" height="80" width="80" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" />
          

## Instalando depedências 🔽

```bash
  cd psel-turma-XP
```

```bash
  npm install
```

## Executando a aplicação 🖥

```bash
  cd psel-turma-XP
```

```bash
  docker-compose up -d
```

O comando irá inicializar um container chamado `XP_Investimentos` e outro chamado `XP_Investimentos_db`

```bash
  docker exec -it XP_Investimentos bash
```

```bash
  npm install
```

```bash
  npm run debug
```

`Gerar o BD XPInvestimentos` via workbench com sql script com as **credenciais do .env**

`Fazer as requisições` nas rotas

## Executando os testes unitários 🧪

```bash
  cd psel-turma-XP
```

```bash
  npm run test:mocha
```

## Documentação da API 📒

Documentação escrita seguindo o modelo disponibilizado em [README.so](https://readme.so/pt)

#### Gera o token JWT

```http
  POST /conta/login
```

| Parâmetros   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `emailCliente` e `senhaCliente` | `string` | **Obrigatórios**. Informações de login da conta do cliente |

- **Teste:** Realize requisições com algum dos seguintes usuários:
```json
{
  "emailCliente": "mariana@email.com",
  "senhaCliente": "senha123"
}

{
  "emailCliente": "ana@email.com",
  "senhaCliente": "senha123"
}

{
  "emailCliente": "clara@email.com",
  "senhaCliente": "senha123"
}
```

#### Deposito na conta do cliente

```http
  POST /conta/deposito
```

| Parâmetros   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `codCliente` e `valor` | `string` | **Obrigatórios**. Informações de deposito na conta do cliente |

- **Teste:** Realize requisições com o `codCliente: 1, 2` ou `3` e `valor` opcional:
```json
{
  "codCliente": "1",
  "valor": "50"
}

{
  "codCliente": "2",
  "valor": "100"
}

{
  "codCliente": "3",
  "valor": "150"
}
```

#### Saque na conta do cliente

```http
  POST /conta/saque
```

| Parâmetros   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `codCliente` e `valor` | `string` | **Obrigatórios**. Informações de saque na conta do cliente |

- **Teste:** Realize requisições com o `codCliente: 1, 2` ou `3` e `valor` opcional:
```json
{
  "codCliente": "1",
  "valor": "10"
}

{
  "codCliente": "2",
  "valor": "15"
}

{
  "codCliente": "3",
  "valor": "20"
}
```

#### Saldo disponível na conta do cliente

```http
  GET /conta/${codCliente}
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `codCliente` | `string` | **Obrigatório**. Id do cliente |

- **Teste:** Realize requisições com o `codCliente: 1`, `codCliente: 2` ou `codCliente: 3`

## Minhas considerações durante o desenvolvimento 📝

#### Rodar a aplicação: 📌

`Solução para o erro: "unknown database"`

Passei cerca de 3 horas com esse erro, alterei dados da conexão, substituindo o acesso ao **.env** por a string equivalente; Excluí os containers algumas vezes e rodei o **docker-compose up -d** para gera-los novamente porém não resolveu.

Focando em continuar o desenvolvimento do desafio técnico encontrei uma solução [na segunda resposta dessa pergunta do Stack Overflow](https://stackoverflow.com/questions/53426919/mysql-docker-container-gives-unknown-database-error) (referente a os dois ultimos passos da seção **executando a aplicação**).

#### Diagrama do banco de dados: 🎲

Gerei o diagrama do banco de dados em [Diagrams.net](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwid2Z_poor5AhXjupUCHUBEBO8QFnoECAQQAQ&url=https%3A%2F%2Fwww.diagrams.net%2F&usg=AOvVaw1-h_Mns_MotizBNxF18KnX)