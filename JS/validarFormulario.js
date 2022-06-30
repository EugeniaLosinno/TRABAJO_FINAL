let bt1Enviar = document.getElementById("bt1Enviar");
let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let pass = document.getElementById("pass");
let sexoFemenino = document.getElementById("sexoFemenino");
let sexoMasculino = document.getElementById("sexoMasculino");
let sexoOtro = document.getElementById("sexoOtro");
let queTeGustaMontana = document.getElementById("queTeGustaMontana");
let queTeGustaSierra = document.getElementById("queTeGustaSierra");
let queTeGustaMar = document.getElementById("queTeGustaMar");
let queTeGustaValle = document.getElementById("queTeGustaValle");

let respuesta = document.getElementById("respuesta");
    
let lleva, nombreIngresado, apellidoIngresado, passIngresado;
    
lleva="";

bt1Enviar.addEventListener("click", (evento) => {
  evento.preventDefault();
  let correcto = true;   
  nombreIngresado = nombre.value; 
  apellidoIngresado = apellido.value; 
  passIngresado = pass.value; 
   
  if (nombreIngresado ==""){
     correcto=false;
  }

  if (apellidoIngresado ==""){
    correcto=false;
  }

  if (passIngresado ==""){
    correcto=false;
  }

  if ((sexoFemenino.checked == false) && (sexoMasculino.checked == false) && (sexoOtro.checked == false)){
    correcto=false;
  }
  
  if ((queTeGustaMontana.checked == false) && (queTeGustaSierra.checked == false) && (queTeGustaMar.checked == false) && (queTeGustaValle.checked == false))
  {
    correcto=false;
   
  }else if (queTeGustaMontana.checked == true)
        {
              lleva="Abrigo";
        }
        else if (queTeGustaSierra.checked == true)
           {
              lleva ="Zapatillas para Treking";
           }
           else if (queTeGustaMar.checked == true){
                     lleva ="Malla";
                  }else{
                     lleva ="Zapatillas"
                    }        
  
if(!correcto){ 
  alert('Algunos campos no están correctos, vuelva a revisarlos');
  respuesta.innerHTML = "Algunos campos no están correctos, vuelva a revisarlos";
  console.log(respuesta.innerHTML);
}else{
  alert('Completaste correctamente el formulario. No te olvides de llevar '+ lleva);
  respuesta.innerHTML = 'Completaste correctamente el formulario. No te olvides de llevar '+ lleva;
  console.log(respuesta.innerHTML);
}

});


