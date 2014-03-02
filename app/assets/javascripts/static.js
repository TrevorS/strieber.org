var ready = function() {
  $('.cover-name').addClass('animated fadeInLeft');
  $('.cover-heading').addClass('animated fadeInLeft');
};
$(document).ready(ready);
$(document).on('page:load', ready);

