$(function() {

  // your js goes in between these two things

  // when you click the button
  $('#warning').click(function(){
    $('#center').attr('src', 'images/yellow.gif')
    $('.container').css("background", "#FFEE00");
  });

  $('#safe-condition').click(function(){
    $('#center').attr('src', 'images/green.gif')
    $('.container').css("background", "#217844");
  });

  $('#prohibition').click(function(){
      $('#center').attr('src', 'images/red.gif')
      $('.container').css("background", "#EF3829");
  });

  $('#mandatory-action').click(function(){
    $('#center').attr('src', 'images/blue.gif')
    $('.container').css("background", "#006FBA");
  });

}); // don't delete this