
$(window).load(function(){

$('#page-loader').delay(300).fadeOut(400, function(){

});

$('#loader-name').addClass('loader-left');
$('#loader-job').addClass('loader-right');
$('#loader-animation').addClass('loader-hide');

});

$('.resume-link').on('click', function(){
    $('.resume-link').show();
    $('.home-link').hide();
    $('.contact-link').hide();
    $('.portfolio-link').hide();
    $('.skills-link').hide();
})