$(document).ready(function() {
    // API Doc collapse additions
    var el = $('.sect1 h2, .sect2 h3, .sect2 h4').addClass('clickable').append('<span style="flex-grow: 1; margin: 0 10px; border-bottom: 1px dotted #00acc1;"></span><i class="material-icons" style="font-size: 20px">keyboard_arrow_up</i>');
    el.css({
        'display': 'flex',
        'align-items': 'center',
        'justify-content': 'space-between'
    });

    $('.sect1 h2, .sect2 h3, .sect2 h4').on('click', function() {
        if($(this).next().hasClass('collapse')) {
            $(this).find('.material-icons').text('keyboard_arrow_up');
            $(this).parent().children().removeClass('collapse');
        }
        else {
            $(this).find('.material-icons').text('keyboard_arrow_down');
            $(this).parent().children().addClass('collapse');
            $(this).removeClass('collapse');
        }
    });
})