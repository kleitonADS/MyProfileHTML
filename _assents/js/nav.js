// Nav
$('.menu-nav').css({
	'top': '0px'
});

// Select nav
$('#laguage').on('change', function() {
	var nameSelect  = this.value;

	switch (nameSelect) {

		case 'Idioma':
        location.href = "index-br.html";
        break;

		case 'Portuguese':
        location.href = "index-br.html";
        break;

		case 'Português':
				location.href = "index-br.html";
        break;

    case 'Language':
        location.href = "index.html";
        break;

		case 'Inglês':
        location.href = "index.html";
        break;

		case 'English':
        location.href = "index.html";
        break;

	}
});


// Action Scroll nav
$(window).scroll(function(){

	var wScroll = $(this).scrollTop();
	var heightheader = $('#header').height()-80;

	// Move scrollTop
	if (wScroll < (heightheader ) ) {
    var tamanho = $(window).width();
		//alert(tamanho);
    // Menu transparent
		$('.menu-nav').addClass('js-active-transparent');

		if(tamanho >= 550){


			$('.hamburger').css({
					'top':'40px'
			});



			$('.menu-nav').css({
				'margin-top':'42px'
			});

		}else {

			$('.hamburger').css({
				'top':'20px'
			});

			$('.menu-nav').css({
				'margin-top':'22px'
			});

		}

    // Change logo-header menu
    $('.logo-header img' ).attr('src','img/logo-header.png' );

    // Icom menu
		$('.line').css({
			'background-color': '#fff'
		});

		$('.back-title-menu').css({
			'background-color': '#1175ee'
		});

		$('.back-title-menu h1').css({
			'color': '#fff'
		});

    // Icon select color white
		$('.select-header select').css({
			'background-image': 'url("img/arrow_down.svg")',
			'border':' 2px solid #fff',
			'color': '#fff',
			'background-color': 'transparent'
		});

    // Remove .name-menu
		$('.menu-nav .content-flex-nav .logo-header .name-menu').css({
			'display': 'none'
		});

    // Efeito select mouseover
		$( "#laguage" ).mouseover(function() {
			$('.select-header select').css({
				'background-image': 'url("img/arrow_down-b.svg")',
				'border':' 2px solid #1175ee',
				'color': '#1175ee',
				'background-color': '#fff'

			});
		});

    // Efeito select mouseout
		$( "#laguage" ).mouseout(function() {
			$('.select-header select').css({
				'background-image': 'url("img/arrow_down.svg")',
				'border':' 2px solid #fff',
				'color': '#fff',
				'background-color': 'transparent'

			});
		});

	}

  // Scrolll white menu
	if (wScroll >= heightheader ) {

    // Remove class js-active-transparent
    $('.menu-nav').removeClass('js-active-transparent');

    // Add js-action menu
    $('.menu-nav').addClass('js-active');

		$(document).ready(function(){
			var mylink =".menu";
			if($(mylink).hasClass('on')){

				$('.hamburger').css({
				'top':'40px'
				});

			}else{
    	// Change top icon menu-nav
    	$('.hamburger').css({
			'top':'0px'
			});
		}
	 });

		$('.menu-nav').css({
			'margin-top':'0px'
		});

    // Change logo-header menu for blue logo
		$('.logo-header img' ).attr('src','img/logo-headerf.png' );

		// Change color icon menu for blue
		$('.line').css({
			'background-color': '#1175ee'
		});

		$('.back-title-menu').css({
			'background-color': '#fff'
		});

		$('.back-title-menu h1').css({
			'color': '#1175ee'
		});



    // Change menu-nav for display flex
		$('.menu-nav .content-flex-nav .logo-header .name-menu').css({
			'display': 'flex'
		});

    // Change color input select
		$('.select-header select').css({
			'background-image': 'url(img/arrow_down-b.svg)',
			'border':' 2px solid #1175ee',
			'color': '#1175ee'
		});

    // Efeito mouseover input select
		$( "#laguage" ).mouseover(function() {
			$('.select-header select').css({
				'background-image': 'url(img/arrow_down.svg)',
				'border':' 2px solid #fff',
				'color': '#fff',
				'background-color': '#1175ee'
			});
		});

    // Efeito mouseout input select
		$( "#laguage" ).mouseout(function() {
			$('.select-header select').css({
				'background-image': 'url(img/arrow_down-b.svg)',
				'border':' 2px solid #1175ee',
				'color': '#1175ee',
				'background-color': '#fff'
			});
		});

	}

  // RemoveClass js-active menu-nav
	if ( tmenu > wScroll) {
		$('.menu-nav').removeClass('js-active');
	}

	///// PAGES //////

  // Header page
	if(wScroll > $('#header').offset().top -100) {
		$('.pages li a').parent().children().removeClass('is-active');
		$('.pages li a.header').addClass('is-active');
	}

	if(wScroll > $('#about-li').offset().top - 100){
		$('.pages li a').parent().children().removeClass('is-active');
		$('.pages li a.page-about-li').addClass('is-active');
	}

	if(wScroll > $('#carrer-li').offset().top - 100){
		$('.pages li a').parent().children().removeClass('is-active');
		$('.pages li a.page-carrer-li').addClass('is-active');
	}

	if(wScroll > $('#skill-li').offset().top - 100){
		$('.pages li a').parent().children().removeClass('is-active');
		$('.pages li a.page-skill-li').addClass('is-active');

	}

	if(wScroll > $('#project-li').offset().top - 100){
		$('.pages li a').parent().children().removeClass('is-active');
		$('.pages li a.page-project-li').addClass('is-active');
	}

	// if(wScroll > $('#app-li').offset().top - 100){
	// 	$('.pages li a').parent().children().removeClass('is-active');
	// 	$('.pages li a.page-app-li').addClass('is-active');
	// }

	if(wScroll > $('#contact-li').offset().top - 100){
		$('.pages li a').parent().children().removeClass('is-active');
		$('.pages li a.page-contact-li').addClass('is-active');
	}

	// step carrer 1 ( white )
	if(wScroll > $('#step1').offset().top - 100) {

		$('#step1 .timeline-icon ').css({
			'border':' 2px solid #1175ee',
			'color': '#1175ee',
			'background-color': '#fff'
		});

	}

	// step carrer 1 ( blue )
	if(wScroll > $('#step1').offset().top - 50) {

		$('#step1 .timeline-icon ').css({
			'border':' 2px solid #1175ee',
			'color': '#fff',
			'background-color': '#1175ee'
		});

	}

	// step carrer 2 ( white )
	if(wScroll > $('#step2').offset().top - 100) {

		$('#step2 .timeline-icon ').css({
			'border':'2px solid #1175ee',
			'color': '#1175ee',
			'background-color': '#fff'
		});

	}

	// step carrer 2 ( blue )
	if(wScroll > $('#step2').offset().top - 50) {

		$('#step2 .timeline-icon ').css({
			'border':' 2px solid #1175ee',
			'color': '#fff',
			'background-color': '#1175ee'
		});

	}

	// step carrer 3 ( white )
	if(wScroll > $('#step3').offset().top - 100) {
		//$('.pages li a.page-contact-li').addClass('is-active');

		$('#step3 .timeline-icon ').css({
			'border':'2px solid #1175ee',
			'color': '#1175ee',
			'background-color': '#fff'
		});


	}

	// step carrer 3 ( blue )
	if(wScroll > $('#step3').offset().top - 50) {

		$('#step3 .timeline-icon ').css({
			'border':' 2px solid #1175ee',
			'color': '#fff',
			'background-color': '#1175ee'
		});

	}

	// step carrer 4 ( white )
	if(wScroll > $('#step4').offset().top - 100) {
		//$('.pages li a.page-contact-li').addClass('is-active');

		$('#step4 .timeline-icon ').css({
			'border':'2px solid #1175ee',
			'color': '#1175ee',
			'background-color': '#fff'
		});



	}

	// step carrer 4 ( blue )
	if(wScroll > $('#step4').offset().top - 50) {

		$('#step4 .timeline-icon ').css({
			'border':' 2px solid #1175ee',
			'color': '#fff',
			'background-color': '#1175ee'
		});

	}

	// step carrer 5 ( white )
	if(wScroll > $('#step5').offset().top - 250) {
		//$('.pages li a.page-contact-li').addClass('is-active');

		$('#step5 .timeline-icon ').css({
			'border':'2px solid #1175ee',
			'color': '#1175ee',
			'background-color': '#fff'
		});

		$('.next-step ').show('slow');


	}

	// step carrer 5 ( blue )
	if(wScroll > $('#step5').offset().top - 50) {

		$('#step5 .timeline-icon ').css({
			'border':' 2px solid #1175ee',
			'color': '#fff',
			'background-color': '#1175ee'
		});

	}

});
