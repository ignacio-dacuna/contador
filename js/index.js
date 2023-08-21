const contador = document.getElementById("contar");
const sumar = document.getElementById("incr");
const restar = document.getElementById("decr");
const reset = document.getElementById("reset");

const contador2 = document.getElementById("contar2");
const sumar2 = document.getElementById("incr2");
const restar2 = document.getElementById("decr2");

let numero = 0;

sumar.addEventListener("click", ()=>{
    numero++;
    contador.innerHTML = numero;
});

restar.addEventListener("click", ()=>{

    if(numero==0){}
    else{
        numero--;
        contador.innerHTML = numero;
    }

});

reset.addEventListener("click", ()=>{
    numero = 0;
    contador.innerHTML = numero;
});

/*--------------------------------------------------------------------------------------*/ 

sumar2.addEventListener("click", ()=>{
    numero++;
    contador2.innerHTML = numero;
});

restar2.addEventListener("click", ()=>{

    if(numero==0){}
    else{
        numero--;
        contador2.innerHTML = numero;
    }

});

reset.addEventListener("click", ()=>{
    numero = 0;
    contador2.innerHTML = numero;
});
