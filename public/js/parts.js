$(document).ready(function(){
  $(".cont1").animate({
    left: '50%',
    })
  var arr = [];
  var word = noun[Math.floor(Math.random()* noun.length)];
  var i = 0;
  ajaxPic2(word, i);
  arr.push(word);
  $('#doit').click(function(){
    translate($('#word').val(), $('#lang').val())
  })

  $("#hint1").click(function(){
    var word = word;
    def(word);

  })
  $('#rev1').click(function(){
    reveal(word);
  })
  $("#sub2").click(function(){
    pos(word);
  })
  $('#nex_pic').click(function(){
    $('.wrong1').remove();
    $('.wrong2').remove();
    $('#ward').val('');
    $("#pos1").val('');
    i = 0
    word = noun[Math.floor(Math.random()* noun.length)];
    $(arr).each(function(val){
      if(val === word){
        word = noun[Math.floor(Math.random()* noun.length)];
      }
    })
    ajaxPic2(word, i)
    arr.push(word);
    $("#hint1").click(function(){
      console.log(word);
      def(word);
    })
    $('#rev1').click(function(){
      reveal(word);
    })
    $("#sub2").click(function(){
      pos(word);
    })
  })
})
