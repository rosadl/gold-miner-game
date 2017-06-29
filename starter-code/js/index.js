var selector = new Selector();
var objects = new Objects();





$(document).ready(function() {
  $(".start").click(function(){
    selector.Timer();
    selector.moveSelector();
    selector.stop();
    objects.randomGolds();
    objects.randomDiamonts();
    objects.randomDynamite();
});

});
