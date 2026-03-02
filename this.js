const contador = {
  valor: 0,
  incrementar: function() {
    // use function tradicional aqui
    setTimeout(function() {
      // use arrow function aqui
      this.valor++;
      console.log(this.valor);
    }, 1000);
  }
};

contador.incrementar();