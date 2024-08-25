var div=document.getElementById("info");


var btnAn=document.getElementById("btnAn");
var btnEti=document.getElementById("btnEti");
var btnTex=document.getElementById("btnTex");

var btnLis=document.getElementById("btnLis");
var btnTab=document.getElementById("btnTab");
var btnImg=document.getElementById("btnImg");

var btnVi=document.getElementById("btnVi");
var btnAu=document.getElementById("btnAu");
var btnHip=document.getElementById("btnHip");

var btnSem=document.getElementById("btnSem");
var btnFor=document.getElementById("btnFor");
var btnFra=document.getElementById("btnFra");

var btnEs=document.getElementById("btnEs");
var btnMe=document.getElementById("btnMe");
var btnEx=document.getElementById("btnEx");



btna.onclick=()=>{
    let inf=`

    <h2>ANTECEDENTES</h2>
    <br>
<p>
HTML, acrónimo en inglés de HyperText Markup Language, hace referencia al lenguaje de marcado utilizado en la creación de páginas web. Este estándar que sirve de referencia del software que interactúa con la elaboración de páginas web en sus diferentes versiones.
El origen de HTML se remonta a 1980, cuando el físico Tim Berners-Lee, trabajador del CERN (Organización Europea para la Investigación Nuclear) propuso un nuevo sistema de "hipertexto" para compartir documentos.
</p>
`;
div.innerHTML=inf;
}




btneti.onclick = () => {
    let inf = `
    <h2>ETIQUETA (SINTAXIS BÁSICA)</h2>
    <br>
    <p>
    Las "tags" HTML, o "etiquetas" HTML, son códigos utilizados para "marcar" el texto de una página web, con el fin de dar instrucciones al navegador sobre cómo mostrarlo.
    Cada etiqueta contiene instrucciones sencillas que indican al navegador cómo dar formato al texto y a definir los diversos elementos de la página web. Al aplicar estas etiquetas de marcado a los diferentes elementos del texto, se indica al navegador cómo mostrarlos al usuario, lo que permite crear páginas web estructuradas y con un diseño coherente.
    Los servidores leen el código HTML para entender y mostrar el contenido. Leerá el HTML de arriba abajo, de forma muy parecida a como estás leyendo esta guía. 

    
    </p>
    
    <br>
    <h3>¿Cuáles son las etiquetas HTML básicas?</h3>
    <p><br>
    Las etiquetas HTML más utilizadas son:
    
    <!DOCTYPE>: Se utiliza para especificar la versión de HTML que se está utilizando en la página.
    
    <html>: Define el inicio y el final de la página web.
    
    <head>: Define la sección de encabezado de la página, donde se incluyen elementos como el título de la página, metaetiquetas, scripts, entre otros.
    
    <title>: Define el título de la página web que aparece en la pestaña del navegador.
    
    <body>: Define la sección del cuerpo de la página web, donde se incluyen todos los elementos que se mostrarán en la página.</p>
    `;
    div.innerHTML = inf;
}


btntexto.onclick = () => {
    let inf = `
    <h2>TEXTO</h2>
    <br>
    <p>El Lenguaje de Marcado de Hipertexto (HTML) es el código que se utiliza para estructurar y desplegar una página web y sus contenidos. Por ejemplo, sus contenidos podrían ser párrafos, una lista con viñetas, o imágenes y tablas de datos. Como lo sugiere el título, este artículo te dará una comprensión básica de HTML y cúal es su función.</p>
    <p>La etiqueta HTML &lt;text&gt; se utiliza para definir el campo de texto de una sola línea en una página web.</p>
    <p>La forma más básica de añadir un texto a una página web es usando la etiqueta &lt;p&gt;.</p>

    <h3>TIPOS</h3>
&lt;.</h1></h6>.&lt;/p&gt;

   
    
    <h3>&lt;h1&gt; a &lt;h6&gt; (Encabezados)</h3>
    <p>Las etiquetas &lt;h1&gt; a &lt;h6&gt; se utilizan para definir encabezados de diferentes tamaños.</p>
    <pre>
&lt;h1&gt;Encabezado Nivel 1&lt;/h1&gt;
&lt;h2&gt;Encabezado Nivel 2&lt;/h2&gt;
&lt;h3&gt;Encabezado Nivel 3&lt;/h3&gt;
    </pre>
    
    
    <h3> &lt;b&gt; (Negrita)</h3>
    <p>La etiqueta &lt;b&gt; se usa para estilizar el texto en negrita o incluso para resaltar lo importante:</p>
    <pre>
&lt;b&gt;Texto en negrita&lt;/b&gt;
    </pre>
    <b>Texto en negrita</b>
    
    
    <h3>&lt;i&gt; (Cursiva)</h3>
    <p>La etiqueta &lt;em&gt; se usa para enfatizar el texto, y &lt;i&gt; se usa para estilizar el texto en cursiva:</p>
    <pre>
&lt;i&gt;Texto en cursiva&lt;/i&gt;
    </pre>
 
    <i>Texto en cursiva</i>
    
   

   

    `;
    div.innerHTML = inf;
}



btnlista.onclick = () => {
    let inf = `
    <h2>LISTAS</h2>
    <br>

    <p>En HTML, podemos enumerar elementos en forma ordenada o desordenada.

    Una lista ordenada utiliza números o algún tipo de notación que indica una serie de elementos.
    
    Por ejemplo, una lista ordenada puede comenzar con el número 1 y continuar por el 2, 3, 4, etc. Tu lista ordenada también puede comenzar con la letra A y pasar por B, C, D, etc.</p>

    <br>

    <h3>EJEMPLOS DE LISTAS</h3>
    <br>

    <h3>Lista Ordenada</h3>
    <p>Primero colocamos la etiqueta <code>&lt;ol&gt;</code> y despues el elemento que es la etiqueta <code>&lt;li&gt;</code>:</p>
    <pre>
&lt;ol&gt;
    &lt;li&gt;1.Primer elemento&lt;/li&gt;
    &lt;li&gt;2.Segundo elemento&lt;/li&gt;
    &lt;li&gt;3.Tercer elemento&lt;/li&gt;
&lt;/ol&gt;
    </pre>
    <p>MUESTRA:</p>
    <ol>
        <li>Primer elemento</li>
        <li>Segundo elemento</li>
        <li>Tercer elemento</li>
    </ol>

    <h3>Lista Desordenada</h3>
    <p>Esta compuesta por la siguiente estructura: con la etiqueta <code>&lt;ul&gt;</code> y después con la etiqueta <code>&lt;li&gt;</code>:</p>
    <pre>
&lt;ul&gt;
    &lt;li&gt;Elemento A&lt;/li&gt;
    &lt;li&gt;Elemento B&lt;/li&gt;
    &lt;li&gt;Elemento C&lt;/li&gt;
&lt;/ul&gt;
    </pre>
    <p>MUESTRA:</p>
    <ul>
        <li>Elemento A</li>
        <li>Elemento B</li>
        <li>Elemento C</li>
    </ul>

    `;

    div.innerHTML = inf;
}


btntabla.onclick = () => {
    let inf = `
    <h2>TABLAS</h2>
    <p>Las tablas HTML son elementos dentro del diseño web que permiten a los desarrolladores web organizar datos como texto, imágenes y enlaces en filas y columnas.</p>
    <br>
    <h3>EJEMPLO DE TABLA</h3>
    <br>
    <p>Para crear una tabla de 3x3, utiliza el siguiente código HTML:</p>
    <pre>
&lt;table border="1" align="center"&gt;
    &lt;tr&gt;
        &lt;th&gt;Encabezado 1&lt;/th&gt;
        &lt;th&gt;Encabezado 2&lt;/th&gt;
        &lt;th&gt;Encabezado 3&lt;/th&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;Celda 1&lt;/td&gt;
        &lt;td&gt;Celda 2&lt;/td&gt;
        &lt;td&gt;Celda 3&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
       
        &lt;td&gt;Celda 4&lt;/td&gt;
        &lt;td&gt;Celda 5&lt;/td&gt;
        &lt;td&gt;Celda 6&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
    &lt;td&gt;Celda 7&lt;/td&gt;
    &lt;td&gt;Celda 8&lt;/td&gt;
    &lt;td&gt;Celda 9&lt;/td&gt;
    &lt;/tr&gt;
&lt;/table&gt;
    </pre>

    <p>MUESTRA:</p>
    <table border="1" align="center">
        <tr>
            <th>Encabezado 1</th>
            <th>Encabezado 2</th>
            <th>Encabezado 3</th>
        </tr>
        <tr>
            <td>Celda 1</td>
            <td>Celda 2</td>
            <td>Celda 3</td>
        </tr>
        <tr>
            <td>Celda 4</td>
            <td>Celda 5</td>
            <td>Celda 6</td>
        </tr>
        <tr>
        <td>Celda 7</td>
            <td>Celda 8</td>
            <td>Celda 9</td>
        </tr>
        
    </table>
    `;

    div.innerHTML = inf;
}



btnimg.onclick = () => {
    let inf = `
    <h2>IMAGEN</h2>
    <p>Para poner una imagen simple en una página web, utilizamos el elemento &lt;img&gt;. Se trata de un elemento vacío (lo que significa que no contiene texto o etiqueta de cierre) que requiere al menos un atributo para ser utilizado: src (a veces denominado por su nombre completo, source). El atributo src contiene una ruta que apunta a la imagen que quieres poner en la página, que puede ser una URL relativa o absoluta.</p>
    <br>
    <h2>EJEMPLOS</h2>
    <br>
    <img src="/img/kanye.jpg" width="200px" alt="Imagen de ejemplo">
    `;
    div.innerHTML = inf;
}


btnvi.onclick = () => { 
    let inf=`
    <h2>VIDEO</h2>
    <p>En el cuerpo &lt;body&gt de tu archivo HTML, inserta el elemento &lt;video&gt para contener tu archivo. Puedes agregar atributos adicionales según tus necesidades, como width y height.
    Dentro del elemento &lt;video&gt, debes incluir una o más fuentes de video con la etiqueta &lt;source&gt. Cada fuente de video debe tener un atributo src que apunte a la ubicación del archivo de video y un atributo type que especifique el tipo MIME del video.
    </p>
    <h3>MUESTRA:</h3>
    <video width="350px" controls>
    <source src="/img/Salón Victoria.mp4" type="video/mp4">
    
    `
    div.innerHTML = inf;
}


btnau.onclick = () => {
    let inf = `
    <h2>AUDIO</h2>
    <p>Para colocar un audio, utilizamos la etiqueta &lt;audio&gt;. Dentro de esta etiqueta, se debe usar la etiqueta &lt;source&gt; para especificar la ruta del archivo de audio. El atributo <code>controls</code> permite mostrar los controles de reproducción del audio, y <code>muted</code> puede ser utilizado para silenciar el audio si es necesario.</p>
    <h3>MUESTRA:</h3>
    <audio controls>
        <source src="img/Salón Victoria - Si tu boquita fuera... (Official Track).mp3" type="audio/mp3">
        Tu navegador no soporta el elemento de audio.
    </audio>
    `;
    div.innerHTML = inf;
}


btnhipe.onclick = () => {
    let inf = `
    <h2>HIPERVÍNCULOS</h2>
    <p>Hay distintos tipos y formas de poder generar y crear en la página algunos hipervínculos.</p>
    <h3>EJEMPLOS:</h3>
    <p>El primer tipo es el básico ya que su estructura es la siguiente: &lt;a href="nombredellink"&gt; </p>
    <h4>MUESTRA:</h4>
    <a href="https://www.lanadelrey.com/" target="_blank"><h1>LANITA BB</h1></a>
    <p>El segundo es colocando una imagen, su estructura es la siguiente: &lt;a href="nombredellink"&gt; &lt; imgs src="nombredeimagen"&gt;
    </p>
    <a href="https://www.last.fm/es/music/Lana+Del+Rey/+albums"><img src="img/kanye.jpg" width="200px" alt=""></a>
    `;
    div.innerHTML = inf;
}

btnform.onclick = () =>{
let inf = `
<h2>FORMULARIO</h2>

<center>
    <form action="index.php" method="get" enctype="text/plain">
        <table border width="90%" style="margin: auto;" cellspacing="0">
            <tr align="center">
                <td><h1>NOMBRE</h1></td>
                <td><h1>USO</h1></td>
                <td><h1>DEMOSTRACION</h1></td>
            </tr>
            <tr>
                <td>1.CAMPO DE TEXTO</td>
                <td>Sirve para recopilar información</td>
                <td><input type="text" name="" id="" placeholder="Introduce tu nombre" required maxlength="10"></td>
            </tr>
            <tr>
                <td>2.CAMPO CONTRASEÑA</td>
                <td>oculta los caracteres que se escribe en el campo</td>
                <td><input type="password" name="password" id="password" placeholder="Introduce contraseña" required></td>
            </tr>
            <tr>
                <td>3.CASILLA VERIFICACION</td>
                <td>selecciona con una verificacion solo una opcion o varias</td>
                <td><input type="checkbox"><input type="checkbox" checked></td>
            </tr>
            <tr>
                <td>4.BOTON DE RADIO</td>
                <td>selecciona solo una opcion de las que se pueden mostrar</td>
                <td>
                    <input type="radio" name="mascota" id="boton1">GATO <br>
                    <input type="radio" name="mascota" id="boton2" checked>PERRO <br>
                    <input type="radio" name="mascota" id="boton2">AVES
                </td>
            </tr>
            <tr>
                <td>5.CAMPO OCULTO</td>
                <td>No muestra nada, solo para el lado del programador</td>
                <td><input type="hidden" name="oculto" id="oculto" value="Mi contraseña es: 070723"></td>
            </tr>
            <tr>
                <td>6.AREA DE TEXTO</td>
                <td>Permite escribir un texto indefinido</td>
                <td><textarea name="texto" id="texto" cols="25" rows="5" nosize></textarea></td>
            </tr>
            <tr>
                <td>7.LISTA DESPEGABLE</td>
                <td>Funcion para desplegar mas de una opcion que ya estan predeterminadas por el programador</td>
                <td>
                    <select name="lista" id="lista">

                        <option value="nada"></option>
                        <option value="gaseosa">gaseosa</option>
                        <option value="agua simple">agua simple</option>
                        <option value="agua de sabor">agua de sabor</option>
                        <option value="agua michoacana">agua michoacana</option>
                        <option value="agua mineral">agua mineral</option>

                    </select>
                </td>
            </tr>
            <tr>
                <td>8.BOTON ENVIAR</td>
                <td>bton más importante</td>
                <td><input type="submit" value="Enviar"></td>
            </tr>
            <tr>
                <td>9.BOTON IMAGEN</td>
                <td>Una imagen que puede llevarte a algún enlace o página</td>
                <td><input type="image" src="/imagenes/conejo.jfif" alt=""></td>
            </tr>
            
                <tr>
                    <td>10.BOTON BORRAR</td>
                    <td>Borra todo lo que se coloco en el formulario</td>
                    <td><input type="reset" value="borrar"></td>
                </tr>
                <tr>
                    <td>11.BOTON COLOR</td>
                    <td>Selecciona algun color para el boton</td>
                    <td><input type="color" name="" id=""></td>
                </tr>
                <tr>
                    <td>12.BOTON COMANDO</td>
                    <td>Diferente al boton enviar</td>
                    <td><input type="button" value="Aceptar"></td>
                </tr>
                <tr>
                    <td>13.CAMPO FECHA</td>
                    <td>Selecciona una fecha de todo el año</td>
                    <td><input type="date" name="" id=""></td>
                </tr>
                <tr>
                    <td>14.CAMPO FECHA Y HORA</td>
                    <td>Selecciona la fecha y hora universal, no en todos los dispositivos se puede ver la funcion</td>
                    <td><input type="datetime" name="" id=""></td>
                </tr>
                <tr>
                    <td>15.CAMPO FECHA Y HORA LOCAL</td>
                    <td>Selecciona la fecha y hora local y es más funcionable en dispositivos</td>
                    <td><input type="datetime-local" name="" id=""></td>
                </tr>
                <tr>
                    <td>16.CAMPO EMAIL</td>
                    <td>Verifica un correo, tomando en cuenta el "." y el "@"</td>
                    <td><input type="email" name="" id=""></td>
                </tr>
                <tr>
                    <td>17.CAMPO ARCHIVO</td>
                    <td>Al dar click, te lleva a tu carpeta para seleccionar un archivo</td>
                    <td><input type="file" name="" id=""></td>
                </tr>
                <tr>
                    <td>18.MES DEL AÑO</td>
                    <td>Solo se puede seleccionar el mes de todo el año</td>
                    <td><input type="month" name="" id=""></td>
                </tr>
                <tr>
                    <td>19.NUMERICO</td>
                    <td>Campo que solo permite números</td>
                    <td><input type="number" name="" id="" step="0.5" value="0"></td>
                </tr>
                <tr>
                    <td>20.SLIDER</td>
                    <td>Barra para seleccionar algún número deslizando</td>
                    <td><input type="range" name="" id="" value="0" min="0" max="100"></td>
                </tr>
                <tr>
                    <td>21.CAMPO BUSQUEDA</td>
                    <td>Busca algún termino que se uso en el formulario</td>
                    <td><input type="search" name="" id=""></td>
                </tr>
                <tr>
                    <td>22.CAMPO TELEFONO</td>
                    <td>Permite escribir un número telefonico</td>
                    <td><input type="tel" name="" id=""></td>
                </tr>
                <tr>
                    <td>23.CAMPO HORA</td>
                    <td>Da la opcion de solo colocar la hora actual</td>
                    <td><input type="time" name="" id=""></td>
                </tr>
                <tr>
                    <td>24.URL</td>
                    <td>Permite colocar un URL o direccion de alguna página web</td>
                    <td><input type="url" name="" id=""></td>
                </tr>
                <tr>
                    <td>25.SEMANA</td>
                    <td>Selecciona solo la semana del año</td>
                    <td><input type="week" name="" id=""></td>
                </tr>
                <tr>
                    <td>26.LISTA AUTO ACOMPLETAR</td>
                    <td>Auto acompleta lo que estas escribiendo con opciones que estan predeterminadas por el programador</td>
                    <td>
                        <input list="Paises" type="text"/>
                        <datalist id="Paises">
                            <option value="México"></option>
                            <option value="Francia"></option>
                            <option value="Japón"></option>
                            <option value="Corea"></option>
                            <option value="EUA"></option>
                        </datalist>
                    </td>
                </tr>
                <tr>
                    <td>27.BARRA PROGRESIVA</td>
                    <td>Barra que sirve para cargar algún tipo de archivo</td>
                    <td><progress id="file" max="100" value="70">70%</progress></td>
                </tr>
                <tr>
                    <td>28.ESTETICO</td>
                    <td>Coloca algun tipo de margen a la etiqueta</td>
                    <td>
                        <fieldset>
                            <legend>Datos Personales</legend>Nombre <br>
                            <input type="text" name="nombre" value="" />
                            <br/>
                            Apellidos <br/>
                            <input type="text" name="Apellidos" value="" />
                            <br/>
                            Escuela <br/>
                            <input type="text" name="Escuela" value="" size="10" maxlength="9" />

                        </fieldset>
                    </td>
                </tr>

        </table>
    </form>
`

div.innerHTML = inf;
}

