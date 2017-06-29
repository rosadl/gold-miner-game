var PositionsGolds = [];
var AnglesGolds = [];
var AnglesDiamonts = [];
var PositionsDiamonts = [];
var AnglesDynamites = [];
var PositionsDynamites = [];
function Objects() {
  this.dynamite = 0;
  this.gold = 0;
  this.diamont = 0;
  this.r = 0;
}

Objects.prototype.randomGolds = function() {
  //genera oro en la derecha
  this.gold = Math.floor((Math.random() * 5));
  for (var i = 0; i <= this.gold; i++) {
    // coordenada "distancia"
var randomDistancia = Math.floor(Math.random() * (400 - 100)) + 100;
    //coordenada "ángulo"
    var randomAngle = Math.floor(Math.random() * ((Math.PI / 2) - (-(Math.PI / 2)))) + (-(Math.PI / 2));
    if (randomAngle > Math.PI * 1 / 3 && randomAngle <= Math.PI * 1 / 2) randomAngle = (Math.PI * 1 / 3);
    if (randomAngle > Math.PI * 1 / 6 && randomAngle <= Math.PI * 1 / 3) randomAngle = (Math.PI * 1 / 6);
    if (randomAngle <= Math.PI * 1 / 6 && randomAngle > 0) randomAngle = (Math.PI * 1 / 6);
    if (randomAngle <= 0 && randomAngle >= (-Math.PI * 1 / 6)) randomAngle = (-Math.PI * 1 / 6);
    if (randomAngle < -Math.PI * 1 / 6 && randomAngle >= -Math.PI * 1 / 3) randomAngle = (-Math.PI * 1 / 3);
    if (randomAngle < -Math.PI * 1 / 3 && randomAngle >= -Math.PI * 1 / 2) randomAngle = (-Math.PI * 1 / 3);
    var randomAngleDeg = -1 * Math.ceil((randomAngle * 180 / Math.PI));
    var randomCatetoOpuesto = Math.floor((Math.tan(randomAngle)) * randomDistancia);
    var randomHipotenusa = Math.floor(Math.sqrt((randomCatetoOpuesto * randomCatetoOpuesto) + (randomDistancia * randomDistancia)));
    // if (randomCatetoOpuesto <= 550 && randomCatetoOpuesto >= -550) {
    var newGold = $('#board').append('<img class="gold" id="gold' + i + '"src="./images/pepita.png"></img>');
    $("#gold" + i).css("margin-top", randomDistancia);
    $("#gold" + i).css("margin-left", randomCatetoOpuesto);
    AnglesGolds.push(randomAngleDeg);
    PositionsGolds.push(randomHipotenusa);
    }
  // }
};

Objects.prototype.randomDiamonts = function() {
  //genera oro en la derecha
  this.diamont = Math.floor((Math.random() * 3));
  for (var i = 0; i <= this.diamont; i++) {
    // coordenada "distancia"
var randomDistancia = Math.floor(Math.random() * (400 - 100)) + 100;
    //coordenada "ángulo"
    var randomAngle = Math.floor(Math.random() * ((Math.PI / 2) - (-(Math.PI / 2)))) + (-(Math.PI / 2));
    if (randomAngle > Math.PI * 1 / 3 && randomAngle <= Math.PI * 1 / 2) randomAngle = (Math.PI * 1 / 3);
    if (randomAngle > Math.PI * 1 / 6 && randomAngle <= Math.PI * 1 / 3) randomAngle = (Math.PI * 1 / 6);
    if (randomAngle <= Math.PI * 1 / 6 && randomAngle > 0) randomAngle = (Math.PI * 1 / 6);
    if (randomAngle <= 0 && randomAngle >= (-Math.PI * 1 / 6)) randomAngle = (-Math.PI * 1 / 6);
    if (randomAngle < -Math.PI * 1 / 6 && randomAngle >= -Math.PI * 1 / 3) randomAngle = (-Math.PI * 1 / 3);
    if (randomAngle < -Math.PI * 1 / 3 && randomAngle >= -Math.PI * 1 / 2) randomAngle = (-Math.PI * 1 / 3);
    var randomAngleDeg = -1 * Math.ceil((randomAngle * 180 / Math.PI));
    var randomCatetoOpuesto = Math.floor((Math.tan(randomAngle)) * randomDistancia);
    var randomHipotenusa = Math.floor(Math.sqrt((randomCatetoOpuesto * randomCatetoOpuesto) + (randomDistancia * randomDistancia)));
    // if (randomCatetoOpuesto <= 550 && randomCatetoOpuesto >= -550) {
    var newDiamont = $('#board').append('<img class="diamont" id="diamont' + i + '"src="./images/diamond.png"></img>');
    $("#diamont" + i).css("margin-top", randomDistancia);
    $("#diamont" + i).css("margin-left", randomCatetoOpuesto);
    AnglesDiamonts.push(randomAngleDeg);
    PositionsDiamonts.push(randomHipotenusa);
    }
  // }
};

Objects.prototype.randomDynamite = function() {
  //genera oro en la derecha
  this.dynamite = Math.floor((Math.random() * 5));
  for (var i = 0; i <= this.dynamite; i++) {
    // coordenada "distancia"
var randomDistancia = Math.floor(Math.random() * (400 - 100)) + 100;
    //coordenada "ángulo"
    var randomAngle = Math.floor(Math.random() * ((Math.PI / 2) - (-(Math.PI / 2)))) + (-(Math.PI / 2));
    if (randomAngle > Math.PI * 1 / 3 && randomAngle <= Math.PI * 1 / 2) randomAngle = (Math.PI * 1 / 3);
    if (randomAngle > Math.PI * 1 / 6 && randomAngle <= Math.PI * 1 / 3) randomAngle = (Math.PI * 1 / 6);
    if (randomAngle <= Math.PI * 1 / 6 && randomAngle > 0) randomAngle = (Math.PI * 1 / 6);
    if (randomAngle <= 0 && randomAngle >= (-Math.PI * 1 / 6)) randomAngle = (-Math.PI * 1 / 6);
    if (randomAngle < -Math.PI * 1 / 6 && randomAngle >= -Math.PI * 1 / 3) randomAngle = (-Math.PI * 1 / 3);
    if (randomAngle < -Math.PI * 1 / 3 && randomAngle >= -Math.PI * 1 / 2) randomAngle = (-Math.PI * 1 / 3);
    var randomAngleDeg = -1 * Math.ceil((randomAngle * 180 / Math.PI));
    var randomCatetoOpuesto = Math.floor((Math.tan(randomAngle)) * randomDistancia);
    var randomHipotenusa = Math.floor(Math.sqrt((randomCatetoOpuesto * randomCatetoOpuesto) + (randomDistancia * randomDistancia)));
    // if (randomCatetoOpuesto <= 550 && randomCatetoOpuesto >= -550) {
    var newDynamite = $('#board').append('<img class="dynamite" id="dynamite' + i + '"src="./images/dynamite.png"></img>');
    $("#dynamite" + i).css("margin-top", randomDistancia);
    $("#dynamite" + i).css("margin-left", randomCatetoOpuesto);
    AnglesDynamites.push(randomAngleDeg);
    PositionsDynamites.push(randomHipotenusa);
    }
  // }
};
