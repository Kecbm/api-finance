const chai = require('chai');
const sinon = require('sinon');
const { expect } = require('chai');
const ativoModel = require('../../../src/models/ativoModel');
const ativoService = require('../../../src/services/ativoService');

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

describe('Testando o ativoService', () => {
  describe('ativoService.quantity', () => {
    before(() => {
      const stubModelGetById = sinon.stub(ativoModel, 'quantity');
  
      stubModelGetById.onCall(0).resolves([dataAtivos[0]]);
      stubModelGetById.onCall(1).resolves([dataAtivos[0]]);
      stubModelGetById.onCall(2).resolves([dataAtivos[0]]);
      stubModelGetById.onCall(3).resolves([dataAtivos[1]]);
      stubModelGetById.onCall(4).resolves([dataAtivos[1]]);
      stubModelGetById.onCall(5).resolves([dataAtivos[1]]);
      stubModelGetById.onCall(6).resolves([dataAtivos[2]]);
      stubModelGetById.onCall(7).resolves([dataAtivos[2]]);
      stubModelGetById.onCall(8).resolves([dataAtivos[2]]);
      stubModelGetById.onCall(9).resolves([]);
      stubModelGetById.onCall(10).resolves([]);
    });
  
    after(() => {
      ativoModel.quantity.restore();
    });
  
    it('Testa se o retorno para o id 1 é um array', async () => {
      const response = await ativoService.quantity(1);
  
      expect(response).to.be.an('array');
    });
  
    it('Testa se o array retornado para o id 1 não está vazio', async () => {
      const response = await ativoService.quantity(1);
  
      expect(response).to.not.be.empty;
    });

    it('Testa se retorna a quantidade do ativo com id 1', async () => {
      const [response] = await ativoService.quantity(1);
      
      expect(response).to.have.property('qtdeAtivo');
    });

    it('Testa se o retorno para o id 2 é um array', async () => {
      const response = await ativoService.quantity(2);
  
      expect(response).to.be.an('array');
    });
  
    it('Testa se o array retornado para o id 2 não está vazio', async () => {
      const response = await ativoService.quantity(2);
  
      expect(response).to.not.be.empty;
    });

    it('Testa se retorna a quantidade do ativo com id 2', async () => {
      const [response] = await ativoService.quantity(2);
      
      expect(response).to.have.property('qtdeAtivo');
    });

    it('Testa se o retorno para o id 3 é um array', async () => {
      const response = await ativoService.quantity(3);
  
      expect(response).to.be.an('array');
    });
  
    it('Testa se o array retornado para o id 3 não está vazio', async () => {
      const response = await ativoService.quantity(3);
  
      expect(response).to.not.be.empty;
    });

    it('Testa se retorna a quantidade do ativo com id 3', async () => {
      const [response] = await ativoService.quantity(3);
      
      expect(response).to.have.property('qtdeAtivo');
    });

    it('Testa se o retorno para um id inválido é um array', async () => {
      const response = await ativoService.quantity(4);
  
      expect(response).to.be.an('array');
    });
  
    it('Testa se o array retornado para um id inválido está vazio', async () => {
      const response = await ativoService.quantity(4);
  
      expect(response).to.be.empty;
    });
  });

  describe('ativoService.carteira', () => {
    before(() => {
      const stubModelGetById = sinon.stub(ativoModel, 'carteira');
  
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
      ativoModel.carteira.restore();
    });
  
    it('Testa se o retorno para o id 1 é um array', async () => {
      const response = await ativoService.carteira(1);
  
      expect(response).to.be.an('array');
    });
  
    it('Testa se o array retornado para o id 1 não está vazio', async () => {
      const response = await ativoService.carteira(1);
  
      expect(response).to.not.be.empty;
    });

    it('Testa se retorna a quantidade de ativo da carteira do cliente de id 1', async () => {
      const [response] = await ativoService.carteira(1);
      
      expect(response).to.have.property('qtdeAtivo');
    });

    it('Testa se o retorno para o id 2 é um array', async () => {
      const response = await ativoService.carteira(2);
  
      expect(response).to.be.an('array');
    });
  
    it('Testa se o array retornado para o id 2 não está vazio', async () => {
      const response = await ativoService.carteira(2);
  
      expect(response).to.not.be.empty;
    });

    it('Testa se retorna a quantidade de ativo da carteira do cliente de id 2', async () => {
      const [response] = await ativoService.carteira(2);
      
      expect(response).to.have.property('qtdeAtivo');
    });

    it('Testa se o retorno para o id 3 é um array', async () => {
      const response = await ativoService.carteira(3);
  
      expect(response).to.be.an('array');
    });
  
    it('Testa se o array retornado para o id 3 não está vazio', async () => {
      const response = await ativoService.carteira(3);
  
      expect(response).to.not.be.empty;
    });

    it('Testa se retorna a quantidade de ativo da carteira do cliente de id 3', async () => {
      const [response] = await ativoService.carteira(3);
      
      expect(response).to.have.property('qtdeAtivo');
    });

    it('Testa se o retorno para um id inválido é um array', async () => {
      const response = await ativoService.carteira(4);
  
      expect(response).to.be.an('array');
    });
  
    it('Testa se o array retornado para um id inválido está vazio', async () => {
      const response = await ativoService.carteira(4);
  
      expect(response).to.be.empty;
    });
  });

  describe('ativoService.getByAssets', () => {
    before(() => {
      const stubModelGetById = sinon.stub(ativoModel, 'getByAssets');
  
      stubModelGetById.onCall(0).resolves([dataAssets[0]]);
      stubModelGetById.onCall(1).resolves([dataAssets[0]]);
      stubModelGetById.onCall(2).resolves([dataAssets[0]]);
      stubModelGetById.onCall(3).resolves([dataAssets[1]]);
      stubModelGetById.onCall(4).resolves([dataAssets[1]]);
      stubModelGetById.onCall(5).resolves([dataAssets[1]]);
      stubModelGetById.onCall(6).resolves([dataAssets[2]]);
      stubModelGetById.onCall(7).resolves([dataAssets[2]]);
      stubModelGetById.onCall(8).resolves([dataAssets[2]]);
      stubModelGetById.onCall(9).resolves([]);
      stubModelGetById.onCall(10).resolves([]);
    });
  
    after(() => {
      ativoModel.getByAssets.restore();
    });
  
    it('Testa se o retorno para o id 1 é um array', async () => {
      const response = await ativoService.getByAssets(1);
  
      expect(response).to.be.an('array');
    });
  
    it('Testa se o array retornado para o id 1 não está vazio', async () => {
      const response = await ativoService.getByAssets(1);
  
      expect(response).to.not.be.empty;
    });

    it('Testa se retorna as informações do ativo com id 1', async () => {
      const [response] = await ativoService.getByAssets(1);
      
      expect(response).to.include.all.keys('CodAtivo', 'Valor', 'QtdeAtivo');
    });

    it('Testa se o retorno para o id 2 é um array', async () => {
      const response = await ativoService.getByAssets(2);
  
      expect(response).to.be.an('array');
    });
  
    it('Testa se o array retornado para o id 2 não está vazio', async () => {
      const response = await ativoService.getByAssets(2);
  
      expect(response).to.not.be.empty;
    });

    it('Testa se retorna as informações do ativo com id 2', async () => {
      const [response] = await ativoService.getByAssets(2);
      
      expect(response).to.include.all.keys('CodAtivo', 'Valor', 'QtdeAtivo');
    });

    it('Testa se o retorno para o id 3 é um array', async () => {
      const response = await ativoService.getByAssets(3);
  
      expect(response).to.be.an('array');
    });
  
    it('Testa se o array retornado para o id 3 não está vazio', async () => {
      const response = await ativoService.getByAssets(3);
  
      expect(response).to.not.be.empty;
    });

    it('Testa se retorna as informações do ativo com id 3', async () => {
      const [response] = await ativoService.getByAssets(3);
      
      expect(response).to.include.all.keys('CodAtivo', 'Valor', 'QtdeAtivo');
    });

    it('Testa se o retorno para um id inválido é um array', async () => {
      const response = await ativoService.getByAssets(4);
  
      expect(response).to.be.an('array');
    });
  
    it('Testa se o array retornado para um id inválido está vazio', async () => {
      const response = await ativoService.getByAssets(4);
  
      expect(response).to.be.empty;
    });
  });

});