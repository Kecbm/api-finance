const sinon = require('sinon');
const { expect } = require('chai');
const contaController = require('../../../src/controllers/contaController');
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

describe('Testando o contaController', () => {
  describe('contaController.carteira', () => {

    const response = {};
    const request = {params: {id: 1}, body: {id: 1}};

    before(() => {
      request.body = {};

      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns(dataCarteira[0]);

      sinon.stub(contaService, 'carteira').resolves(true);
    });

    after(() => {
      contaService.carteira.restore();
    });

    it('Testa se retorna a quantidade do ativo 1 na carteira do cliente 1', async () => {
      await contaController.carteira(request, response);

      expect(response.status.calledWith(200)).to.be.equal(true);
    });
  });

  describe('contaController.carteira', () => {

    const response = {};
    const request = {params: {id: 1}, body: {id: 2}};

    before(() => {
      request.body = {};

      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns(dataCarteira[1]);

      sinon.stub(contaService, 'carteira').resolves(true);
    });

    after(() => {
      contaService.carteira.restore();
    });

    it('Testa se retorna a quantidade do ativo 2 na carteira do cliente 1', async () => {
      await contaController.carteira(request, response);

      expect(response.status.calledWith(200)).to.be.equal(true);
    });
  });

  describe('contaController.carteira', () => {

    const response = {};
    const request = {params: {id: 1}, body: {id: 3}};

    before(() => {
      request.body = {};

      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns(dataCarteira[2]);

      sinon.stub(contaService, 'carteira').resolves(true);
    });

    after(() => {
      contaService.carteira.restore();
    });

    it('Testa se retorna a quantidade do ativo 3 na carteira do cliente 1', async () => {
      await contaController.carteira(request, response);

      expect(response.status.calledWith(200)).to.be.equal(true);
    });
  });

  describe('contaController.carteira', () => {

    const response = {};
    const request = {params: {id: 2}, body: {id: 1}};

    before(() => {
      request.body = {};

      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns(dataCarteira[3]);

      sinon.stub(contaService, 'carteira').resolves(true);
    });

    after(() => {
      contaService.carteira.restore();
    });

    it('Testa se retorna a quantidade do ativo 1 na carteira do cliente 2', async () => {
      await contaController.carteira(request, response);

      expect(response.status.calledWith(200)).to.be.equal(true);
    });
  });

  describe('contaController.carteira', () => {

    const response = {};
    const request = {params: {id: 2}, body: {id: 2}};

    before(() => {
      request.body = {};

      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns(dataCarteira[4]);

      sinon.stub(contaService, 'carteira').resolves(true);
    });

    after(() => {
      contaService.carteira.restore();
    });

    it('Testa se retorna a quantidade do ativo 2 na carteira do cliente 2', async () => {
      await contaController.carteira(request, response);

      expect(response.status.calledWith(200)).to.be.equal(true);
    });
  });

  describe('contaController.carteira', () => {

    const response = {};
    const request = {params: {id: 2}, body: {id: 3}};

    before(() => {
      request.body = {};

      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns(dataCarteira[5]);

      sinon.stub(contaService, 'carteira').resolves(true);
    });

    after(() => {
      contaService.carteira.restore();
    });

    it('Testa se retorna a quantidade do ativo 3 na carteira do cliente 2', async () => {
      await contaController.carteira(request, response);

      expect(response.status.calledWith(200)).to.be.equal(true);
    });
  });

  describe('contaController.carteira', () => {

    const response = {};
    const request = {params: {id: 3}, body: {id: 1}};

    before(() => {
      request.body = {};

      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns(dataCarteira[6]);

      sinon.stub(contaService, 'carteira').resolves(true);
    });

    after(() => {
      contaService.carteira.restore();
    });

    it('Testa se retorna a quantidade do ativo 1 na carteira do cliente 3', async () => {
      await contaController.carteira(request, response);

      expect(response.status.calledWith(200)).to.be.equal(true);
    });
  });

  describe('contaController.carteira', () => {

    const response = {};
    const request = {params: {id: 3}, body: {id: 2}};

    before(() => {
      request.body = {};

      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns(dataCarteira[7]);

      sinon.stub(contaService, 'carteira').resolves(true);
    });

    after(() => {
      contaService.carteira.restore();
    });

    it('Testa se retorna a quantidade do ativo 2 na carteira do cliente 3', async () => {
      await contaController.carteira(request, response);

      expect(response.status.calledWith(200)).to.be.equal(true);
    });
  });

  describe('contaController.carteira', () => {

    const response = {};
    const request = {params: {id: 3}, body: {id: 3}};

    before(() => {
      request.body = {};

      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns(dataCarteira[8]);

      sinon.stub(contaService, 'carteira').resolves(true);
    });

    after(() => {
      contaService.carteira.restore();
    });

    it('Testa se retorna a quantidade do ativo 3 na carteira do cliente 3', async () => {
      await contaController.carteira(request, response);

      expect(response.status.calledWith(200)).to.be.equal(true);
    });
  });

  describe('contaController.carteira', () => {

    const response = {};
    const request = {params: {id: 4}, body: {id: 4}};

    before(() => {
      request.body = {};

      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns([]);

      sinon.stub(contaService, 'carteira').resolves(false);
    });

    after(() => {
      contaService.carteira.restore();
    });

    it('Testa o retorno quando o id do ativo e do cliente são inválidos', async () => {
      await contaController.carteira(request, response);

      expect(response.status.calledWith(200)).to.be.equal(true);
    });
  });
});