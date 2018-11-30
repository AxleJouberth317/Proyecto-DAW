$(function(){

$( "#formu" ).validate({
	rules: {
		nombre:{
			required:true,
			nombre:true,
		},
		apellido:{
			required:true,
			apellido:true,
		},
		correo:{
			required:true,
			correo:true,
		},
		mensaje:{
			required:true,
			mensaje:true,
		},
	

	}
});
});
