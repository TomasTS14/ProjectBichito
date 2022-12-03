
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
const mensaje_dia = "Las ranitas croan para que<br> se les quite la acidez";
const cancion_dia = "https://open.spotify.com/embed/track/2RUD1gvn7EcdaUy1koIq9Z?utm_source=generator";
const imagen1_dia = "dia35.jpg";
const imagen2_dia = "";
const poema_autor = "Noche Del Amor Insomne de Federico García Lorca"
const poema_texto = `
Noche arriba los dos con luna llena,<br>
yo me puse a llorar y tú reías.<br>
Tu desdén era un dios, las quejas mías<br>
momentos y palomas en cadena.<br>
<br>

Noche abajo los dos. Cristal de pena,<br>
llorabas tú por hondas lejanías.<br>
Mi dolor era un grupo de agonías<br>
sobre tu débil corazón de arena.<br>
<br>

La aurora nos unió sobre la cama,<br>
las bocas puestas sobre el chorro helado<br>
de una sangre sin fin que se derrama.<br>
<br>

Y el sol entró por el balcón cerrado<br>
y el coral de la vida abrió su rama<br>
sobre mi corazón amortajado.`;

///PARA AGREGAR CANCION E IMAGENES////////////////////////////////////////////////
function init() {
    for (let i = 0; i < 2; i++) {
        mensaje_rana[i].innerHTML = mensaje_dia

        songIFrame[i].setAttribute("src", cancion_dia);
        imagen1[i].setAttribute("src", "../resources/" + imagen1_dia);
        if (imagen2_dia != "") {
            imagen2[i].setAttribute("src", "../resources/" + imagen2_dia);
        }

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