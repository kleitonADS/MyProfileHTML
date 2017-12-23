// Nav Toggle
$('.hamburger').click(function(){

  $(this).toggleClass('is-active');
	$('.menu').toggleClass('on');

	$(document).ready(function(){
		var myLink = ".menu";
		var nav = ".menu-nav ";
	    if ($(myLink).hasClass('on')) {

					$(document).ready(function(){
					if($(nav).hasClass('js-active-transparent')){

            $('.hamburger.is-active').css({
							'margin-top': '0px',
							'top': '40px'
						});

					}else {

						$('.hamburger.is-active').css({
							'margin-top': '0px',
							'top': '40px'
						});

					}

					});

	    }

			// Nav off
	    else {

				$(document).ready(function(){
				if($(nav).hasClass('js-active-transparent')){

					$('.hamburger.is-active').css({
						'margin-top': '0px',
						'top': '40px'
					});

				}else {

					$('.hamburger').css({
						'margin-top': '0px',
						'top': '0px'
					});
				}
			});
	  }
	});
});
