// event pada saat tombol di klik
$('.page-scroll').on('click', function(e){

    var x= $(this).attr('href')

    var elementujuan= $(x);
    
    $('html, body').animate({
        scrollTop: elementujuan.offset().top-80
    }, 1250, 'swing');

    e.preventDefault();
});