function Selector() {
  this.grade = 0;
  this.direction = 1;
  this.grow = 50;
  var intervalGrade;
  var intervalGrow;
  var intervalRestart;
}

Selector.prototype.moveSelector = function() {
  var that = this;
  intervalGrade = setInterval(function() {
    switch (that.direction) {
      case 1:
        that.grade += 30;
        $("#selector").css("transform", "rotate(" + parseInt(that.grade) + "deg)");
        console.log(that.grade);
        if (that.grade > 80) {
          that.direction = 2;
        }
        break;
      case 2:
        that.grade -= 30;
        $("#selector").css("transform", "rotate(" + parseInt(that.grade) + "deg)");
        console.log(that.grade);
        if (that.grade < -80) {
          that.direction = 1;
        }
        break;
    }
  }, 500);
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
Selector.prototype._getCatetoContSide = function(that){
  return Math.cos((90 - that.grade) * Math.PI / 180) * that.grow;
};

Selector.prototype._getcatetoBottom = function(that){
  return Math.cos((that.grade) * Math.PI / 180) * that.grow;
};

Selector.prototype._hasTouchedSideLimits = function(catetoContSide){
  return catetoContSide >= 600 || -1 * catetoContSide >= 600;
};

Selector.prototype._hasTouchedTheBottom = function(catetoContBottom){
  return catetoContBottom >= 450;
};

Selector.prototype.growSel = function() {
  // console.log(arrayPositions);
  // console.log(that.grade);
  var that = this;
  intervalGrow = setInterval(function() {
    var catetoContSide = that._getCatetoContSide(that);
    var catetoContBottom = that._getcatetoBottom(that);

    if (that._hasTouchedSideLimits(catetoContSide) || that._hasTouchedTheBottom(catetoContBottom)) {
      clearInterval(intervalGrow);
      that.restartSelector();
    } else {
      for (var i = 0; i <= arrayPositions.length; i++) {
        console.log(arrayAngles[i]);
        console.log(arrayPositions[i]);
        if ((arrayPositions[i]+5)>=that.grow && that.grow >= (arrayPositions[i]-5) && arrayAngles[i]==that.grade) {
          clearInterval(intervalGrow);
          alert("atrapado");
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
      that.grade =0;
      $("#selector").css("transform", "rotate(" + parseInt(that.grade) + "deg)");
      clearInterval(intervalRestart);
    } else {
      that.grow -= 1;
      $("#selector").css("height", parseInt(that.grow) + "px");
    }

  }, 5);

};
