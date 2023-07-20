
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
const mensaje_dia = "Para mi chica viendo Starlink. Te amo";
const cancion_dia = "https://open.spotify.com/embed/track/6qRmb4uhIUaWE5LySgSfQS?utm_source=generator";

const imagen1_dia = "dia41.jpg";
const imagen2_dia = "";

const poema_autor = "I carry your heart with me by E.E Cummings"
const poema_texto = `
i carry your heart with me(i carry it in
    my heart)i am never without it(anywhere
    i go you go,my dear;and whatever is done
    by only me is your doing,my darling)
        <br>                                                  
    i fear no fate(for you are my fate,my sweet)i want
    no world(for beautiful you are my world,my true)
    and it’s you are whatever a moon has always meant
    and whatever a sun will always sing is you
    <br>
    here is the deepest secret nobody knows
    (here is the root of the root and the bud of the bud
    and the sky of the sky of a tree called life;which grows
    higher than soul can hope or mind can hide)
    and this is the wonder that's keeping the stars apart
    <br>
    i carry your heart(i carry it in my heart)
`

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