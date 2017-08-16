// Menu Toogle
$('.hamburger').click(function(){
	$(this).toggleClass('is-active');
	$('.menu').toggleClass('on');
});

// Select Menu
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

/////// Menu ////////

$('.menu-nav').css({
	'top': '0px'
});

// Define var tmenu
var tmenu = $('.menu-nav').position().top + $('.menu-nav').data('position');
$('.menu-nav').css({
	'top': tmenu
});

// Action Scroll menu
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

    // Change top icon menu-nav
    $('.hamburger').css({
			'top':'0px'
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

// Link Resume
$('.link-resume').hide();

$(document).ready(function(){
	$('#showlink').click(function(event){
		event.preventDefault();
		var nameLink = document.getElementById('showlink').name;
		if (nameLink  == 'show'){

			$('.link-resume').show('slow');
			document.getElementById('showlink').name = "";


		}else{

			$('.link-resume').hide('slow');
			document.getElementById('showlink').name = "show";
		}


	});

});

// Formulari
$('#form-main').hide();

$(document).ready(function(){
	$('#showform').click(function(event){
		event.preventDefault();
		var name = document.getElementById('showform').name;

		if(name == 'show'){

			$('#form-main').show('slow');
			document.getElementById('showform').name = "";


		}else{

			$('#form-main').hide('slow');
			document.getElementById('showform').name = "show";
		}


	});

});

// change color button resume
function chanceButton(x){
	x.style.color      = "#1175ee";
	x.style.border     = "2px solid";
	x.style.border     = "radius: 10px";
	x.style.background = "white";
}

// back color button resume
function normalImg(x){
	x.style.color      = "white";
	x.style.border     = "2px solid";
	x.style.border     = "radius: 10px";
	x.style.background = "#1175ee";
}


/* Credits:
 * https://www.developphp.com/video/JavaScript/Circular-Progress-Loader-Canvas-JavaScript-Programming-Tutorial
 */
//require("http").globalAgent.maxSockets = Infinity;
(function() {

	var Progress = function( element ) {

		this.context = element.getContext( "2d" );
		this.refElement = element.parentNode;
		this.loaded = 0;
		this.start = -0.5;
		this.width = this.context.canvas.width;
		this.height = this.context.canvas.height;
		this.total = parseInt( this.refElement.dataset.percent, 10 );
		this.timer = null;

		this.diff = 0;

		this.init();
	};

	Progress.prototype = {
		init: function() {
			var self = this;
			self.timer = setInterval(function() {
				self.run();
			}, 25);
		},
		run: function() {
			var self = this;

			self.diff = ( ( self.loaded / 100 ) * Math.PI * 2 * 10 ).toFixed( 20 );
			self.context.clearRect( 0, 0, self.width, self.height );
			self.context.lineWidth = 10;
			self.context.fillStyle = "#fff";
			self.context.strokeStyle = "#fff";
			self.context.textAlign = "center";
			self.context.font = "20px futurabt";
			self.context.fillText( self.loaded + "%", self.width * .5 , self.height * .5 + 4, self.width );
			self.context.beginPath();
			self.context.arc( 76, 75, 71, self.start, self.diff / 10 + self.start, false );
			self.context.stroke();

			if( self.loaded >= self.total ) {
				clearInterval( self.timer );
			}

			self.loaded++;
		}
	};

	var CircularSkillBar = function( elements ) {
		this.bars = document.querySelectorAll( elements );
		if( this.bars.length > 0 ) {
			this.init();
		}
	};

	CircularSkillBar.prototype = {
		init: function() {
			this.tick = 25;
			this.progress();

		},
		progress: function() {
			var self = this;
			var index = 0;
			var firstCanvas = self.bars[0].querySelector( "canvas" );
			var firstProg = new Progress( firstCanvas );



			var timer = setInterval(function() {
				index++;

				var canvas = self.bars[index].querySelector( "canvas" );

				var prog = new Progress( canvas );

				if( index == 5 ) { // self.bars.length
						clearInterval( timer );
				}

			}, self.tick * 100);

		}
	};

	document.addEventListener( "DOMContentLoaded", function() {
		var circularBars = new CircularSkillBar( "#bars .bar" );
	});

})();

var imgmac = document.getElementsByClassName('macbook')['0'].height;

var newheightgif = (imgmac - 47);

document.getElementsByClassName('gifmac')['0'].height = newheightgif;


var itensImgProj = document.getElementsByClassName("imglist-proj");
var titlePro = document.getElementById('nameproj');
var descPro = document.getElementById('descproj');
var linkvproj = document.getElementById('linkviewproj');
var linkcproj = document.getElementById('linkcodeproj');
var imgGif =document.getElementsByClassName('gifmac')['0'];



		for (var i = 0; i < itensImgProj.length; i++) {
			itensImgProj[i].addEventListener('click', function() {
				var itenp = this.children[0].name;
				switch (itenp) {

					case 'MY PROFILE':
						titlePro.innerHTML = itenp;
						descPro.innerHTML = "MY PROFILE, consectetur adipisicing elitAtque,facilis quo maiores magnam modi ab libero praesentium blanditiis.facilis quo maiores magnam modi ab libero praesentium blanditiis.facilis quo maiores magnam modi ab libero praesentium blanditiis.div.links-desc-proj";
						linkvproj.href = "#testeprojectview";
						linkcproj.href = "#testeprojectCode";
						imgGif.src = 'img/profileproj.gif';
						break;
					case 'SYSTEM FEEDBACK':
						titlePro.innerHTML = itenp;
						descPro.innerHTML = "SYSTEM FEEDBACK, consectetur adipisicing elitAtque,facilis quo maiores magnam modi ab libero praesentium blanditiis.facilis quo maiores magnam modi ab libero praesentium blanditiis.facilis quo maiores magnam modi ab libero praesentium blanditiis.div.links-desc-proj";
						linkvproj.href = "#testeprojectview";
						linkcproj.href = "#testeprojectCode";
						imgGif.src = 'img/feedback.gif';

						break;
					case 'Project Calc':
						titlePro.innerHTML = itenp;
						descPro.innerHTML = "Project Calc, consectetur adipisicing elitAtque,facilis quo maiores magnam modi ab libero praesentium blanditiis.facilis quo maiores magnam modi ab libero praesentium blanditiis.facilis quo maiores magnam modi ab libero praesentium blanditiis.div.links-desc-proj";
						linkvproj.href = "#testeprojectview";
						linkcproj.href = "#testeprojectCode";

						break;


					case 'Project TimeSheet':
						titlePro.innerHTML = itenp;
						descPro.innerHTML = "PROJETO TIMESHEEET, consectetur adipisicing elitAtque,facilis quo maiores magnam modi ab libero praesentium blanditiis.facilis quo maiores magnam modi ab libero praesentium blanditiis.facilis quo maiores magnam modi ab libero praesentium blanditiis.div.links-desc-proj"

						break;

					case 'Project X':
						titlePro.innerHTML = itenp;
						descPro.innerHTML = "Project X, consectetur adipisicinelitAtque,facilis quo maiores magnam modi ab libero praesentiublanditiis.facilis quo maiores magnam modi ab libero praesentiublanditiis.facilis quo maiores magnam modi ab libero praesentiublanditiis.div.links-desc-proj"

						break;

					case 'Project Y':
						titlePro.innerHTML = itenp;
						descPro.innerHTML = "Project Y, consectetur adipisicing elitAtque,facilis quo maiores magnam modi ab libero praesentium blanditiis.facilis quo maiores magnam modi ab libero praesentium blanditiis.facilis quo maiores magnam modi ab libero praesentium blanditiis.div.links-desc-proj"

						break;

					case 'Project Z':
						titlePro.innerHTML = itenp;
						descPro.innerHTML = "Project Z, consectetur adipisicing elitAtque,facilis quo maiores magnam modi ab libero praesentium blanditiis.facilis quo maiores magnam modi ab libero praesentium blanditiis.facilis quo maiores magnam modi ab libero praesentium blanditiis.div.links-desc-proj"

						break;


					default:

				}
			});
		}
