const sinon = require('sinon');
const { expect } = require('chai');
const connection = require('../../db');
const ativoModel = require('../../models/ativoModel');

const dataAtivos = [
  {
    codAtivo: 1,
    nameAtivo: 'SPMKT3 - Supermercado',
    valor: 50,
    qtdeAtivo: 100,
  },
  {
    codAtivo: 2,
    nameAtivo: 'PET4 - Petshop',
    valor: 25,
    qtdeAtivo: 100,
  },
  {
    codAtivo: 3,
    nameAtivo: 'POST3 - Posto de combustível',
    valor: 100,
    qtdeAtivo: 100,
  },
];

const dataAssets = [
  {
    CodAtivo: 1,
    Valor: 50,
    QtdeAtivo: 100,
  },
  {
    CodAtivo: 2,
    Valor: 25,
    QtdeAtivo: 100,
  },
  {
    CodAtivo: 3,
    Valor: 100,
    QtdeAtivo: 100,
  },
];

describe('Testando o ativoModel', () => {
  describe('ativoModel.quantity', () => {
    before(() => {
      const stubConnectionExecute = sinon.stub(connection, 'execute').resolves(dataAtivos);

      stubConnectionExecute.onCall(0).resolves([dataAtivos[0]]);
      stubConnectionExecute.onCall(1).resolves([dataAtivos[0]]);
      stubConnectionExecute.onCall(2).resolves([dataAtivos[0]]);
      stubConnectionExecute.onCall(3).resolves([dataAtivos[1]]);
      stubConnectionExecute.onCall(4).resolves([dataAtivos[1]]);
      stubConnectionExecute.onCall(5).resolves([dataAtivos[1]]);
      stubConnectionExecute.onCall(6).resolves([dataAtivos[2]]);
      stubConnectionExecute.onCall(6).resolves([dataAtivos[2]]);
      stubConnectionExecute.onCall(8).resolves([dataAtivos[2]]);
      stubConnectionExecute.onCall(9).resolves([{}]);
      stubConnectionExecute.onCall(10).resolves([{}]);
    });

    after(() => {
      connection.execute.restore();
    });

    it('Testa se o retorno com id 1 é um objeto', async () => {
      const response = await ativoModel.quantity(1);

      expect(response).to.be.an('object');
    });

    it('Testa se o objeto retornado com id 1 não está vazio', async () => {
      const response = await ativoModel.quantity(1);

      expect(response).to.not.be.empty;
    });

    it('Testa se retorna a quantidade do ativo com id 1', async () => {
      const response = await ativoModel.quantity(1);
      
      expect(response).to.include.keys('qtdeAtivo');
    });

    it('Testa se o retorno com id 2 é um objeto', async () => {
      const response = await ativoModel.quantity(2);
  
      expect(response).to.be.an('object');
    });

    it('Testa se o objeto retornado com id 2 não está vazio', async () => {
      const response = await ativoModel.quantity(2);

      expect(response).to.not.be.empty;
    });

    it('Testa se retorna a quantidade do ativo com id 2', async () => {
      const response = await ativoModel.quantity(2);
      
      expect(response).to.include.keys('qtdeAtivo');
    });

    it('Testa se o retorno com id 3 é um objeto', async () => {
      const response = await ativoModel.quantity(3);
  
      expect(response).to.be.an('object');
    });

    it('Testa se o objeto retornado com id 3 não está vazio', async () => {
      const response = await ativoModel.quantity(3);

      expect(response).to.not.be.empty;
    });

    it('Testa se retorna a quantidade do ativo com id 3', async () => {
      const response = await ativoModel.quantity(3);
      
      expect(response).to.include.keys('qtdeAtivo');
    });

    it('Testa se o retorno é um objeto caso não exista ação com o id especifico', async () => {
      const response = await ativoModel.quantity(4);

      expect(response).to.be.an('object');
    });

    it('Testa se o retorno é um objeto vazio caso não exista ação com o id especifico', async () => {
      const response = await ativoModel.quantity(4);

      expect(response).to.be.empty;
    });
  });

  describe('ativoModel.carteira', () => {
    before(() => {
      const stubConnectionExecute = sinon.stub(connection, 'execute').resolves(dataAtivos);

      stubConnectionExecute.onCall(0).resolves([dataAtivos[0]]);
      stubConnectionExecute.onCall(1).resolves([dataAtivos[0]]);
      stubConnectionExecute.onCall(2).resolves([dataAtivos[0]]);
      stubConnectionExecute.onCall(3).resolves([dataAtivos[1]]);
      stubConnectionExecute.onCall(4).resolves([dataAtivos[1]]);
      stubConnectionExecute.onCall(5).resolves([dataAtivos[1]]);
      stubConnectionExecute.onCall(6).resolves([dataAtivos[2]]);
      stubConnectionExecute.onCall(7).resolves([dataAtivos[2]]);
      stubConnectionExecute.onCall(8).resolves([dataAtivos[2]]);
      stubConnectionExecute.onCall(9).resolves([{}]);
      stubConnectionExecute.onCall(10).resolves([{}]);
    });

    after(() => {
      connection.execute.restore();
    });

    it('Testa se o retorno com id 1 é um objeto', async () => {
      const response = await ativoModel.carteira(1);
  
      expect(response).to.be.an('object');
    });

    it('Testa se o objeto retornado com id 1 não está vazio', async () => {
      const response = await ativoModel.carteira(1);

      expect(response).to.not.be.empty;
    });

    it('Testa se retorna a quantidade de ativo na carteira do cliente com id 1', async () => {
      const response = await ativoModel.carteira(1);
      
      expect(response).to.include.keys('qtdeAtivo');
    });

    it('Testa se o retorno com id 2 é um objeto', async () => {
      const response = await ativoModel.carteira(2);
  
      expect(response).to.be.an('object');
    });

    it('Testa se o objeto retornado com id 2 não está vazio', async () => {
      const response = await ativoModel.carteira(2);

      expect(response).to.not.be.empty;
    });

    it('Testa se retorna a quantidade de ativo na carteira do cliente com id 2', async () => {
      const response = await ativoModel.carteira(2);
      
      expect(response).to.include.keys('qtdeAtivo');
    });

    it('Testa se o retorno com id 3 é um objeto', async () => {
      const response = await ativoModel.carteira(3);
  
      expect(response).to.be.an('object');
    });

    it('Testa se o objeto retornado com id 3 não está vazio', async () => {
      const response = await ativoModel.carteira(3);

      expect(response).to.not.be.empty;
    });

    it('Testa se retorna a quantidade de ativo na carteira do cliente com id 3', async () => {
      const response = await ativoModel.carteira(3);
      
      expect(response).to.include.keys('qtdeAtivo');
    });

    it('Testa se o retorno é um objeto caso não exista cliente com o id especifico', async () => {
      const response = await ativoModel.carteira(4);

      expect(response).to.be.an('object');
    });

    it('Testa se o retorno é um objeto vazio caso não exista cliente com o id especifico', async () => {
      const response = await ativoModel.carteira(4);

      expect(response).to.be.empty;
    });
  });

  describe('ativoModel.getByAssets', () => {
    before(() => {
      const stubConnectionExecute = sinon.stub(connection, 'execute').resolves(dataAssets);

      stubConnectionExecute.onCall(0).resolves([dataAssets[0]]);
      stubConnectionExecute.onCall(1).resolves([dataAssets[0]]);
      stubConnectionExecute.onCall(2).resolves([dataAssets[0]]);
      stubConnectionExecute.onCall(3).resolves([dataAssets[1]]);
      stubConnectionExecute.onCall(4).resolves([dataAssets[1]]);
      stubConnectionExecute.onCall(5).resolves([dataAssets[1]]);
      stubConnectionExecute.onCall(6).resolves([dataAssets[2]]);
      stubConnectionExecute.onCall(7).resolves([dataAssets[2]]);
      stubConnectionExecute.onCall(8).resolves([dataAssets[2]]);
      stubConnectionExecute.onCall(9).resolves([{}]);
      stubConnectionExecute.onCall(10).resolves([{}]);
    });

    after(() => {
      connection.execute.restore();
    });

    it('Testa se o retorno com id 1 é um objeto', async () => {
      const response = await ativoModel.getByAssets(1);
  
      expect(response).to.be.an('object');
    });

    it('Testa se o objeto retornado com id 1 não está vazio', async () => {
      const response = await ativoModel.getByAssets(1);

      expect(response).to.not.be.empty;
    });

    it('Testa se retorna as informações do ativo com id 1', async () => {
      const response = await ativoModel.getByAssets(1);
      
      expect(response).to.include.all.keys('CodAtivo', 'Valor', 'QtdeAtivo' );
    });

    it('Testa se o retorno com id 2 é um objeto', async () => {
      const response = await ativoModel.getByAssets(2);
  
      expect(response).to.be.an('object');
    });

    it('Testa se o objeto retornado com id 2 não está vazio', async () => {
      const response = await ativoModel.getByAssets(2);

      expect(response).to.not.be.empty;
    });

    it('Testa se retorna as informações do ativo com id 2', async () => {
      const response = await ativoModel.getByAssets(2);
      
      expect(response).to.include.all.keys('CodAtivo', 'Valor', 'QtdeAtivo' );
    });

    it('Testa se o retorno com id 3 é um objeto', async () => {
      const response = await ativoModel.getByAssets(3);
  
      expect(response).to.be.an('object');
    });

    it('Testa se o objeto retornado com id 3 não está vazio', async () => {
      const response = await ativoModel.getByAssets(3);

      expect(response).to.not.be.empty;
    });

    it('Testa se retorna as informações do ativo com id 3', async () => {
      const response = await ativoModel.getByAssets(3);
      
      expect(response).to.include.all.keys('CodAtivo', 'Valor', 'QtdeAtivo' );
    });

    it('Testa se o retorno é um objeto caso não exista ativo com o id especifico', async () => {
      const response = await ativoModel.getByAssets(4);

      expect(response).to.be.an('object');
    });

    it('Testa se o retorno é um objeto vazio caso não exista ativo com o id especifico', async () => {
      const response = await ativoModel.getByAssets(4);

      expect(response).to.be.empty;
    });
  });
});