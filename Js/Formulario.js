$(document).ready(function(){

    $('#btnSend').click(function(event){

        event.preventDefault(); // Detener envío del formulario por defecto

        var errores = '';

      
        var nombre = $('#names').val();
        if (nombre.length < 3) {
            errores += '<p>El nombre debe tener al menos 3 letras.</p>';
            $('#names').css("border-bottom-color", "#F14B4B");
        } else {
            $('#names').css("border-bottom-color", "#d1d1d1");
        }

      
        var correo = $('#email').val();
        if (!correo.includes('@')) {
            errores += '<p>El correo electrónico debe contener "@".</p>';
            $('#email').css("border-bottom-color", "#F14B4B");
        } else {
            $('#email').css("border-bottom-color", "#d1d1d1");
        }

        var telefono = $('#phone').val();
        if (!(/^\d+$/.test(telefono))) {
            errores += '<p>El número de teléfono solo puede contener dígitos.</p>';
            $('#phone').css("border-bottom-color", "#F14B4B");
        } else {
            $('#phone').css("border-bottom-color", "#d1d1d1");
        }

      
        if ($('#mensaje').val() == '') {
            errores += '<p>Por favor, escribe un mensaje.</p>';
            $('#mensaje').css("border-bottom-color", "#F14B4B");
        } else {
            $('#mensaje').css("border-bottom-color", "#d1d1d1");
        }

        // Mostrar errores en un modal si los hay
        if (errores != '') {
            var mensajeModal = '<div class="modal_wrap">'+
                                    '<div class="mensaje_modal">'+
                                        '<h3>Errores encontrados</h3>'+
                                        errores+
                                        '<span id="btnClose">Cerrar</span>'+
                                    '</div>'+
                                '</div>';

            $('body').append(mensajeModal);
        } else {
            // Si no hay errores, mostrar mensaje de éxito
            alert('Mensaje enviado correctamente');
            
        }

        
        $('#btnClose').click(function(){
            $('.modal_wrap').remove();
        });
    });

  
    $('#email').on('input', function() {
        var correo = $(this).val();
        if (!correo.includes('@')) {
            $(this).css("border-bottom-color", "#F14B4B");
        } else {
            $(this).css("border-bottom-color", "#d1d1d1");
        }
    });

});
