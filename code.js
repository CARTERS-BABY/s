hideElement("esquerda");
hideElement("direita");
hideElement("cima");
hideElement("baixo");
onEvent("botao1", "click", function( ) {
  if (getNumber("entrada_de_texto1") == 2) {
    timedLoop(500, function() {
      hideElement("esquerda");
      hideElement("direita");
      var x = randomNumber(1, 2);
      setText("rotulo1", x);
      if (x == 1) {
        showElement("direita");
      }
      if (x == 2) {
        showElement("esquerda");
      }
    });
    timedLoop(5000, function() {
      stopTimedLoop();
    });
  }
  if (getNumber("entrada_de_texto1") == 4) {
    timedLoop(500, function() {
      hideElement("esquerda");
      hideElement("direita");
      hideElement("baixo");
      hideElement("cima");
      var x = randomNumber(1, 4);
      setText("rotulo1", x);
      if (x == 1) {
        showElement("direita");
      }
      if (x == 2) {
        showElement("esquerda");
      } else if ((x == 3)) {
        showElement("cima");
      } else if ((x == 4)) {
        showElement("baixo");
      }
    });
    timedLoop(5000, function() {
      stopTimedLoop();
    });
  }
});
