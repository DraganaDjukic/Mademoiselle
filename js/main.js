$(document).ready(function(){

//Our services section

//Box-01

let image01Size = $('.box-01-image').css('height');
let image01NewSize = parseInt(image01Size);

$('.box-01').css('height',image01NewSize);

//Box-02

let image02Size = $('.box-02-image').css('height');
let image02NewSize = parseInt(image02Size);

$('.box-02').css('height',image02NewSize);




//PLUGINS JQUERY    

    //OWL-CAROUSEL

    $(".carousel-items").owlCarousel({

loop: true,
autoplay: true,
responsive: {
    0: {
        items: 1
    },
    768: {
        items: 2,
        margin: 14
    },
    992: {
        items: 3,
        margin: 14
    }
}
    });
    
//ANIMATION

    function animation() {
        let  windowHeight = $(window).height();
        let scroll = $(window).scrollTop();
        $('.animation').each(function () {
            let position = $(this).offset().top;
            let animationName = $(this).attr('data-animation');
            let delay = $(this).attr('data-delay');

            if (position < windowHeight + scroll - 100) {
                $(this).addClass(animationName);
                $(this).css('animation-delay', delay);
            }
        });
    }

    //JQUERY VALIDATION

    if ($('.contact-form').length > 0) {

        $('.contact-form').validate({

            highlight: function (element) {
                $(element).addClass('is-invalid').removeClass('is-valid');
            },
            unhighlight: function (element) {
                $(element).addClass('is-valid').removeClass('is-invalid');
            },
            rules: {
                name: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                message: {
                    required: true
                },
                subject: {
                    required: true
                }
            },
            messages: {
                name: {
                    required: 'The Name* field is required'
                },
                email: {
                    required: 'The Email* field is required',
                    email: 'Please provide a valid email address'
                },
                message: {
                    required: 'The Message* field is required'
                },
                subject: {
                    required: 'The Subject* field is required'
                }
            },

            errorElement: 'p',
            errorPlacement: function (error, element) {
                error.appendTo(element.closest(".form-group").find(".error-msg"));
            }

        });

    }

});