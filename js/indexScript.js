
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
const mensaje_dia = "Si mi corazon es una casa, tu eres la chimenea, el sofa <br> y velas en el atardecer";
const cancion_dia = "https://open.spotify.com/embed/track/2ITBElDqs9w9TrsfRWsZFR?utm_source=generator";
const imagen1_dia = "dia37_1.jpg";
const imagen2_dia = "dia37_2.jpg";
const poema_autor = "Home And Love by Robert William Service"
const poema_texto = `
Just Home and Love! the words are small<br>
Four little letters unto each;<br>
And yet you will not find in all<br>
The wide and gracious range of speech<br>
Two more so tenderly complete:<br>
When angels talk in Heaven above,<br>
I'm sure they have no words more sweet<br>
Than Home and Love.<br>
<br>
Just Home and Love! it's hard to guess<br>
Which of the two were best to gain;<br>
Home without Love is bitterness;<br>
Love without Home is often pain.<br>
No! each alone will seldom do;<br>
Somehow they travel hand and glove:<br>
If you win one you must have two,<br>
Both Home and Love.<br>
<br>
And if you've both, well then I'm sure<br>
You ought to sing the whole day long;<br>
It doesn't matter if you're poor<br>
With these to make divine your song.<br>
And so I praisefully repeat,<br>
When angels talk in Heaven above,<br>
There are no words more simply sweet<br>
Than Home and Love.`;

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