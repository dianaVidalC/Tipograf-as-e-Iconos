var body=document.getElementsByTagName("body")[0];

var header=document.createElement("header");
var divLeft=document.createElement("div");
var divRight=document.createElement("div");
var logoMedium=document.createElement("img");
var figureMedium=document.createElement("figure");
var imagenLaboratoria=document.createElement("img");
var iconoTwitter=document.createElement("span");
var iconoFace=document.createElement("span");

var edit=document.createElement("a");
var lupa=document.createElement("span");
var logoNumero=document.createElement("span");
var foto=document.createElement("img");
var logoLab=document.createElement("span");

var article=document.createElement("article");
var headerArticle=document.createElement("header");
var titulo=document.createElement("h1");
var parrafo=document.createElement("p");

var footer=document.createElement("footer");
var divfooter=document.createElement("div");
var divSociales=document.createElement("div");
var corazon=document.createElement("span");
var comentario=document.createElement("span");
var iconoTwitter2=document.createElement("span");
var iconoFace2=document.createElement("span");
var marcador=document.createElement("span");
var next=document.createElement("span");

logoMedium.setAttribute("src","assets/img/medium_logo.png")
logoMedium.setAttribute("id","medium");
figureMedium.setAttribute("id","figure");
imagenLaboratoria.setAttribute("src","assets/img/laboratoria.png")
imagenLaboratoria.setAttribute("id","imagen-lab");

figureMedium.appendChild(logoMedium);
divLeft.appendChild(figureMedium);
divLeft.appendChild(imagenLaboratoria);

header.appendChild(divLeft);
body.appendChild(header);
