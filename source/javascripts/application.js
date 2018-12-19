//= require jquery
//= require bootstrap
//= require_tree .


// appearing text

$(document).on('ready', function () {
    setTimeout(function () {
        $('.letter').addClass('loaded');
        $('.reg-text').addClass('loaded');
    }, 1000);
});


// transparent to coloured navbar: https://codepen.io/sonorangirl/pen/XmRBjq

$(document).ready(function() {
        // Transition effect for navbar
        $(window).scroll(function() {
          // checks if window is scrolled more than 20px, adds/removes solid class
          if($(this).scrollTop() > 20) {
              $('.navbar').addClass('solid');
          } else {
              $('.navbar').removeClass('solid');
          }
        });
});
