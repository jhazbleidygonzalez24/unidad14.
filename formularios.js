var nombre = document.getElementById ("nombre");
var Apellido = document.getElementById ("Apellido");
var Numerodecedula = document.getElementById ("Numero de cedula");
var Numerodecedula2 = document.getElementById ("Numero de cedula");
var Númerodocumentopaciente = document.getElementById ("Numero de cedula");
var consultorio = document.getElementById ("consultorio");
var correodecontacto = document.getElementById ("correo de contacto");
var Edad = document.getElementById ("Edad")
var Telefono = document.getElementById ("Telefono")
var listadesplegabledelaespecialidad = document.getElementById ("lista desplegable de la especialidad");
var error = document.getElementById ("error");

error.style.color = "white"

function enviarformulario() {
    console.log ("enviar formulario");

    var mensajeserror = [];

    if ( nombre.value  === null || nombre.value  ==="") {
        mensajeserror.push("ingresa tu nombre");
    }

    if ( Apellido.value  === null || Apellido.value  ==="") {
        mensajeserror.push("ingresa tu Apellido");
    }

    if ( Numerodecedula.value  === null || Numerodecedula.value  ==="") {
        mensajeserror.push("ingresa tu Numero de cedula");
    }

    if ( consultorio.value  === null || consultorio.value  ==="") {
        mensajeserror.push("ingresa tu consultorio");
    }

    if ( correodecontacto.value  === null || correodecontacto.value  ==="") {
        mensajeserror.push("ingresa tu correo de contacto");
    }

    const reg_exnombre =  /^[a-zA-ZÀ-ÿ\\s]{1,40}$/i;  // Letras y espacios, pueden llevar acentos.
    const elnombreEsValido =reg_exnombre.test(nombre.value)
    console.log(nombre.value, elnombreEsValido)

    if (!elnombreEsValido){
        mensajeserror.push("nombre no valido");
    }
    
    const reg_exApellido =  /^[a-zA-ZÀ-ÿ\\s]{1,40}$/i;  // Letras y espacios, pueden llevar acentos.
    const elApellidoEsValido =reg_exApellido.test(Apellido.value)
    console.log(Apellido.value, elApellidoEsValido)

    if (!elApellidoEsValido){
        mensajeserror.push("Apellido no valido");
    }

    const reg_exNumerodecedula =   /^\d{7,14}$/  // 7 a 14 numeros.
    const elNumerodecedulaEsValido =reg_exNumerodecedula.test(Numerodecedula.value)
    console.log(Numerodecedula.value, elNumerodecedulaEsValido)

    if (!elNumerodecedulaEsValido){
        mensajeserror.push("Numero de cedula no valido");
    }

    const reg_exconsultorio =   /^\d{4}$/  // 4 numeros.
    const elconsultorioEsValido =reg_exconsultorio.test(consultorio.value)
    console.log(consultorio.value, elconsultorioEsValido)

    if (!elconsultorioEsValido){
        mensajeserror.push("consultorio no valido");
    }

    const reg_excorreodecontacto = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    const elcorreodecontactoEsValido =reg_excorreodecontacto.test(correodecontacto.value)
    console.log(correodecontacto.value, elcorreodecontactoEsValido)

    if (!elcorreodecontactoEsValido){
        mensajeserror.push("correo de contacto no valido");
    }
} 

function enviandoformulario() {
    console.log ("enviando formulario");

    var mensajeserror = [];

    if ( nombre2.value === null || nombre.value  ==="") {
        mensajeserror.push("ingresa tu nombre");
    }

    if ( Apellido2.value  === null || Apellido.value  ==="") {
        mensajeserror.push("ingresa tu Apellido");
    }

    if ( Numerodecedula2.value  === null || Numerodecedula2.value  ==="") {
        mensajeserror.push("ingresa tu Numero de cedula");
    }

    if ( Edad.value  === null || Edad.value  ==="") {
        mensajeserror.push("ingresa tu Edad");
    }

    if ( Telefono.value  === null || Telefono.value  ==="") {
        mensajeserror.push("ingresa tu Telefono");
    }

    const reg_exnombre2 =  /^[a-zA-ZÀ-ÿ\\s]{1,40}$/i;  // Letras y espacios, pueden llevar acentos.
    const elnombre2EsValido =reg_exnombre2.test(nombre2.value)
    console.log(nombre2.value, elnombre2EsValido)

    if (!elnombre2EsValido){
        mensajeserror.push("nombre no valido");
    }
    
    const reg_exApellido2 =  /^[a-zA-ZÀ-ÿ\\s]{1,40}$/i; // Letras y espacios, pueden llevar acentos.
    const elApellido2EsValido =reg_exApellido2.test(Apellido2.value)
    console.log(Apellido2.value, elApellido2EsValido)

    if (!elApellido2EsValido){
        mensajeserror.push("Apellido no valido");
    }

    const reg_exNumerodecedula2 =   /^\d{7,14}$/  // 7 a 14 numeros.
    const elNumerodecedula2EsValido =reg_exNumerodecedula2.test(Numerodecedula2.value)
    console.log(Numerodecedula2.value, elNumerodecedula2EsValido)

    if (!elNumerodecedula2EsValido){
        mensajeserror.push("Numero de cedula no valido");
    }

    const reg_exEdad =   /^\d{1,2}$/  // 4 numeros.
    const elEdadEsValido =reg_exEdad.test(Edad.value)
    console.log(Edad.value, elEdadEsValido)

    if (!elEdadEsValido){
        mensajeserror.push("Edad no valido");
    }

    const reg_exTelefono = / ^ \d { 7,14 } $ /  // 7 a 14 numeros.
    const elTelefonoEsValido =reg_exTelefono.test(Telefono.value)
    console.log(Telefono.value, elTelefonoEsValido)

    if (!elTelefonoEsValido){
        mensajeserror.push("Telefono no valido");
    }
}

    function enviaformulario() {
        console.log ("enviando formulario");
    
        var mensajeserror = [];
    
        if ( Númerodocumentopaciente.value === null || Númerodocumentopaciente.value  ==="") {
            mensajeserror.push("ingresa tu nombre");
        }
    
    
        const reg_exNúmerodocumentopaciente = / ^ \d { 7,14 } $ /  // 7 a 14 numeros.
        const elNúmerodocumentopacienteEsValido =reg_exNúmerodocumentopaciente.test(Númerodocumentopaciente.value)
        console.log(Númerodocumentopaciente.value, elNúmerodocumentopacienteEsValido)
    
        if (!elNúmerodocumentopacienteEsValido){
            mensajeserror.push("Número documento paciente no valido");
        }
        
         
    
    error.innerHTML = mensajeserror.join(",");

    return false;

} 