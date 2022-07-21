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

  describe('ativoController.carteira', () => {

    const response = {};
    const request = {params: {id: 1}, body: {id: 1}};

    before(() => {
      request.body = {};

      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns(dataCarteira[0]);

      sinon.stub(ativoService, 'carteira').resolves(true);
    });

    after(() => {
      ativoService.carteira.restore();
    });

    it('Testa se retorna a quantidade do ativo 1 na carteira do cliente 1', async () => {
      await ativoController.carteira(request, response);

      expect(response.status.calledWith(200)).to.be.equal(true);
    });
  });

  describe('ativoController.carteira', () => {

    const response = {};
    const request = {params: {id: 1}, body: {id: 2}};

    before(() => {
      request.body = {};

      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns(dataCarteira[1]);

      sinon.stub(ativoService, 'carteira').resolves(true);
    });

    after(() => {
      ativoService.carteira.restore();
    });

    it('Testa se retorna a quantidade do ativo 2 na carteira do cliente 1', async () => {
      await ativoController.carteira(request, response);

      expect(response.status.calledWith(200)).to.be.equal(true);
    });
  });

  describe('ativoController.carteira', () => {

    const response = {};
    const request = {params: {id: 1}, body: {id: 3}};

    before(() => {
      request.body = {};

      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns(dataCarteira[2]);

      sinon.stub(ativoService, 'carteira').resolves(true);
    });

    after(() => {
      ativoService.carteira.restore();
    });

    it('Testa se retorna a quantidade do ativo 3 na carteira do cliente 1', async () => {
      await ativoController.carteira(request, response);

      expect(response.status.calledWith(200)).to.be.equal(true);
    });
  });

  describe('ativoController.carteira', () => {

    const response = {};
    const request = {params: {id: 2}, body: {id: 1}};

    before(() => {
      request.body = {};

      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns(dataCarteira[3]);

      sinon.stub(ativoService, 'carteira').resolves(true);
    });

    after(() => {
      ativoService.carteira.restore();
    });

    it('Testa se retorna a quantidade do ativo 1 na carteira do cliente 2', async () => {
      await ativoController.carteira(request, response);

      expect(response.status.calledWith(200)).to.be.equal(true);
    });
  });

  describe('ativoController.carteira', () => {

    const response = {};
    const request = {params: {id: 2}, body: {id: 2}};

    before(() => {
      request.body = {};

      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns(dataCarteira[4]);

      sinon.stub(ativoService, 'carteira').resolves(true);
    });

    after(() => {
      ativoService.carteira.restore();
    });

    it('Testa se retorna a quantidade do ativo 2 na carteira do cliente 2', async () => {
      await ativoController.carteira(request, response);

      expect(response.status.calledWith(200)).to.be.equal(true);
    });
  });

  describe('ativoController.carteira', () => {

    const response = {};
    const request = {params: {id: 2}, body: {id: 3}};

    before(() => {
      request.body = {};

      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns(dataCarteira[5]);

      sinon.stub(ativoService, 'carteira').resolves(true);
    });

    after(() => {
      ativoService.carteira.restore();
    });

    it('Testa se retorna a quantidade do ativo 3 na carteira do cliente 2', async () => {
      await ativoController.carteira(request, response);

      expect(response.status.calledWith(200)).to.be.equal(true);
    });
  });

  describe('ativoController.carteira', () => {

    const response = {};
    const request = {params: {id: 3}, body: {id: 1}};

    before(() => {
      request.body = {};

      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns(dataCarteira[6]);

      sinon.stub(ativoService, 'carteira').resolves(true);
    });

    after(() => {
      ativoService.carteira.restore();
    });

    it('Testa se retorna a quantidade do ativo 1 na carteira do cliente 3', async () => {
      await ativoController.carteira(request, response);

      expect(response.status.calledWith(200)).to.be.equal(true);
    });
  });

  describe('ativoController.carteira', () => {

    const response = {};
    const request = {params: {id: 3}, body: {id: 2}};

    before(() => {
      request.body = {};

      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns(dataCarteira[7]);

      sinon.stub(ativoService, 'carteira').resolves(true);
    });

    after(() => {
      ativoService.carteira.restore();
    });

    it('Testa se retorna a quantidade do ativo 2 na carteira do cliente 3', async () => {
      await ativoController.carteira(request, response);

      expect(response.status.calledWith(200)).to.be.equal(true);
    });
  });

  describe('ativoController.carteira', () => {

    const response = {};
    const request = {params: {id: 3}, body: {id: 3}};

    before(() => {
      request.body = {};

      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns(dataCarteira[8]);

      sinon.stub(ativoService, 'carteira').resolves(true);
    });

    after(() => {
      ativoService.carteira.restore();
    });

    it('Testa se retorna a quantidade do ativo 3 na carteira do cliente 3', async () => {
      await ativoController.carteira(request, response);

      expect(response.status.calledWith(200)).to.be.equal(true);
    });
  });

  describe('ativoController.carteira', () => {

    const response = {};
    const request = {params: {id: 4}, body: {id: 4}};

    before(() => {
      request.body = {};

      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns([]);

      sinon.stub(ativoService, 'carteira').resolves(false);
    });

    after(() => {
      ativoService.carteira.restore();
    });

    it('Testa o retorno quando o id do ativo e do cliente são inválidos', async () => {
      await ativoController.carteira(request, response);

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