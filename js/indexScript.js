// window.alert("Quiero hacerme viejo de besito en besito \n tu bicho");

let rana = document.getElementsByClassName("mensaje_rana")[0];
let cubierta = document.getElementsByClassName("cubierta")[0];

rana.addEventListener("click", () => {
    rana.classList.add("desaparece");
    rana.classList.remove("mensaje_rana");

    cubierta.classList.remove("cubierta");
    cubierta.classList.add("desaparece");
})