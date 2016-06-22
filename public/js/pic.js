var data = [
    {"A hot potato": "Speak of an issue (mostly current) which many people are talking about and which is usually disputed"},
    {"A penny for your thoughts": "A way of asking what someone is thinking"},
    {"Actions speak louder than words": "People's intentions can be judged better by what they do than what they say."},
    {"Add insult to injury": "To further a loss with mockery or indignity; to worsen an unfavorable situation."}
  ];

$(document).ready(function(){
  $(".cont1").animate({
    left: '50%',
    })

    var num = 0;
    var ans1 = prime(num).split("$");
    var ans = ans1[0];
    var mean = ans1[1];
    $('#sub').click(function(){
      var val = $('#answer').val();
      if(val === ans){
        alert(`Nice Work! "${ans}" means: ${mean}`);
        $('.catch').empty();

        num ++;
        ans1 = prime(num).split("$");
        ans = ans1[0];
        mean = ans2[2];
      } else {
        alert(`Sorry keep trying (hint: ${mean})`);
      }
    })
    $('#doit').click(function(){
      translate($('#word').val(), $('#lang').val());
    })
    $('#doit1').click(function(){
      translate(mean, $('#lang1').val())
    })
})
