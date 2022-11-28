// window.alert("Quiero hacerme viejo de besito en besito \n tu bicho");

let rana = document.getElementsByClassName("mensaje_rana")[0];
let cubierta = document.getElementsByClassName("cubierta")[0];

let rana1 = document.getElementsByClassName("mensaje_rana")[1];
let cubierta1 = document.getElementsByClassName("cubierta")[1];

let botonSong = document.getElementsByClassName("shortcut")[0];
let botonPic = document.getElementsByClassName("shortcut")[1]

let containerSong = document.getElementsByClassName("content_container")[0]
let containerPic = document.getElementsByClassName("content_container")[1]

let mensaje_rana = document.getElementsByClassName("mensaje_rana_texto");
let songIFrame = document.getElementsByTagName("iframe");
let imagen1 = document.getElementsByClassName("imagen1");
let imagen2 = document.getElementsByClassName("imagen2");

let tituloPoesia = document.getElementsByClassName("tituloPoesia");
let poema = document.getElementsByClassName("poema");

///PARA AGREGAR CANCION E IMAGENES////////////////////////////////////////////////
function init() {
    for (let i = 0; i < 2; i++) {
        mensaje_rana[i].innerHTML = "Hoy no sabía bien que decir<br>asi que digo te amo."

        songIFrame[i].setAttribute("src", "https://open.spotify.com/embed/track/5IafdoRLyaGPeeA6f8ysIe?utm_source=generator");
        imagen1[i].setAttribute("src", "../resources/dia30.jpg");
        imagen2[i].setAttribute("src", "../resources/dia30_2.jpg");

        tituloPoesia[i].textContent = "By Rupi Kaur"

        poema[i].innerHTML = "how you love yourself is<br>how you teach others<br>to love you"
    }
}
init();


/////////////////////////////////////////////////////////////////////////

for (const boton of document.getElementsByClassName("shortcut")) {
    boton.addEventListener("touchstart", () => {
        boton.classList.add("shortcut_focus")
    })
    boton.addEventListener("touchend", () => {
        boton.classList.remove("shortcut_focus")
    })
}

botonSong.addEventListener("touchend", () => {
    containerSong.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
})

botonPic.addEventListener("touchend", () => {
    containerPic.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
})

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