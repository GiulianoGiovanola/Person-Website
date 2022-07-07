let imagenesgenerales = {
    imagenes : ['assets/imagenes/lago.jpg','assets/imagenes/munecoconluz.jpg','assets/imagenes/tatuaje.jpg'],
    imagenes2 : ['assets/imagenes/mujerroja.jpg','assets/imagenes/china.jpg','assets/imagenes/viejo.jpg'],
    cliente : ['assets/imagenes/aven-white.png', 'assets/imagenes/earth-2.0-white.png', 'assets/imagenes/ideaa-white.png', 'assets/imagenes/zoo-tv-white.png', 'assets/imagenes/circle-white.png'],
    fotos_footer : ['assets/imagenes/mujer.jpg', 'assets/imagenes/papel.jpg', 'assets/imagenes/perro.jpg'],
    fotos_work : ['assets/imagenes/mujer.jpg', 'assets/imagenes/papel.jpg', 'assets/imagenes/perro.jpg', 'assets/imagenes/mujer_tirada.jpg', 'assets/imagenes/baldes_blancos.jpg', 'assets/imagenes/molinos_de_viento.jpg', 'assets/imagenes/ventanas_circulares.jpg', 'assets/imagenes/mujer_bailando.jpg', 'assets/imagenes/escaleras_rojizas.jpg', 'assets/imagenes/mujer_pintada_blanco.jpg', 'assets/imagenes/hombre_colores.jpg', 'assets/imagenes/frutas_agrias.jpg'],
};

let palabras = {
    nombres : ['LILLIAN PERKINS', 'MAGGIE FLEMING','SEAN WELLS'],
    texto : [`Yes, I was once a Jedi Knight the same as your father. I wish I'd known him. Our ships have completed their scan of the area and found nothing. If the Millennium Falcon went into light-speed, it will be on the other side of the galaxy by now.`, `If you end your training now, if you choose the quick and easy path, as Vader did, you will become an agent of evil. Our ships have completed their scan of the area and found nothing. If the Millennium Falcon went into light-speed.`, `He says he is the property of Obi-Wan Kenobi, a resident of these parts. Yes, I was once a Jedi Knight the same as your father. I wish I did known him.`],
    ip : ['Elastic Themes','Marco Interactive','Design Goods'],
    titulomayor : ['PORTRAIT APP','ARCHITECT HERO','XFACTOR ART'],
    titulomenor : ['Mobile','Website','Photography'],
    titulomayorwork : ['PORTRAIT APP','ARCHITECT HERO','XFACTOR ART', 'EXPLORE GUY', 'MARK SUPPLIES', 'DRAWING CONSULTING', 'PERSONAL VOICE ASSISTANT', 'NEW AGE COMMUNITY', 'DRONE PANEL', 'LANDSCAPE JOURNEY', 'SUITE UP!', 'HURRICANE STYLE'],
    titulomenorwork : ['Mobile','Website','Photography','Mobile','Website','Website', 'Mobile','Website', 'Photography', 'Photography', 'Website', 'Photography']
};

var sliderposition = 0;
    testimonioposition = 0;
let portafolio = document.getElementById("portafolios");
    portafoliowork = document.getElementById("portafolioswork");
    cliente = document.getElementById("imagendelcliente");
    correo = document.getElementsByClassName("direcciondecorreo");

/*HOME*/
function slide(num){ //el parametro va a valer 1 o -1, por lo que suma o resta dependiendo lo que se le pase. la idea es un onclick pasa 1 y el otro -1
    sliderposition=sliderposition+num;
    if (sliderposition >= imagenesgenerales.imagenes.length){
        sliderposition=0;
    }
    if (sliderposition < 0){
        sliderposition = imagenesgenerales.imagenes.length-1;
    }
    document.getElementById("carruselprincipal").style.backgroundImage="linear-gradient(180deg, rgba(17, 17, 17, 0.6), rgba(60, 60, 60, 0.2)),url(" + imagenesgenerales.imagenes[sliderposition] + "), linear-gradient(90deg, #40424b, #1c1d24)";
}

if(document.querySelector("#carruselprincipal")){
    slide(0);
}

let testimoniogeneral = document.getElementById("#testimonio");

function testimonio(num) { //el parametro va a valer 1 o -1, por lo que suma o resta dependiendo lo que se le pase. la idea es un onclick pasa 1 y el otro -1
    testimonioposition=testimonioposition+num;
    if (testimonioposition>=imagenesgenerales.imagenes2.length && 
        testimonioposition>=palabras.nombres.length && 
        testimonioposition>=palabras.texto.length && 
        testimonioposition>=palabras.ip.length) {
        testimonioposition=0;
    }
    if (testimonioposition<0) {
        testimonioposition=imagenesgenerales.imagenes2.length-1;
        testimonioposition=palabras.nombres.length-1;
        testimonioposition=palabras.texto.length-1;
        testimonioposition=palabras.ip.length-1;
    }

    document.getElementById("imgtestimonio").setAttribute("src",imagenesgenerales.imagenes2[testimonioposition]);
    document.getElementById("nombredetestimonio").innerHTML= palabras.nombres[testimonioposition];
    document.getElementById("textodetestimonio").innerHTML= palabras.texto[testimonioposition];
    document.getElementById("botondetestimonio").innerHTML= palabras.ip[testimonioposition];
}

if(testimoniogeneral){
    testimonio(0);
}

function galeria_footer(){
    var html = "";
    for(i = 0; i < imagenesgenerales.fotos_footer.length; i++){
        html+=`<article>
                    <figure>
                        <div id="divdeportafolios">
                            <img src="` + imagenesgenerales.fotos_footer[i] + `">
                        </div>
                        <figcaption>
                            <h1 class="palabrasdentro">VIEW CASE STUDY</h1>
                        </figcaption>
                        <a href="mujer.html" class="subtitulosdeportafolio">
                            <h2 class="extras">` + palabras.titulomayor[i] + `</h2>
                            <p class="parrafodeportafolio">` + palabras.titulomenor[i] + `</p>
                        </a>
                    </figure>
                </article>`;
    }
    document.getElementById('divdeportafolios').innerHTML = html;
}

if(portafolio){
    galeria_footer();
}

function imagenesdecliente(){
    var html2 = "";
    for(i = 0; i < imagenesgenerales.cliente.length;i++){
        html2+=`<li class="paginasdecliente"><a href="about.html"><img class="imagenesdecliente" src="`+imagenesgenerales.cliente[i]+`"></a></li>`;
    }
    document.getElementById('ulcliente').innerHTML = html2;
}

if(cliente){
    imagenesdecliente();
}

let botonFin = document.querySelector('.ultimoboton');
botonFin.addEventListener('click', function (e){
    e.preventDefault()
});

function enviarEmail(){
    let email = document.getElementById("emailhome");
    if(email.value != ""){
    let html3 = "<p>Thank you! Your submission has been received!</p>";
    document.getElementById("notificacion").innerHTML = html3;
    document.getElementById("notificacion").style.height = "4em";
    document.getElementById("notificacion").style.margin = "2.5em 0 0";
    console.log(email.value);
    }else{
        alert("Complete the field with the email address");
    }
}

/*CONTACT ME*/
function abrirModal(){
    document.getElementById("modal").setAttribute("class","abrir");
}

function cerrarModal(){
    document.getElementById("modal").setAttribute("class","");
}	

function enviarEmail2(){
    let email = document.getElementById("emailcontact");
    if(email.value != ""){
        let html4 = "<p>Thank you! Your submission has been received!</p>";
        document.getElementById("articlecontactme").innerHTML = html4;
        document.getElementById("articlecontactme").style.height = "4em";
        document.getElementById("articlecontactme").style.margin = "2.5em 0 0 6em";  
        console.log(email.value);
    }else{
        alert("Complete the field with the email address");
    }
}

/*BLOG*/
function menu(id){
    let menu= {
        general: document.querySelectorAll("section section"),
        secundarias: document.querySelectorAll("section div"),
    } 
    for(var i=0; i<menu.general.length; i++ && i<menu.secundarias.length){
        menu.general[i].style.display= "none";
        menu.secundarias[i].style.display= "none";
    }
    document.getElementById(id).style.display= "block";    
}

/*WORK*/
function galeria_work(){
    var html6 = "";
    for(i = 0; i < imagenesgenerales.fotos_work.length; i++){
        html6+=`<article>
                    <figure>
                        <div id="divdeportafolios">
                            <img src="` + imagenesgenerales.fotos_work[i] + `">
                        </div>
                        <figcaption>
                            <h1 class="palabrasdentro">VIEW CASE STUDY</h1>
                        </figcaption>
                        <a href="mujer.html" class="subtitulosdeportafolio">
                            <h2 class="extras">` +palabras.titulomayorwork[i]+ `</h2>
                            <p class="parrafodeportafolio">` +palabras.titulomenorwork[i]+ `</p>
                        </a>
                    </figure>
                </article>`;
    }
    document.getElementById('divdeportafolios').innerHTML = html6;
}

if(portafoliowork){
    galeria_work();
}

/*MODO OSCURO*/
function cambiarModo() { 
    var cuerpoweb = document.body;
    cabezaweb = document.getElementById("header");
    hireme = document.getElementById("hireme");

    cuerpoweb.classList.toggle("oscuro");
    cabezaweb.classList.toggle("oscuro");
    hireme.classList.toggle("oscuro");
}