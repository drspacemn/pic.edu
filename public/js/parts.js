$(document).ready(function(){
  $(".cont1").animate({
    left: '50%',
    })
  var arr = [];
  var word = noun[Math.floor(Math.random()* noun.length)];
  var i = 0;
  ajaxBay2(word, i);
  arr.push(word);
  console.log(arr);
  $("#hint1").click(function(){
    def(word);
  })
})
