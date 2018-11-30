$(function(){

$( "#contacto" ).validate({
	rules: {
		nombre:{
			required:true,
			nombre:true,
		},
		apellido:{
			required:true,
			apellido:true,
		}
	

	}
});
});
