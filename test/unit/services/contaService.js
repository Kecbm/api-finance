const chai = require('chai');
const sinon = require('sinon');
const { expect } = require('chai');
const contaModel = require('../../../src/models/contaModel');
const contaService = require('../../../src/services/contaService');

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

describe('Testando o contaService', () => {
  describe('contaService.carteira', () => {
    before(() => {
      const stubModelGetById = sinon.stub(contaModel, 'carteira');
  
      stubModelGetById.onCall(0).resolves([dataCarteira[0]]);
      stubModelGetById.onCall(1).resolves([dataCarteira[0]]);
      stubModelGetById.onCall(2).resolves([dataCarteira[0]]);
      stubModelGetById.onCall(3).resolves([dataCarteira[1]]);
      stubModelGetById.onCall(4).resolves([dataCarteira[1]]);
      stubModelGetById.onCall(5).resolves([dataCarteira[1]]);
      stubModelGetById.onCall(6).resolves([dataCarteira[2]]);
      stubModelGetById.onCall(7).resolves([dataCarteira[2]]);
      stubModelGetById.onCall(8).resolves([dataCarteira[2]]);
      stubModelGetById.onCall(9).resolves([]);
      stubModelGetById.onCall(10).resolves([]);
    });
  
    after(() => {
      contaModel.carteira.restore();
    });
  
    it('Testa se o retorno para o id 1 é um array', async () => {
      const response = await contaService.carteira(1);
  
      expect(response).to.be.an('array');
    });
  
    it('Testa se o array retornado para o id 1 não está vazio', async () => {
      const response = await contaService.carteira(1);
  
      expect(response).to.not.be.empty;
    });

    it('Testa se retorna a quantidade de ativo da carteira do cliente de id 1', async () => {
      const [response] = await contaService.carteira(1);
      
      expect(response).to.have.property('qtdeAtivo');
    });

    it('Testa se o retorno para o id 2 é um array', async () => {
      const response = await contaService.carteira(2);
  
      expect(response).to.be.an('array');
    });
  
    it('Testa se o array retornado para o id 2 não está vazio', async () => {
      const response = await contaService.carteira(2);
  
      expect(response).to.not.be.empty;
    });

    it('Testa se retorna a quantidade de ativo da carteira do cliente de id 2', async () => {
      const [response] = await contaService.carteira(2);
      
      expect(response).to.have.property('qtdeAtivo');
    });

    it('Testa se o retorno para o id 3 é um array', async () => {
      const response = await contaService.carteira(3);
  
      expect(response).to.be.an('array');
    });
  
    it('Testa se o array retornado para o id 3 não está vazio', async () => {
      const response = await contaService.carteira(3);
  
      expect(response).to.not.be.empty;
    });

    it('Testa se retorna a quantidade de ativo da carteira do cliente de id 3', async () => {
      const [response] = await contaService.carteira(3);
      
      expect(response).to.have.property('qtdeAtivo');
    });

    it('Testa se o retorno para um id inválido é um array', async () => {
      const response = await contaService.carteira(4);
  
      expect(response).to.be.an('array');
    });
  
    it('Testa se o array retornado para um id inválido está vazio', async () => {
      const response = await contaService.carteira(4);
  
      expect(response).to.be.empty;
    });
  });
});