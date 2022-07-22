const sinon = require('sinon');
const { expect } = require('chai');
const ativoController = require('../../../src/controllers/ativoController');
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

describe('Testando o ativoController', () => {
  describe('ativoController.quantity', () => {

    const response = {};
    const request = {params: {id: 1}};

    before(() => {
      request.body = {};

      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns(dataAtivos[0]);

      sinon.stub(ativoService, 'quantity').resolves(true);
    });

    after(() => {
      ativoService.quantity.restore();
    });

    it('Testa se retorna a quantidade do ativo com id 1', async () => {
      await ativoController.quantity(request, response);

      expect(response.status.calledWith(200)).to.be.equal(true);
    });
  });

  describe('ativoController.quantity', () => {

    const response = {};
    const request = {params: {id: 2}};

    before(() => {
      request.body = {};

      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns(dataAtivos[1]);

      sinon.stub(ativoService, 'quantity').resolves(true);
    });

    after(() => {
      ativoService.quantity.restore();
    });

    it('Testa se retorna a quantidade do ativo com id 2', async () => {
      await ativoController.quantity(request, response);

      expect(response.status.calledWith(200)).to.be.equal(true);
    });
  });

  describe('ativoController.quantity', () => {

    const response = {};
    const request = {params: {id: 3}};

    before(() => {
      request.body = {};

      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns(dataAtivos[2]);

      sinon.stub(ativoService, 'quantity').resolves(true);
    });

    after(() => {
      ativoService.quantity.restore();
    });

    it('Testa se retorna a quantidade do ativo com id 3', async () => {
      await ativoController.quantity(request, response);

      expect(response.status.calledWith(200)).to.be.equal(true);
    });
  });

  describe('ativoController.quantity', () => {
    const response = {};
    const request = {params: {id: 4}};

    before(() => {
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns([]);

      sinon.stub(ativoService, 'quantity').resolves(false);
    });

    after(() => {
      ativoService.quantity.restore();
    });

    it('Testa quando o id é inválido', async () => {
      await ativoController.quantity(request, response);

      expect(response.status.calledWith(200)).to.be.equal(true);
    });
  });

  describe('ativoController.getByAssets', () => {

    const response = {};
    const request = {params: {id: 1}};

    before(() => {
      request.body = {};

      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns(dataAssets[0]);

      sinon.stub(ativoService, 'getByAssets').resolves(true);
    });

    after(() => {
      ativoService.getByAssets.restore();
    });

    it('Testa se retorna as informações do ativo com id 1', async () => {
      await ativoController.getByAssets(request, response);

      expect(response.status.calledWith(200)).to.be.equal(true);
    });
  });

  describe('ativoController.getByAssets', () => {

    const response = {};
    const request = {params: {id: 2}};

    before(() => {
      request.body = {};

      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns(dataAssets[1]);

      sinon.stub(ativoService, 'getByAssets').resolves(true);
    });

    after(() => {
      ativoService.getByAssets.restore();
    });

    it('Testa se retorna as informações do ativo com id 2', async () => {
      await ativoController.getByAssets(request, response);

      expect(response.status.calledWith(200)).to.be.equal(true);
    });
  });

  describe('ativoController.getByAssets', () => {

    const response = {};
    const request = {params: {id: 3}};

    before(() => {
      request.body = {};

      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns(dataAssets[2]);

      sinon.stub(ativoService, 'getByAssets').resolves(true);
    });

    after(() => {
      ativoService.getByAssets.restore();
    });

    it('Testa se retorna as informações do ativo com id 3', async () => {
      await ativoController.getByAssets(request, response);

      expect(response.status.calledWith(200)).to.be.equal(true);
    });
  });

  describe('ativoController.getByAssets', () => {

    const response = {};
    const request = {params: {id: 4}};

    before(() => {
      request.body = {};

      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns([]);

      sinon.stub(ativoService, 'getByAssets').resolves(false);
    });

    after(() => {
      ativoService.getByAssets.restore();
    });

    it('Testa o retorno com id inválido', async () => {
      await ativoController.getByAssets(request, response);

      expect(response.status.calledWith(200)).to.be.equal(true);
    });
  });
});