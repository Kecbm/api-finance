const sinon = require('sinon');
const { expect } = require('chai');
const connection = require('../../../database/db');
const contaModel = require('../../../src/models/contaModel');

const dataCarteira = [
  {
    codCliente: 1,
    codAtivo: 1,
    qtdeAtivo: 20
  },
  {
    codCliente: 1,
    codAtivo: 2,
    qtdeAtivo: 20
  },
  {
    codCliente: 1,
    codAtivo: 3,
    qtdeAtivo: 20
  },
  {
    codCliente: 2,
    codAtivo: 1,
    qtdeAtivo: 20
  },
  {
    codCliente: 2,
    codAtivo: 2,
    qtdeAtivo: 20
  },
  {
    codCliente: 2,
    codAtivo: 3,
    qtdeAtivo: 20
  },
  {
    codCliente: 3,
    codAtivo: 1,
    qtdeAtivo: 20
  },
  {
    codCliente: 3,
    codAtivo: 2,
    qtdeAtivo: 20
  },
  {
    codCliente: 3,
    codAtivo: 3,
    qtdeAtivo: 20
  },
];

describe('Testando o contaModel', () => {
  describe('contaModel.carteira', () => {
    before(() => {
      const stubConnectionExecute = sinon.stub(connection, 'execute').resolves(dataCarteira);

      stubConnectionExecute.onCall(0).resolves([dataCarteira[0]]);
      stubConnectionExecute.onCall(1).resolves([dataCarteira[0]]);
      stubConnectionExecute.onCall(2).resolves([dataCarteira[0]]);
      stubConnectionExecute.onCall(3).resolves([dataCarteira[1]]);
      stubConnectionExecute.onCall(4).resolves([dataCarteira[1]]);
      stubConnectionExecute.onCall(5).resolves([dataCarteira[1]]);
      stubConnectionExecute.onCall(6).resolves([dataCarteira[2]]);
      stubConnectionExecute.onCall(7).resolves([dataCarteira[2]]);
      stubConnectionExecute.onCall(8).resolves([dataCarteira[2]]);
      stubConnectionExecute.onCall(9).resolves([{}]);
      stubConnectionExecute.onCall(10).resolves([{}]);
    });

    after(() => {
      connection.execute.restore();
    });

    it('Testa se o retorno com id 1 é um objeto', async () => {
      const response = await contaModel.carteira(1);

      expect(response).to.be.an('object');
    });

    it('Testa se o objeto retornado com id 1 não está vazio', async () => {
      const response = await contaModel.carteira(1);

      expect(response).to.not.be.empty;
    });

    it('Testa se retorna a quantidade de ativo na carteira do cliente com id 1', async () => {
      const response = await contaModel.carteira(1);
      
      expect(response).to.include.keys('qtdeAtivo');
    });

    it('Testa se o retorno com id 2 é um objeto', async () => {
      const response = await contaModel.carteira(2);

      expect(response).to.be.an('object');
    });

    it('Testa se o objeto retornado com id 2 não está vazio', async () => {
      const response = await contaModel.carteira(2);

      expect(response).to.not.be.empty;
    });

    it('Testa se retorna a quantidade de ativo na carteira do cliente com id 2', async () => {
      const response = await contaModel.carteira(2);
      
      expect(response).to.include.keys('qtdeAtivo');
    });

    it('Testa se o retorno com id 3 é um objeto', async () => {
      const response = await contaModel.carteira(3);

      expect(response).to.be.an('object');
    });

    it('Testa se o objeto retornado com id 3 não está vazio', async () => {
      const response = await contaModel.carteira(3);

      expect(response).to.not.be.empty;
    });

    it('Testa se retorna a quantidade de ativo na carteira do cliente com id 3', async () => {
      const response = await contaModel.carteira(3);
      
      expect(response).to.include.keys('qtdeAtivo');
    });

    it('Testa se o retorno é um objeto caso não exista cliente com o id especifico', async () => {
      const response = await contaModel.carteira(4);

      expect(response).to.be.an('object');
    });

    it('Testa se o retorno é um objeto vazio caso não exista cliente com o id especifico', async () => {
      const response = await contaModel.carteira(4);

      expect(response).to.be.empty;
    });
  });
});