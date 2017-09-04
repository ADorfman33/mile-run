var $floatingBtn = $('.btn-floating');
$(document).scroll(function() {
  if ($(this).scrollTop() > 50) {
    $floatingBtn.slideDown('slow')
  } else {
    $floatingBtn.slideUp('slow')
  }
});
