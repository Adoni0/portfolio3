
$(window).load(function(){

$('#page-loader').delay(300).fadeOut(400, function(){

});

$('#loader-name').addClass('loader-left');
$('#loader-job').addClass('loader-right');
$('#loader-animation').addClass('loader-hide');

});

// $('.resume-link').on('click', function(){
//     $('.resume-body').show();
//     $('.home-body').hide();
//     $('.contact-body').hide();
//     $('.portfolio-body').hide();
//     $('.skills-body').hide();
// })

$('home-link').on('click', function(){
    $('.resume-body').hide();
    $('.home-body').show();
    $('.contact-body').hide();
    $('.portfolio-body').hide();
    $('.skills-body').hide();
})

$('skills-link').on('click', function(){
    $('.resume-body').hide();
    $('.home-body').hide();
    $('.contact-body').hide();
    $('.portfolio-body').hide();
    $('.skills-body').show();
})

$('contact-link').on('click', function(){
    $('.resume-body').hide();
    $('.home-body').hide();
    $('.contact-body').show();
    $('.portfolio-body').hide();
    $('.skills-body').hide();
})

$('portfolio-link').on('click', function(){
    $('.resume-body').hide();
    $('.home-body').hide();
    $('.contact-body').hide();
    $('.portfolio-body').show();
    $('.skills-body').hide();
})