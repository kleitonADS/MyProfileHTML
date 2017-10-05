// Menu Toogle
$('.hamburger').click(function(){
	$(this).toggleClass('is-active');
	$('.menu').toggleClass('on');

	$(document).ready(function(){
		var myLink = ".menu";
		var nav = ".menu-nav ";
	    if ($(myLink).hasClass('on')) {

					$(document).ready(function(){
					if($(nav).hasClass('js-active-transparent')){
						console.log('aqui');
						$('.hamburger.is-active').css({
							'margin-top': '0px',
							'top': '40px'
						});

					}else {

						$('.hamburger.is-active').css({
							'margin-top': '0px',
							'top': '40px'
						});
						console.log('aquiqq');

					}

					});


	    }

			// Off menu
	    else {

				$(document).ready(function(){
				if($(nav).hasClass('js-active-transparent')){
					console.log('aqui');
					$('.hamburger.is-active').css({
						'margin-top': '0px',
						'top': '40px'
					});

				}else {

					$('.hamburger').css({
						'margin-top': '0px',
						'top': '0px'
					});
					console.log('aquiqq');

				}

				});

	    }
	});

});







// $( "#iconhamburger" ).hasClass( "hamburger is-active" );

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

// Link Resume
$('.link-resume').hide();

//hidden buttons select project
$('.leftlist').hide();
$('.rightlist').hide();

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

				if( index == 4 ) { // self.bars.length
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

$('.list_tool_feedback').hide();
$('.list_tool_basefe').hide();


var intProj = document.getElementById('count_proj');
intProj.innerHTML = itensImgProj.length;

		for (var i = 0; i < itensImgProj.length; i++) {

			itensImgProj[i].addEventListener('click', function() {
				var itenp = this.children[0].name;

				switch (itenp) {

					case 'MY PROFILE':
						titlePro.innerHTML = itenp;
						// descPro.innerHTML = " Minha nova pagina web foi criado ultilizando , HTML5, JavaScript, SASS, CSS3 com flexbox para parte resposiva da página, jQuery , Photoshop para criaçao de designer, Git and Github,  alguns frameworks JS para agilizar e otimizar o processo de codificação, NodeJs, Gulp, Jade, Autoprefixer, Plumbe, uglify, Imagmim and Browser-sync .";

						descPro.innerHTML = " That webpage has been created using HTML5, JavaScript, SASS, CSS3 with Flexbox for reponsive page, jQuery, Photoshop for designer creation, Git and Github, some JS frameworks to streamline and optimize the coding process, NodeJs, Gulp , Jade, Autoprefixer, Plumber, Uglify, Imagmim and Browser-sync. ";
						linkvproj.href = "#";
						linkcproj.href = "https://github.com/kleitonADS/profile";
						imgGif.src = 'img/profileproj.gif';

						$('.list_tool_profile').show('slow');
						$('.list_tool_feedback').hide('slow');
						$('.list_tool_basefe').hide('slow');
						break;

					case 'SYSTEM FEEDBACK':
						titlePro.innerHTML = itenp;
						descPro.innerHTML = "System created to show a system in PHP used MSQL database for data persistence and MVC methodology can add new feedback, list, view, disable, mark as checked, delete, do searches through various parameters.";
						linkvproj.href = "https://feedbackproject.000webhostapp.com/";
						linkcproj.href = "https://github.com/kleitonADS/feedbackphp";
						imgGif.src = 'img/feedback.gif';
						$('.list_tool_feedback').show('slow');
						$('.list_tool_profile').hide('slow');
						$('.list_tool_basefe').hide('slow');
						break;

					case 'PROJECT BASE FRONT-END':
						titlePro.innerHTML = itenp;
						descPro.innerHTML = "Base project was created used new technologies for the more agility in front-end development, made the project source code cleaner by using various javascripts packages.";
						linkvproj.href = "https://github.com/kleitonADS/jsBaseProject";
						linkcproj.href = "https://github.com/kleitonADS/jsBaseProject";
						imgGif.src = 'img/basefe.gif';
						$('.list_tool_feedback').hide('slow');
						$('.list_tool_profile').hide('slow');
						$('.list_tool_basefe').show('slow');
						break;


					default:
						// code
						break;
				}
			});
		}
