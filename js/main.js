
// $(window).load(function(){

// $('#page-loader').delay(300).fadeOut(400, function(){

// });

// $('#loader-name').addClass('loader-left');
// $('#loader-job').addClass('loader-right');
// $('#loader-animation').addClass('loader-hide');

// });


$('home-link').on('click', function(){
    $('.resume-body').css("display", "none");
    $('.home-body').css("display", "block");
    $('.contact-body').css("display", "none");
    $('.portfolio-body').css("display", "none");
    $('.skills-body').css("display", "none");
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


$('#travel').on('click', function(){
    window.location = 'https://blue-project-2.herokuapp.com/';
    
});

$('#friend').on('click', function(){
    window.location = 'https://calm-island-98205.herokuapp.com/';
    
});

$('#burger').on('click', function(){
    window.location = 'https://nameless-sea-77335.herokuapp.com/';
    
});

$('#group').on('click', function(){
    window.location = 'https://kittm.github.io/project-1/';
    
});