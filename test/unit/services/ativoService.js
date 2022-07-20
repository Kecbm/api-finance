const chai = require('chai');
const sinon = require('sinon');
const { expect } = require('chai');
const ativoModel = require('../../../models/ativoModel');
const ativoService = require('../../../services/ativoService');

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

describe('Testando o ativoModel', () => {
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
});