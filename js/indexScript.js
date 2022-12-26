
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
const mensaje_dia = "Si pudiese pedir absolutamente cualquier regalo<br> te pediría a ti.";
const cancion_dia = "https://open.spotify.com/embed/track/6taNQNGdyo6PN4DPlYFf08?utm_source=generator";
const imagen1_dia = "dia38.jpg";
const imagen2_dia = "dia38_2.jpg";
const poema_autor = "Bird Understander by Craig Arnold"
const poema_texto = `
Of many reasons I love you here is one<br><br>

the way you write me from the gate at the airport<br>
so I can tell you everything will be alright<br><br>

so you can tell me there is a bird<br>
trapped in the terminal      all the people<br>
ignoring it       because they do not know<br>
what to do with it       except to leave it alone<br>
until it scares itself to death<br><br>

it makes you terribly terribly sad<br><br>

You wish you could take the bird outside<br>
and set it free or       (failing that)<br>
call a bird-understander<br>
to come help the bird<br><br>

All you can do is notice the bird<br>
and feel for the bird       and write<br>
to tell me how language feels<br>
impossibly useless<br><br>

but you are wrong<br><br>

You are a bird-understander<br>
better than I could ever be<br>
who make so many noises<br>
and call them song<br>

These are your own words<br>
your way of noticing<br>
and saying plainly<br>
of not turning away<br>
from hurt<br><br>

you have offered them<br>
to me       I am only<br>
giving them back<br><br>

if only I could show you<br>
how very useless<br>
they are not`;

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