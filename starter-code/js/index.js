var selector = new Selector();
var objects = new Objects();





$(document).ready(function() {
  selector.moveSelector();
  selector.stop();
  objects.randomGolds();
  objects.randomDiamonts();
  objects.randomDynamite();
});
