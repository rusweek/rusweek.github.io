$(document).ready(function(){
    //slider with featurs
    $('.features-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                prevArrow: '<button class="prev"></button>',
                nextArrow: '<button class="next"></button>',
                slidesToScroll: 2,
                infinite: true,
                dots: false
            }
            },
            {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                prevArrow: '<button class="prev"></button>',
                nextArrow: '<button class="next"></button>',
                slidesToScroll: 1
            }
            }
            
        ]
    });

    //slider with feetback
    $('.feedback-slider').slick({
        prevArrow: '<button type="button" class="feedback-slider-btn feedback-prev-btn"><img src="img/feedback/left(1).svg"></button>',
        nextArrow: '<button type="button" class="feedback-slider-btn feedback-next-btn"><img src="img/feedback/right(1).svg"></button>',

    });

    $('.popup-btn').on('click', function (e) {
        e.preventDefault();
        $('.popup').fadeIn();
     
    });

    $('.popup-close').on('click', function (e) {
        e.preventDefault();
        $('.popup').fadeOut();

    });
    $('.popup').on('click', function (e) {
        
        if ($(e.target).closest('.popup-content').length == 0) {
			$(this).fadeOut();					
		}
        

    });
});

