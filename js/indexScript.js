
//////////////////////////////////ELEMENTOS/////////////////////////////////////
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


//////////////////////////CONSTANTES/////////////////////////////////////////////////////////////
const mensaje_dia = "Por nuevos comienzos";
const cancion_dia = "https://open.spotify.com/embed/track/2RLm6OrnjLuoyQEowCJ6QE?utm_source=generator";

// const imagenes = []
// for (let i = 1; i < 102; i++) {
//     imagenes.push("dia39_(" + i + ").jpg")
// }
const poema_autor = "May Night by Sara Teasdale"
const poema_texto = `
The spring is fresh and fearless<br>
And every leaf is new,<br>
The world is brimmed with moonlight,<br>
The lilac brimmed with dew.<br>
<br>
Here in the moving shadows<br>
I catch my breath and sing,<br>
My heart is fresh and fearless<br>
And over-brimmed with spring.`

///PARA AGREGAR CANCION E IMAGENES////////////////////////////////////////////////
function init() {
    for (let i = 0; i < 2; i++) {
        mensaje_rana[i].innerHTML = mensaje_dia

        songIFrame[i].setAttribute("src", cancion_dia);
        // const imagenDiaWrapper = document.querySelectorAll(".imagenDia")[i]

        // imagenes.forEach(imagenUrl => {

        //     const img = document.createElement("img");
        //     img.setAttribute("src", "../resources/" + imagenUrl);

        //     imagenDiaWrapper.append(img);

        // })

        tituloPoesia[i].textContent = poema_autor

        poema[i].innerHTML = poema_texto
    }
}
init();


/////////////////////////////EVENT LISTENERS////////////////////////////////////////////

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