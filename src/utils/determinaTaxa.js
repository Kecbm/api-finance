const taxaCompra = (qtdeAtivo, valorAtivo) => {
  const taxa = (qtdeAtivo * 0.02) * valorAtivo;

  return taxa;
}

module.exports = taxaCompra;