/* CARTA */
const texto = 
`Mi amor 💙

Mi chaparrita hermosa…
Cachetoncita preciosa…
Dueña de mis suspiros y guardiana de mi corazón.

Chonita mia, eres mi felicidad, 
mi orgullo entero y mi sostén eterno. 
No existen palabras suficientes para describir 
todo lo que siento por ti, aunque en realidad 
no hacen falta… porque tu corazón 
siempre ha sabido leer el mío.

Me encantan tus ojitos bonitos, 
esos que brillan como si guardaran universos dentro. 
Me enamora cada parte de ti: 
tu risa, tu forma de ser, tu dulzura, 
incluso tus pequeñas manías 
que me hacen sonreír sin darme cuenta. 
Te admiro profundamente por todo lo que eres, 
por tu esencia tan única, por tu fuerza, 
por tu ternura y por esa luz tan tuya que ilumina mi vida.

Amo estar contigo… en cada instante, en cada abrazo,
en cada mirada que nos dice todo sin hablar. 
Amo nuestras ocurrencias, tus bromas, 
tu personalidad tan viva, nuestras citas improvisadas, 
esas tardes en las que comemos juntos hasta reventar 
mientras el mundo desaparece y solo existimos tú y yo.

Has llenado mi vida de alegría, de paz,
de un amor que jamás imaginé sentir. 
La has vuelto más bonita, más cálida, más viva… 
simplemente porque estás tú en ella.

Y por todo eso, hoy solo quiero preguntarte una cosa: ❤️`;

let i = 0;
const carta = document.getElementById("textoCarta");

function escribir(){
if(i < texto.length){
carta.innerHTML += texto.charAt(i);
i++;
setTimeout(escribir,40);
}
}
escribir();

/* CONTINUAR */
document.getElementById("btnContinuar").onclick = () => {

document.getElementById("musica").play();
document.documentElement.requestFullscreen();

document.getElementById("carta").style.display="none";
document.getElementById("final").classList.remove("oculto");
};

/* BOTON NO ESCAPA */
const btnNo = document.getElementById("btnNo");

document.addEventListener("mousemove",(e)=>{

const rect = btnNo.getBoundingClientRect();
const dist = Math.hypot(e.clientX-rect.left,e.clientY-rect.top);

if(dist < 120){

let x = Math.random() * (window.innerWidth - btnNo.offsetWidth - 20);
let y = Math.random() * (window.innerHeight - btnNo.offsetHeight - 20);

if(x < 10) x = 10;
if(y < 10) y = 10;

btnNo.style.left = x + "px";
btnNo.style.top = y + "px";
}
});


/* EXPLOSION */
function respuestaSi(){

document.getElementById("mensajeFinal").innerHTML =
"💙 Sabía que dirías que sí 💙<br>❤️ Te amo muchísimo mi amor ❤️<br>❤️ PDT. Unos tulipanes para la loquita de mis males 🥰❤️";

for(let i=0;i<90;i++){
const c=document.createElement("span");
c.innerHTML="💙";
c.style.position="absolute";
c.style.left="50%";
c.style.top="50%";

const ang=Math.random()*2*Math.PI;
const rad=Math.random()*300;

c.animate([
{transform:"translate(0,0)",opacity:1},
{transform:`translate(${Math.cos(ang)*rad}px,${Math.sin(ang)*rad}px)`,opacity:0}
],{duration:1500,easing:"ease-out"});

document.body.appendChild(c);
setTimeout(()=>c.remove(),1500);
}
}

/* CORAZONES LLUVIA */
function crearCorazon(){
const c=document.createElement("span");
c.innerHTML="💙";
c.style.left=Math.random()*100+"vw";
c.style.animationDuration=(Math.random()*3+2)+"s";
document.querySelector(".corazones").appendChild(c);
setTimeout(()=>c.remove(),5000);
}
setInterval(crearCorazon,300);
