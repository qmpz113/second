$(document).ready(function () {
    $('.uncheck').click(function () {
        var y = $(this).attr('number');
        $('.uncheck[number = ' + y + ']').addClass('checked');
        $('.uncheck[number != ' + y + ']').removeClass('checked');
        $('.radio-input[number = ' + y + ']').attr('checked', 'checked');
        $('.radio-input[number != ' + y + ']').removeAttr('checked');
        $('.text-method[number = ' + y + ']').addClass('text-active');
        $('.text-method[number != ' + y + ']').removeClass('text-active');
    });
    $('.item-lookbook1_alt_details img').click(function () {
        var y = $(this).attr('number');
        $('.content-img-lookbook[number = ' + y + ']').fadeIn();
        $('.content-img-lookbook[number != ' + y + ']').fadeOut();
    });
    var x = Math.floor(Math.random() * 4) + 1;
    $('.random-product[ran = ' + x + ']').css('display', 'block');
    $(function () {
        $('.img-products').matchHeight();
    });

    var $animation_elements = $('.animation');
    var $window = $(window);

    function check_if_in_view() {
        var window_height = $window.height();
        var window_top_position = $window.scrollTop();
        var window_bottom_position = (window_top_position + window_height);

        $.each($animation_elements, function () {
            var $element = $(this);
            var element_height = $element.outerHeight();
            var element_top_position = $element.offset().top;
            var element_bottom_position = (element_top_position + element_height);

//check to see if this current container is within viewport
            if ((element_bottom_position >= window_top_position) &&
                    (element_top_position <= window_bottom_position)) {
                $element.addClass('in-view');
            } else {
// $element.removeClass('in-view');
            }
        });
    }

    $window.on('scroll resize', check_if_in_view);
    $window.trigger('scroll');
});

