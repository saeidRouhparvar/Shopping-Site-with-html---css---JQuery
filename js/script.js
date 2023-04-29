// search-bar
$(document).on('click', '.search', function () {
    $('.search-bar').addClass('search-bar-active')
});
$(document).on('click', '.search-cancel', function () {
    $('.search-bar').removeClass('search-bar-active')
});

// Login-form 
$(document).on('click', '.user,.already-account', function () {
    $('.form').addClass('login-active').removeClass('sign-up-active')
});
$(document).on('click', '.sign-up-btn', function () {
    $('.form').addClass('sign-up-active').removeClass('login-active')
});
$(document).on('click', '.form-cancel', function () {
    $('.form').removeClass('login-active').removeClass('sign-up-active')
});

// Full Slider 

$(document).ready(function () {
    $('#adaptive').lightSlider({
        adaptiveHeight: true,
        auto:true,
        item: 1,
        slideMargin: 0,
        loop: true
    });
});

$(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  
  });
