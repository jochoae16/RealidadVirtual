//Nombre: Juanita Ochoa Escobar
//Materia: Realidad Virtual

/**Trabajo: Realizar un programa donde se vea el diametro, volumen y masa de algunos planetas**/

/**Usaremos la libreria Three.js para hacer los planetas en 3D y su información*/

/*Empezaremos con la creación básica de un programa donde se usa Three.js, primero se crea la escena donde
estaran ubicados todos los objetos, luego se crea el aspect que es quién hace que la perspectiva de la camara
no sea como en las películas antiguas cuando se ponene en tv, es decir como estripadas. Luego se crea una
camara tipo perspective, que se asemeja a lo que ve el ser humano. Finalmente se crea el render, que es el que 
permite que se vea la escena */

//Creación Básica
var scene = new THREE.Scene();
var aspect = window.innerWidth / window.innerHeight;
var camara = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

/*Ubicaremos a la camara en la posición que creamos pertinente, la dejamos en un punto fijo para ver todos los 
planetas al mismo tiempo*/
//Cámara
camara.position.set(0,0,300);
camara.lookAt(0,0,0);

/*Ahora crearemos la luz que va dejar que se vean las texturas, es importante que cualquier objeto que se cree a 
partir de ahora se ponga al final scene.add porque esto hará que se vea*/
//Luz
var luz = new THREE.AmbientLight(0xffffff, 1);
scene.add(luz);

/*Crearemos una cuadricula para guiarnos mientras creamos los planetas, después lo comentaremos para que no se vea 
en el producto final*/
//Grid
/*var cuadricula = new THREE.PolarGridHelper(30,0,9,0);
scene.add(cuadricula);*/

/*Crearemos el fondo que tendra nuestra pagina, con textura*/
//Fondo
var loader = new THREE.TextureLoader();
var imagen = loader.load("Fondo.jpg");
var forma = new THREE.BoxGeometry(1200, 1200, 1);
var material = new THREE.MeshLambertMaterial({map:imagen});
var fondo = new THREE.Mesh (forma,material);
fondo.position.set(0,0,-50);
scene.add(fondo);

/*Crearemos lo planetas. Primero haremos una función que lo único que cambiara será su radio y la textura*/
//Creación de Planetas                       
function planetas (radio, textura){
	this.radio = radio;
	this.textura = textura;
	this.planetas;

	var loader = new THREE.TextureLoader();
    var imagen = loader.load(this.textura);
    var forma = new THREE.SphereGeometry(this.radio, 80, 80);
    var material = new THREE.MeshLambertMaterial({map:imagen});
    this.planetas = new THREE.Mesh (forma,material);
}

/*Crearemos la tierra, con la que se tienen todas las referencias de medición*/
//Tierra
var tierra = new planetas (10,"tierra.jpg");
tierra.planetas.position.set(-150,0,0);
scene.add(tierra.planetas);

/*Ahora crearemos mercurio, sabiendo que es 2.6 veces más pequeño que la tierra*/
//Mercurio
var mercurio = new planetas (3.85,"mercurio.jpg");
mercurio.planetas.position.set(-350,0,0);
scene.add(mercurio.planetas);

/*Ahora crearemos venus, sabiendo que es 1.05 veces más pequeño que la tierra*/
//Venus
var venus = new planetas (9.5,"venus.jpg");
venus.planetas.position.set(-250,0,0);
scene.add(venus.planetas);

/*Ahora crearemos marte, sabiendo que es 1.9 veces más pequeño que la tierra*/
//Marte
var marte = new planetas (5.27,"marte.jpg");
marte.planetas.position.set(-50,0,0);
scene.add(marte.planetas);

/*Ahora crearemos jupiter, sabiendo que es 11.2 veces más grande que la tierra*/
//Jupiter
var jupiter = new planetas (112,"jupiter.jpg");
jupiter.planetas.position.set(250,0,0);
scene.add(jupiter.planetas);


/*Ahora pondremos la información de cada planeta, para ello usaremos las texturas creadas como texto*/
//Información
function info (textura){
	this.textura = textura;
	this.info;

	var loader = new THREE.TextureLoader();
    var imagen = loader.load(this.textura);
    var forma = new THREE.BoxGeometry(100, 100, 1);
    var material = new THREE.MeshLambertMaterial({map:imagen});
    this.info = new THREE.Mesh (forma,material);
}

//Mercurio
var mer = new info ("Mercurio.png");
mer.info.position.set(-350,-80,0);
scene.add(mer.info);

//Venus
var ven = new info ("Venus.png");
ven.info.position.set(-250,80,0);
scene.add(ven.info);

//Tierra
var tie = new info ("Tierra.png");
tie.info.position.set(-150,-80,0);
scene.add(tie.info);

//Marte
var mar = new info ("Marte.png");
mar.info.position.set(-50,80,0);
scene.add(mar.info);

//Jupiter
var jup = new info ("Jupiter.png");
jup.info.position.set(75,0,0);
scene.add(jup.info);

/*Ahora haremos la función del render, donde se hará cualquier animación necesaria y se mostrará todo en la imagen*/
//Render
var time = 0;
var render = function () {
	requestAnimationFrame(render);
	
	time= time +0.01;
	renderer.render(scene, camara);
};
render();