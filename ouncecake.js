// Switch the content divs when a header link is clicked!

$('.link').click(function() {

  $('.content').css('visibility', 'hidden');
  $('.content').css('display', 'none');

  $('#'+$(this).attr('name')).css('visibility', 'visible');
  $('#'+$(this).attr('name')).css('display', 'block');

})