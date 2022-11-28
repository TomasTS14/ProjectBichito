// window.alert("Quiero hacerme viejo de besito en besito \n tu bicho");

let rana = document.getElementsByClassName("mensaje_rana")[0];
let cubierta = document.getElementsByClassName("cubierta")[0];

let rana1 = document.getElementsByClassName("mensaje_rana")[1];
let cubierta1 = document.getElementsByClassName("cubierta")[1];

rana.addEventListener("click", () => {
    rana.classList.add("desaparece");
    rana.classList.remove("mensaje_rana");

    cubierta.classList.remove("cubierta");
    cubierta.classList.add("desaparece");
})

rana1.addEventListener("touchend", () => {

    rana1.classList.add("desaparece");
    rana1.classList.remove("mensaje_rana");

    cubierta1.classList.remove("cubierta");
    cubierta1.classList.add("desaparece");

})