function Selector() {
  this.grade = 0;
  this.direction = 1;
  this.grow = 50;
  this.points = 0;
  this.timer = 0;
  var intervalGrade;
  var intervalGrow;
  var intervalRestart;
  var intervalDropGold;
  var i = 0;
}

Selector.prototype.moveSelector = function() {
  var that = this;
  intervalGrade = setInterval(function() {
    switch (that.direction) {
      case 1:
        that.grade += 1;
        $("#selector").css("transform", "rotate(" + parseInt(that.grade) + "deg)");
        console.log(that.grade);
        if (that.grade > 80) {
          that.direction = 2;
        }
        break;
      case 2:
        that.grade -= 1;
        $("#selector").css("transform", "rotate(" + parseInt(that.grade) + "deg)");
        console.log(that.grade);
        if (that.grade < -80) {
          that.direction = 1;
        }
        break;
    }
  }, 20);
};


Selector.prototype.stop = function() {

  function stopSelector(event) {
    var keys = [40];
    switch (event.keyCode) {
      case 40:
        clearInterval(intervalGrade);
        selector.growSel();
        break;
    }
  }
  addEventListener("keydown", stopSelector);
};
Selector.prototype._getCatetoContSide = function(that) {
  return Math.cos((90 - that.grade) * Math.PI / 180) * that.grow;
};

Selector.prototype._getcatetoBottom = function(that) {
  return Math.cos((that.grade) * Math.PI / 180) * that.grow;
};

Selector.prototype._hasTouchedSideLimits = function(catetoContSide) {
  return catetoContSide >= 600 || -1 * catetoContSide >= 600;
};

Selector.prototype._hasTouchedTheBottom = function(catetoContBottom) {
  return catetoContBottom >= 450;
};

Selector.prototype.growSel = function() {
  var that = this;
  intervalGrow = setInterval(function() {
    var catetoContSide = that._getCatetoContSide(that);
    var catetoContBottom = that._getcatetoBottom(that);

    if (that._hasTouchedSideLimits(catetoContSide) || that._hasTouchedTheBottom(catetoContBottom)) {
      clearInterval(intervalGrow);
      that.restartSelector();
    } else {
      for (i = 0; i <= PositionsGolds.length; i++) {

        if ((PositionsGolds[i] + 5) >= that.grow && that.grow >= (PositionsGolds[i] - 5) && (AnglesGolds[i] + 10) >= that.grade && that.grade >= (AnglesGolds[i] - 10)) {
          clearInterval(intervalGrow);
          delete PositionsGolds[i];
          delete AnglesGolds[i];
          $("#gold" + i).remove();
          that.restartSelector();
          that.points += 2;
          $("h2.points").html(that.points + " " + "points");
        } else {
          that.grow += 1;
          $("#selector").css("height", parseInt(that.grow) + "px");
        }

      }
      for (i = 0; i <= PositionsDiamonts.length; i++) {

        if ((PositionsDiamonts[i] + 5) >= that.grow && that.grow >= (PositionsDiamonts[i] - 5) && (AnglesDiamonts[i] + 10) >= that.grade && that.grade >= (AnglesDiamonts[i] - 10)) {
          clearInterval(intervalGrow);
          delete PositionsDiamonts[i];
          delete AnglesDiamonts[i];
          $("#diamont" + i).remove();
          that.points += 5;
          $("h2.points").html(that.points + " " + "points");
          that.restartSelector();
        } else {
          that.grow += 1;
          $("#selector").css("height", parseInt(that.grow) + "px");
        }

      }
      for (i = 0; i <= PositionsDynamites.length; i++) {

        if ((PositionsDynamites[i] + 5) >= that.grow && that.grow >= (PositionsDynamites[i] - 5) && (AnglesDynamites[i] + 10) >= that.grade && that.grade >= (AnglesDynamites[i] - 10)) {
          clearInterval(intervalGrow);
          delete PositionsDynamites[i];
          delete AnglesDynamites[i];
          $("#dynamite" + i).remove();
          $(".miner").remove();
          that.points -= 5;
          $("h2.points").html(that.points + " " + "points");
          $('#superior').append('<img class="miner" src="./images/scared.png"></img>');
          $('#board').append('<img class="boom" src="./images/boom.png"></img>');
          that.restartSelector();
          that.removeBoom();
        } else {
          that.grow += 1;
          $("#selector").css("height", parseInt(that.grow) + "px");
        }

      }
    }

  }, 5);

};

Selector.prototype.restartSelector = function() {
  var that = this;

  intervalRestart = setInterval(function() {
    if (that.grow == 50) {
      that.grade = 0;
      $("#selector").css("transform", "rotate(" + parseInt(that.grade) + "deg)");
      clearInterval(intervalRestart);
      that.moveSelector();
    } else {
      that.grow -= 1;
      $("#selector").css("height", parseInt(that.grow) + "px");
    }

  }, 5);

};
Selector.prototype.removeBoom = function() {
  console.log("entrando funcion");
  setTimeout(function() {
    $(".boom").remove();
    $(".miner").remove();
    $('#superior').append('<img class="miner" src="./images/miner.png"></img>');
  }, 1000);
};

Selector.prototype.Timer = function() {
  that = this;
  that.time = 62;
  var intervalTime = setInterval(function() {
    if (that.time >= 0) {
      $("h2.time").html("Time: " + that.time);

    } else {
      $('#board').append('<img class="gameOver" src="./images/game-over.png"></img>');
      clearInterval(intervalTime);
      clearInterval(intervalGrade);
    }
    if (that.time % 7 === 0) {
      $(".object").remove();
      PositionsGolds = [];
      AnglesGolds = [];
      AnglesDiamonts = [];
      PositionsDiamonts = [];
      AnglesDynamites = [];
      PositionsDynamites = [];
      objects.randomGolds();
      objects.randomDiamonts();
      objects.randomDynamite();
    }
    that.time--;

  }, 1000);

};
