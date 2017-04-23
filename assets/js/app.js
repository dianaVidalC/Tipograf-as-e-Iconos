var body=document.getElementsByTagName("body")[0];

var header=document.createElement("header");
var divLeft=document.createElement("div");
var divRight=document.createElement("div");
var logoMedium=document.createElement("img");
var figureMedium=document.createElement("figure");
var imagenLaboratoria=document.createElement("img");
var iconoTwitter=document.createElement("span");
var iconoFace=document.createElement("span");

var edit=document.createElement("input");
var lupa=document.createElement("span");
var logoNumero=document.createElement("span");
var fotoHeader=document.createElement("img");
var logoLab=document.createElement("img");

var contenedor=document.createElement("section");
var headerContenedor=document.createElement("div");
var fotoContenedor=document.createElement("img");
var nombre=document.createElement("h2");
var descripcion=document.createElement("p");
var parrafoFecha=document.createElement("p");

var historia=document.createElement("section");
var titulo=document.createElement("h1");
var parrafo=document.createElement("p");
var parrafoCursivo=document.createElement("span");
var parrafoFinal=document.createElement("span");
var footer=document.createElement("footer");
var footerLeft=document.createElement("div");
var footerRight=document.createElement("div");
var corazon=document.createElement("span");
var comentario=document.createElement("span");
var iconoTwitter2=document.createElement("span");
var iconoFace2=document.createElement("span");
var marcador=document.createElement("span");
var tituloNext=document.createElement("h4");
var parrafoNext=document.createElement("p");

divLeft.setAttribute("id","div-left");
divRight.setAttribute("id","div-right");
logoMedium.setAttribute("src","assets/img/medium_logo.png")
logoMedium.setAttribute("id","medium");
figureMedium.setAttribute("id","figure");
imagenLaboratoria.setAttribute("src","assets/img/laboratoria.png")
imagenLaboratoria.setAttribute("id","imagen-lab");
iconoTwitter.classList.add("icon-social-twitter");
iconoTwitter.setAttribute("id","icon-twitter");
iconoFace.classList.add("icon-facebook-with-circle");
iconoFace.setAttribute("id","icon-facebook");
edit.setAttribute("type","text");
edit.setAttribute("value","Edit");
edit.setAttribute("id","edit");
lupa.classList.add("icon-search");
lupa.setAttribute("id","search");
logoNumero.classList.add("icon-looks_5");
logoNumero.setAttribute("id","icon-5");
fotoHeader.setAttribute("src","assets/img/foto-medium.jpeg");
fotoHeader.setAttribute("id","fotoHeader");
logoLab.setAttribute("src","assets/img/laboratoria-logo.png");
logoLab.setAttribute("id","logo-lab");
contenedor.setAttribute("id","contenedor");
headerContenedor.classList.add("contenido");
fotoContenedor.setAttribute("src","assets/img/foto-medium.jpeg");
fotoContenedor.setAttribute("id","foto-contenedor");
descripcion.classList.add("parrafo");
parrafoFecha.classList.add("parrafo");
parrafoFecha.setAttribute("id","parrafo2");
historia.setAttribute("id","historia");
titulo.setAttribute("id","titulo");
parrafo.setAttribute("id","parrafo");
corazon.classList.add("icon-heart-o");
corazon.setAttribute("id","icon-heart");
comentario.classList.add("icon-bubble2");
comentario.setAttribute("id","icon-bubble2");
iconoTwitter2.classList.add("icon-social-twitter");
iconoFace2.classList.add("icon-facebook");
marcador.classList.add("icon-bookmark");
footerLeft.setAttribute("id","footer-left");
footerRight.setAttribute("id","footer-right");
iconoTwitter2.setAttribute("id","icon-twitter2");
iconoFace2.setAttribute("id","icon-facebook2");
marcador.setAttribute("id","bookmark")
parrafoCursivo.setAttribute("id","cursivo");

figureMedium.appendChild(logoMedium);
divLeft.appendChild(figureMedium);
divLeft.appendChild(imagenLaboratoria);
divLeft.appendChild(iconoTwitter);
divLeft.appendChild(iconoFace);
divRight.appendChild(edit);
divRight.appendChild(lupa);
divRight.appendChild(logoNumero)
divRight.appendChild(fotoHeader);
divRight.appendChild(logoLab);

header.appendChild(divLeft);
header.appendChild(divRight);
headerContenedor.appendChild(fotoContenedor);
headerContenedor.appendChild(nombre);
headerContenedor.appendChild(descripcion);
headerContenedor.appendChild(parrafoFecha);
nombre.appendChild(document.createTextNode("Belen Recabal"));
descripcion.appendChild(document.createTextNode("Teaching Assitant at Laboratoria. Trabajando para ver a más mujeres en el mundo de la programación."));
parrafoFecha.appendChild(document.createTextNode("Mar 21 - 6 min read"));
titulo.appendChild(document.createTextNode("Hazlo con estilo : Tipografías, íconos y sprite"));
parrafo.appendChild(document.createTextNode("Te imaginas el mundo sin tipos de letras, tamaños, colores o sin íconos, nada, nada sería iguaaaaaaaaal!!! Pero gracias a muchos desarrolladores y diseñadores, hoy contamos con una inimaginable gama de fuentes para nuestro desarrollos web, pero la pregunta que nos hacemos es,"));
parrafoCursivo.appendChild(document.createTextNode(" ¿existen reglas, hay una mejor forma de hacerlo, no sé que tipografía usar?"));
parrafoFinal.appendChild(document.createTextNode(" Tengo muchas preguntas y pocas respuestas!!!"));
tituloNext.appendChild(document.createTextNode("Next story"));
parrafoNext.appendChild(document.createTextNode("Describiendo el flujo de trabajo en ..."));

footerLeft.appendChild(corazon);
footerLeft.appendChild(comentario);
footerRight.appendChild(iconoTwitter2);
footerRight.appendChild(iconoFace2);
footerRight.appendChild(marcador);
footerRight.appendChild(tituloNext);
footerRight.appendChild(parrafoNext);
footer.appendChild(footerLeft);
footer.appendChild(footerRight);

historia.appendChild(titulo);
historia.appendChild(parrafo);
historia.appendChild(parrafoCursivo);
historia.appendChild(parrafoFinal);
contenedor.appendChild(headerContenedor);
contenedor.appendChild(historia);
body.appendChild(header);
body.appendChild(contenedor);
body.appendChild(footer);
