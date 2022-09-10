
btn_menu = document.getElementById("btn-menu")
nav_desplegado = false;

btn_menu.addEventListener('click', desplegarMenu)

function desplegarMenu() {
    if (nav_desplegado == false) {
        document.getElementById("nav-menu-desplegable").style.display = "block"
        nav_desplegado = true
    } else {
        document.getElementById("nav-menu-desplegable").style.display = "none"
        nav_desplegado = false
    }
}

const mq980 = matchMedia('(min-width:980px)');
mq980.addEventListener('change', () => {
    document.getElementById("nav-menu-desplegable").style.display = "none"
    nav_desplegado = false
})


// inicio efecto maquina de escribir

var titulo_inicio = document.getElementById("inicio-h1")
var efecto_escritura = document.getElementById("efecto-escritura")


const maquinaEscribir = (text = '', tiempo = 200, etiqueta = '') => {
    let arrayCaracteres = text.split('')
    etiqueta.innerHTML = ''
    let i = 0
    let j = text.length
    let escribir = setInterval(function () {
        if (i === arrayCaracteres.length) {
            etiqueta.innerHTML = text.substring(0, j)
            j--
            if (j === 0) {
                etiqueta.innerHTML = ''
                i = 0
                j = text.length
            }
        } else {
            etiqueta.innerHTML += arrayCaracteres[i]
            i++
        }
    }, tiempo)
}

maquinaEscribir(efecto_escritura.innerHTML, 140, efecto_escritura)



/* seccion plugins*/

var cont_samples = document.getElementById("cont-box-sample")

var box_sample1 = document.getElementById("box-sample-1")
var box_sample2 = document.getElementById("box-sample-2")
var box_sample3 = document.getElementById("box-sample-3")

function infoSample(e) {
  let box_seleccionado=e.id
  if (box_seleccionado == "box-sample-1") {
    document.getElementById("cont-box-sample").innerHTML=`
       <div class="box-sample-info" id="box-sample-info">
           <div class="img-sample">
           <img src="https://rawcdn.githack.com/MarcoA36/theluckyboss-page/6f1749f9bef181bd29d6dd20a2e114279b74c12e/img/samples/modobass.png" alt="">
           </div>
           <div class="descripcion-y-link">
           <div class="descripcion-sample">
               <h3>Bajo para cumbia</h3>
               <p>El primer instrumento virtual de bajo eléctrico modelado físicamente.<br>
               Innovadora tecnología de síntesis modal en tiempo real: sin muestras para crear sonido
               Recrea prácticamente el sonido de cada bajo eléctrico imaginable
               14 modelos icónicos de bajo que cubren la historia del bajo eléctrico grabado
               Modela la acción completa de tocar un bajo eléctrico: instrumentista, instrumento, efectos y amplificador
               Ocupa muy poco espacio en memoria<br>
               - Escoge el estilo de interpretación: dedos, slap y pick<br>
               - Mueve la mano libremente para tener una interpretación realista<br>
               - Personaliza la tensión de las cuerdas, los dedos utilizados, el ancho del pick y la técnica<br>
               - Personaliza el número de la cuerda, la escala, la afinación, el calibre, la construcción, la altura y el tiempo de uso de las cuerdas<br>
               - 24 micrófonos de bajo icónicos: fielmente recreados, intercambiables y con volumen<br>
               - Escoge el sistema electrónico activo o pasivo con ecualizador paramétrico<br>
               - Micrófono piezoeléctrico debajo del puente con posibilidad de mezclarse<br>
               - 7 pedales de efectos configurables en una cadena de 4 inserciones<br>
               - 2 amplificadores icónicos de bajo: Estado Sólido y de Tubos, derivados de AmpliTube<br>
               - Omisión global de efectos y amplificador para enrutamiento<br>
               - Interfaz optimizada que cambia de tamaño<br>
               - Funciona como plugin o como instrumento independiente para Mac/PC<br>
               - Control MIDI completo con la función aprender MIDI y las teclas conmutadoras (keyswitches)<br>
               - Soporte de control completo de automatización de DAW</p><br>
           </div>
           <div class="link">
                        <div class="btn-volver" id="btn-volver" onclick="todosLosSamples()">
                            <i class="fa-sharp fa-solid fa-circle-arrow-left"></i>
                        </div>

                        <div class="link-descarga">
                        <a href="https://mega.nz/file/sTRTXQQD#QJDfCKXseX7cXoa5CPR9pJktt87Exiap3W9C251Tc3g">
                        <p>DESCARGAR</p> <i class="fa-solid fa-download"></i>
                        </a>
                        </div>   
                    </div>
       </div>

   </div>
`
  }else if(box_seleccionado==="box-sample-2"){
    document.getElementById("cont-box-sample").innerHTML=`
       <div class="box-sample-info" id="box-sample-info">
       <div class="img-sample">
       <img src="https://rawcdn.githack.com/MarcoA36/theluckyboss-page/6f1749f9bef181bd29d6dd20a2e114279b74c12e/img/samples/plugins%20korg.png" alt="">
   </div>
           <div class="descripcion-y-link">
           <div class="descripcion-sample">
           <h3>Korg N364 Samples</h3>
               <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident quibusdam error quod
                   nemo. Sequi quod fuga possimus ea iure! Quaerat.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident quibusdam error quod
                   nemo. Sequi quod fuga possimus ea iure! Quaerat.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident quibusdam error quod
                   nemo. Sequi quod fuga possimus ea iure! Quaerat.</p>
                   <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident quibusdam error quod
                       nemo. Sequi quod fuga possimus ea iure! Quaerat.Lorem ipsum dolor sit, amet consectetur adipisicing elit.Sequi quod fuga possimus ea iure! Quaerat.Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
           </div>
           <div class="link">
                        <div class="btn-volver" id="btn-volver" onclick="todosLosSamples()">
                            <i class="fa-sharp fa-solid fa-circle-arrow-left"></i>
                        </div>

                        <div class="link-descarga">
                        <a href="http://www.mediafire.com/file/5aezats1a3pcaz6/Korg+N364+Parte+1.rar">
                            <p>DESCARGAR parte1</p> <i class="fa-solid fa-download"></i>
                            </a>

                            <a href="http://www.mediafire.com/file/5aezats1a3pcaz6/Korg+N364+Parte+1.rar">
                            <p>DESCARGAR parte2</p> <i class="fa-solid fa-download"></i>
                            </a>

                            <a href="http://www.mediafire.com/file/5aezats1a3pcaz6/Korg+N364+Parte+1.rar">
                            <p>DESCARGAR parte3</p> <i class="fa-solid fa-download"></i>
                            </a>
                        </div>   
                    </div>
       </div>

   </div>
`
  }else if(box_seleccionado=="box-sample-3"){
    document.getElementById("cont-box-sample").innerHTML=`
    <div class="box-sample-info" id="box-sample-info">
    <div class="img-sample">
    <img src="https://rawcdn.githack.com/MarcoA36/theluckyboss-page/6f1749f9bef181bd29d6dd20a2e114279b74c12e/img/samples/acordeon%20guerrini.png" alt="">
</div>
        <div class="descripcion-y-link">
        <div class="descripcion-sample">
        <h3>ACORDEÓN GUERRINI PARA KONTAKT 6</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident quibusdam error quod
                nemo. Sequi quod fuga possimus ea iure! Quaerat.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident quibusdam error quod
                nemo. Sequi quod fuga possimus ea iure! Quaerat.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident quibusdam error quod
                nemo. Sequi quod fuga possimus ea iure! Quaerat.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident quibusdam error quod
                    nemo. Sequi quod fuga possimus ea iure! Quaerat.Lorem ipsum dolor sit, amet consectetur adipisicing elit.Sequi quod fuga possimus ea iure! Quaerat.Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>
        <div class="link">
                     <div class="btn-volver" id="btn-volver" onclick="todosLosSamples()">
                         <i class="fa-sharp fa-solid fa-circle-arrow-left"></i>
                     </div>

                     <div class="link-descarga">
                     <a href="https://mega.nz/file/0bBCyQjB#1fjkKYCvT7qTKjBXaQGWSpOkfrAztcHXnYnopy5CG-k">
                         <p>DESCARGAR</p> <i class="fa-solid fa-download"></i>
                         </a>
                     </div>
                 </div>
    </div>

</div>
`
  }

}


var btn_volver= document.getElementById("btn-volver")

function todosLosSamples() {
    document.getElementById("cont-box-sample").innerHTML=`<div class="box-sample" id="box-sample-1" onclick="infoSample(this)">
    <h3>Bajo para cumbia</h3>
    <div class="img-sample">
        <img src="img/samples/modobass.png" alt="">
    </div>
    <div class="descripcion-sample">
        <p>El primer instrumento virtual de bajo eléctrico modelado físicamente.
            Innovadora tecnología de síntesis modal en tiempo real: sin muestras para crear sonido
            Recrea prácticamente el sonido de cada bajo eléctrico imaginable
            14 modelos icónicos de bajo que cubren la historia del bajo eléctrico grabado
            Modela la acción completa de tocar un bajo eléctrico: instrumentista, instrumento, efectos y amplificador
            Ocupa muy poco espacio en memoria</p>
    </div>
</div>

<div class="box-sample" id="box-sample-2" onclick="infoSample(this)">
    <h3>Korg N364 Samples</h3>
    <div class="img-sample">
        <img src="img/samples/plugins korg.png" alt="">
    </div>
    <div class="descripcion-sample">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam iure dolores quam nesciunt architecto consectetur temporibus porro ut eos itaque. Temporibus rem, cum maiores nesciunt quis a quos deserunt minima nobis id dolor reprehenderit nemo vero fugit quisquam nisi labore.</p>
    </div>
</div>

<div class="box-sample" id="box-sample-3" onclick="infoSample(this)">
    <h3>ACORDEÓN GUERRINI PARA KONTAKT 6</h3>
    <div class="img-sample">
        <img src="img/samples/acordeon guerrini.png" alt="">
    </div>
    <div class="descripcion-sample">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est iure consequuntur aliquid ea beatae dolores iste accusamus dolorum tempora velit nesciunt pariatur perspiciatis repellat inventore commodi repudiandae esse, saepe laborum consectetur accusantium doloribus quidem! Aspernatur ut dignissimos quos sunt ad!</p>
    </div>
</div>`
}
