// Switch the content divs when a header link is clicked!

$('.link').click(function() {
  $('.content').css('visibility', 'hidden');
  $('#'+$(this).attr('name')).css('visibility', 'visible');
})