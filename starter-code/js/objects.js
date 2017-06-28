var arrayPositions = [];
var arrayAngles = [];

function Objects() {
  this.bomb = 0;
  this.gold = 0;
  this.diamont = 0;
  this.r = 0;
}

Objects.prototype.randomObjectsRight = function() {
  //genera oro en la derecha
  this.gold = Math.floor((Math.random() * 4));
  for (var i = 0; i <= this.gold; i++) {
    // coordenada "distancia"
    var randomDistancia = Math.floor(Math.random() * 400);
    //coordenada "ángulo"
    var randomAngle = Math.floor(Math.random() * (Math.PI / 2));
    if (randomAngle <= Math.PI * 1 / 6) randomAngle =(Math.PI * 1 / 6);
    if (randomAngle > Math.PI * 1 / 6 && randomAngle <= Math.PI * 1 / 3) randomAngle =(Math.PI * 1 / 3);
    if (randomAngle > Math.PI * 1 / 3 && randomAngle <= Math.PI * 1 / 2) randomAngle =(Math.PI * 1 / 3);
    var randomAngleDeg =-1* Math.ceil((randomAngle * 180 / Math.PI));
    var randomCatetoOpuesto = (Math.tan(randomAngle)) * randomDistancia;
    var randomHipotenusa = Math.floor (Math.sqrt((randomCatetoOpuesto * randomCatetoOpuesto) + (randomDistancia * randomDistancia)));
    if (randomCatetoOpuesto <= 550 && randomCatetoOpuesto > 0) {
      var newGold = $('#board').append('<img class="gold" id="gold' + i + '"src="./images/gold.png"></img>');
      $("#gold" + i).css("margin-top", randomDistancia);
      $("#gold" + i).css("margin-left", randomCatetoOpuesto);
      // arrayPositions.push({angle: randomAngleDeg, longitude: randomHipotenusa})
      arrayPositions.push(randomHipotenusa);
      arrayAngles.push(randomAngleDeg);
    }
  }

};

Objects.prototype.randomObjectsLeft = function() {
  //genera oro en la izqueirda
  this.gold = Math.floor((Math.random() * 4));
  for (var i = 0; i <= this.gold; i++) {
    // coordenada "distancia"
    var randomDistancia = Math.floor(Math.random() * 400);
    //coordenada "ángulo"
    var randomAngle = Math.floor(Math.random() * (-Math.PI / 2));
    if (randomAngle >= -Math.PI * 1 / 6) randomAngle =(-Math.PI * 1 / 6);
    if (randomAngle < -Math.PI * 1 / 6 && randomAngle >= -Math.PI * 1 / 3) randomAngle =(-Math.PI * 1 / 3);
    if (randomAngle < -Math.PI * 1 / 3 && randomAngle >= -Math.PI * 1 / 2) randomAngle =(-Math.PI * 1 / 3);
    var randomAngleDeg =-1*Math.floor((randomAngle * 180 / Math.PI));
    var randomCatetoOpuesto = (Math.tan(randomAngle)) * randomDistancia;
    var randomHipotenusa = Math.floor (Math.sqrt((randomCatetoOpuesto * randomCatetoOpuesto) + (randomDistancia * randomDistancia)));
    if (randomCatetoOpuesto >= -550 && randomCatetoOpuesto < 0) {
      var newGold = $('#board').append('<img class="gold" id="gold' + i + '"src="./images/gold.png"></img>');
      $("#gold" + i).css("margin-top", randomDistancia);
      $("#gold" + i).css("margin-left", randomCatetoOpuesto);
      arrayPositions.push(randomHipotenusa);
      arrayAngles.push(randomAngleDeg);
      console.log(arrayPositions);
      console.log(arrayAngles);
    }
  }
};
