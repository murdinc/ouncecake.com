// Switch the content divs when a header link is clicked!

$('.link').click(function() {
  $('.content').css('visibility', 'hidden').hide();
  $('#'+$(this).attr('name')).css('visibility', 'visible').show();
})