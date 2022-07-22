const taxaCompra = (qtdeAtivo, valorAtivo) => {
  const taxa = (qtdeAtivo * 0.02) * valorAtivo;

  return taxa;
};

const taxaVenda = (qtdeAtivo) => {
  const taxa = (qtdeAtivo * 3.50);

  return taxa;
}

module.exports = {
  taxaCompra,
  taxaVenda,
};