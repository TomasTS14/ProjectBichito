
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
const mensaje_dia = "Mañana ya estás con Manu y Ana!<br>Espero que me ames alla también t_t<br>TE AMO INFINITO";
const cancion_dia = "https://open.spotify.com/embed/track/0kssq1QKHwRQWNCLlL95YL?utm_source=generator";
const imagen1_dia = "dia32.jpg";
const imagen2_dia = "";
const poema_autor = "A Drinking Song by W.B Yeats"
const poema_texto = `
I whispered, "I am too young,<br>"
And then, "I am old enough";<br>
Wherefore I threw a penny<br>
To find out if I might love.<br>
"Go and love, go and love, young man,<br>
If the lady be young and fair."<br>
Ah, penny, brown penny, brown penny,<br>
I am looped in the loops of her hair.<br>
<br>

O love is the crooked thing,<br>
There is nobody wise enough<br>
To find out all that is in it,<br>
For he would be thinking of love<br>
Till the stars had run away<br>
And the shadows eaten the moon.<br>
Ah, penny, brown penny, brown penny,<br>
One cannot begin it too soon.`;

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