const nombre = document.getElementById("name")
const email = document.getElementById("email")
const pass = document.getElementById("password")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    parrafo.innerHTML = ""
    if(nombre.value.length <6){
        warnings += `El nombre no es valido <br>`
        entrar = true
    }
    if(!regexEmail.test(email.value)){
        warnings += `El email no es valido <br>`
        entrar = true
    }
    if(pass.value.length < 8){
        warnings += `La contraseña no es valida <br>`
        entrar = true
    }

    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = "Enviado"
    }
})


$(document).ready(function(){
    $('#carrusel').slick({
        autoplay: true,  // Si queremos que el carrusel se mueva automáticamente
        autoplaySpeed: 2000,  // Velocidad en milisegundos de cada imagen
        dots: true,  // Si queremos que aparezcan los puntos de navegación debajo del carrusel
        arrows: true  // Si queremos que aparezcan las flechas de navegación en los extremos del carrusel
    });
});