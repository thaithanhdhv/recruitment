// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require jquery3
//= require jquery_ujs
//= require activestorage
//= require turbolinks
//= require_tree .
//= require popper
//= require bootstrap
//= require js/owl.carousel.js
//= require js/owl.animate.js
//= require js/owl.autoplay.js
//= require social-share-button



$(document).on('turbolinks:load', function() {
    AOS.init({
        disable: false,
        startEvent: 'DOMContentLoaded',
        initClassName: 'aos-init',
        animatedClassName: 'aos-animate',
        useClassNames: false,
        disableMutationObserver: false,
        debounceDelay: 50,
        throttleDelay: 99,


        offset: 120,
        delay: 0,
        duration: 500,
        easing: 'ease',
        once: false,
        mirror: false,
        anchorPlacement: 'top-bottom'
      });

    $(window).scroll(function(){
        if ($(this).scrollTop() > 500) {
            $('#scroll').addClass('in');
        } else {
            $('#scroll').removeClass('in');
        }
    });
    $('#scroll').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
    });
});
