$(document).ready(function() {
	$("#registro").validate({
	  rules: {
	  nombre: { required: true, minlength: 4},
	  apellidoP: { required: true, minlength: 4},
	  apellidoM: { required: true, minlength: 4},
	  idDomicilio: { required:true, number: true},
	  correo: { required:true, email: true},
	  calle: { required: true, minlength: 4},
	  numCasa: { required: true, number: true, min: 1},
	  colonia: { required: true, minlength: 4},
	  },
	  messages: {
	  nombre: "<span class='error'>Debe haber minimo 4 caracteres </span>",
	  apellidoP : "<span class='error'>Debe haber minimo 4 caracteres</span>",
	  apellidoM : "<span class='error'>Debe haber minimo 4 caracteres</span>",
	  correo : "<span class='error'>El campo es obligatorio y debe tener formato de email correcto.</span>",
	  idDomicilio : "<span class='error'>El campo solo lleva numeros</span>",
	  calle:"<span class='error'>Debe haber minimo 4 caracteres </span>",
	  numCasa:"<span class='error'>Deben ser solo numeros </span>",
	  colonia:"<span class='error'>Debe haber minimo 4 caracteres </span>",
	  }
	});
  });
