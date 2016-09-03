$(document).ready(function(){
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
});

