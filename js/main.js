$(document).ready(function() {

    $(".cart-number-up").click(function(){
        var value = parseInt($(this).parent().find('input[type=number]').val());
        if(value < 5) {
            $(this).parent().find('input[type=number]').val(value + 1);
        }
    });

    $(".cart-number-down").click(function(){
        var value = parseInt($(this).parent().find('input[type=number]').val());
        if(value > 1) {
            $(this).parent().find('input[type=number]').val(value - 1);
        }
    });

});