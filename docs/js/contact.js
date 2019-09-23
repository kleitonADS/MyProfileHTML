// Submit form

var submitted = false;

$('#form1').on('submit', function(e) {

	$('#form-main').hide('slow');
	$('#mensage_send').show('slow');
	$('#name').val('');
	$('#email').val('');
	$('#comment').val('');

	var name = document.getElementById('showform').name;
	document.getElementById('showform').name = "show";

});

// Efect show form
$(document).ready(function(){
	$('#showform').click(function(event){
		event.preventDefault();
		var name = document.getElementById('showform').name;

		if(name == 'show'){

			$('#form-main').show('slow');
			$('#mensage_send').hide();
			document.getElementById('showform').name = "";


		}else{

			$('#form-main').hide('slow');
			document.getElementById('showform').name = "show";
		}


	});

});
