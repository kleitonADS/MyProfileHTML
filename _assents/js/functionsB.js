

// Menu Toogle
$('.hamburger').click(function(){
	$(this).toggleClass('is-active');
	$('.menu').toggleClass('on');
});

$('#laguage').on('change', function() {
	var nameSelect  = this.value;
	if(nameSelect == 'Portugues'  ){
		location.href = "index-br.html";
	}
	if(nameSelect == 'Ingles'  ){
		location.href = "index.html";
	}

});

$('#form-main').hide();
$('.link-resume').hide();
$('.next-step ').hide();

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

// Link Resume
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

// FLuting Menu
$('.menu li').click(function(){
	$('.menu').removeClass('on');
	$('.hamburger').removeClass('is-active');
});

// Выбор секции в навигации первый способ//
$('.pages li a').click(function(){
	$('.pages li a').parent().children().removeClass('is-active');
	$(this).addClass('is-active');
});

//плавный скролл
	$(".menu").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();
		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),
		//узнаем высоту от начала страницы до блока на который ссылается якорь
		top = $(id).offset().top;
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1000 );

	});

// устанваливаем отступ сверху фиксированного меню
var tmenu = $('.menu-nav').position().top + $('.menu-nav').data('position');
$('.menu-nav').css({
	'top': tmenu
});



// функция для автоматической навигации или при скроле //
$(window).scroll(function(){

	var wScroll = $(this).scrollTop();
	var heightheader = $('#header').height()-80;

	/// Фиксированое меню ...
  // фиксируем меню при скроле
	if (wScroll < (heightheader ) ) {

		$('.menu-nav').addClass('js-active-transparent');
		$('.hamburger').css({
			'top':'40px'
		});
		$('.logo-header').css({
			'background-image': 'url("img/logo-header.svg")no-repeat'
		});
		$('.line').css({
			'background-color': '#fff'
		});
		$('.select-header select').css({
			'background-image': 'url("img/arrow_down.svg")',
			'border':' 2px solid #fff',
			'color': '#fff',
			'background-color': 'transparent'

		});
		$('.menu-nav .content-flex-nav .logo-header .name-menu').css({
			'display': 'none'
		});

		$( "#laguage" ).mouseover(function() {
			$('.select-header select').css({
				'background-image': 'url("img/arrow_down-b.svg")',
				'border':' 2px solid #1175ee',
				'color': '#1175ee',
				'background-color': '#fff'

			});
		});

		$( "#laguage" ).mouseout(function() {
			$('.select-header select').css({
				'background-image': 'url("img/arrow_down.svg")',
				'border':' 2px solid #fff',
				'color': '#fff',
				'background-color': 'transparent'

			});
		});

	}

	if (wScroll >= heightheader ) {
		$('.menu-nav').removeClass('js-active-transparent');
		$('.menu-nav').addClass('js-active');
		$('.hamburger').css({
			'top':'0px'
		});



		if($(".menu").hasClass("on") ){
			$('.hamburger').css({
				'top':'40px'
			});
		}







		$('.logo-header').css({
			'background-image': 'url("img/logo-headerf.svg")no-repeat'
		});

		$('.line').css({
			'background-color': '#1175ee'
		});

		$('.menu-nav .content-flex-nav .logo-header .name-menu').css({
			'display': 'flex'
		});

		$('.select-header select').css({
			'background-image': 'url(img/arrow_down-b.svg)',
			'border':' 2px solid #1175ee',
			'color': '#1175ee'

		});

		$( "#laguage" ).mouseover(function() {
			$('.select-header select').css({
				'background-image': 'url(img/arrow_down.svg)',
				'border':' 2px solid #fff',
				'color': '#fff',
				'background-color': '#1175ee'

			});
		});

		$( "#laguage" ).mouseout(function() {
			$('.select-header select').css({
				'background-image': 'url(img/arrow_down-b.svg)',
				'border':' 2px solid #1175ee',
				'color': '#1175ee',
				'background-color': '#fff'
			});

		});


	}
  alert(tmenu);
	if ( tmenu > wScroll) {
		$('.menu-nav').removeClass('js-active');
	}

	/// навигация по сайту
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

	if(wScroll > $('#app-li').offset().top - 100){
		$('.pages li a').parent().children().removeClass('is-active');
		$('.pages li a.page-app-li').addClass('is-active');
	}

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
			self.context.lineWidth = 12;
			self.context.fillStyle = "#fff";
			self.context.strokeStyle = "#fff";
			self.context.textAlign = "center";
			self.context.font = "20px futurabt";
			self.context.fillText( self.loaded + "%", self.width * .5 , self.height * .5 + 4, self.width );
			self.context.beginPath();
			self.context.arc( 50, 50, 50, self.start, self.diff / 10 + self.start, false );
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



function chanceButton(x){
	x.style.color      = "#1175ee";
	x.style.border     = "2px solid";
	x.style.border     = "radius: 10px";
	x.style.background = "white";
}

function normalImg(x){
	x.style.color      = "white";
	x.style.border     = "2px solid";
	x.style.border     = "radius: 10px";
	x.style.background = "#1175ee";
}
