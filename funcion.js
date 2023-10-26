const frm = document.querySelector('#frm');
const email = document.querySelector('#email');
const registrar = document.querySelector('#registrar');



registrar.addEventListener('click', e=>{
 e.preventDefault()
 
 var mensaje = document.querySelector("#msgerror");
 var correo = email.value;
 var expresionRegular = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    
    if (expresionRegular.test(correo)) {
        mensaje.classList.remove("error");        
        mensaje.textContent = "El correo electrónico es válido.";
        window.location.href = "success.html";
    } else {
        mensaje.classList.add("error");
        mensaje.textContent = "El correo electrónico no es válido.";
    }
})



/*frm.addEventListener("submit", (event)=> {
 event.preventDefault;
 alert(email.value)
  if(email.value === "" && !email.classList.contains("error")){

  }   
})

function validarCorreo() {
    var correoInput = document.document.querySelector('#email');;
    var mensaje = document.querySelector("#msgerror");
    var correo = correoInput.value;
    // Expresión regular para validar un correo electrónico
    var expresionRegular = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    
    if (expresionRegular.test(correo)) {
        mensaje.textContent = "El correo electrónico es válido.";
    } else {
        mensaje.innerHTML = "El correo electrónico no es válido. Por favor, ingresa un correo válido.";
    }
}*/


