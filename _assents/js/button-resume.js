// Button Resume
$(document).ready(function(){
	$('#showlink').click(function(event){
		event.preventDefault();
		var nameLink = document.getElementById('showlink').name;
		var urlBase = document.location.href;

		if (nameLink  == 'english_resume'){

			window.open("https://kleitonads.github.io/profile/file/engResume.pdf", '_blank');


		}else {

			window.open("https://kleitonads.github.io/profile/file/portResume.pdf", '_blank');

		}

	});
});

// Change color button resume
function chanceButton(x){
	x.style.color      = "#1175ee";
	x.style.border     = "2px solid";
	x.style.border     = "radius: 10px";
	x.style.background = "white";
}

// Back color button resume
function normalImg(x){
	x.style.color      = "white";
	x.style.border     = "2px solid";
	x.style.border     = "radius: 10px";
	x.style.background = "#1175ee";
}
