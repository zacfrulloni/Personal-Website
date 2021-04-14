$(function() {
    $('.scroll-down').click (function() {
      $('html, body').animate({scrollTop: $('div.row').offset().top - 120}, 'slow');
      return false;
    });
  });
