//Nombre: Juanita Ochoa Escobar
//Materia: Realidad Virtual

/**Trabajo: Realizar un programa donde se vea el recorrido de los planetas**/

/**Usaremos la libreria Three.js para hacer los planetas en 3D y su rotación*/

/*Empezaremos con la creación básica de un programa donde se usa Three.js, primero se crea la escena donde
estaran ubicados todos los objetos, luego se crea el aspect que es quién hace que la perspectiva de la camara
no sea como en las películas antiguas cuando se ponene en tv, es decir como estripadas. Luego se crea una
camara tipo perspective, que se asemeja a lo que ve el ser humano. Finalmente se crea el render, que es el que 
permite que se vea la escena */

//Creación Básica
var scene = new THREE.Scene();
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
var aspect = window.innerWidth / window.innerHeight;
var camara = new THREE.PerspectiveCamera(75, aspect, 1, 1000);
var loader = new THREE.TextureLoader();

/*Ubicaremos a la camara en la posición que creamos pertinente, la dejamos en un punto fijo para ver todos los 
planetas al mismo tiempo*/
//Cámara
camara.position.set(0,600,0);
camara.lookAt(0,0,0);

/*Ahora crearemos la luz que va dejar que se vean las texturas, es importante que cualquier objeto que se cree a 
partir de ahora se ponga al final scene.add porque esto hará que se vea*/
//Luz
/*var luz = new THREE.PointLight(0xffffff,5,9000,700);
luz.position.set(0,0,0);
scene.add(luz);*/
var luz = new THREE.AmbientLight(0xffffff,1);
scene.add(luz);

/*Crearemos una cuadricula para guiarnos mientras creamos los planetas, después lo comentaremos para que no se vea 
en el producto final*/
//Grid
/*var cuadricula = new THREE.PolarGridHelper(700,0,12,0);
scene.add(cuadricula);*/

/*Crearemos el fondo de nuestro sistema solar con una esfera con su textura
interna*/
//Fondo
/*var apariencia = loader.load("Imagenes/fondo.jpg");
var geometria = new THREE.SphereGeometry(30, 40, 40);
var galaxia = new THREE.MeshBasicMaterial({map:apariencia,
  side: THREE.BackSide
});
var fondo = new THREE.Mesh(geometria,galaxia);
scene.add(fondo);*/

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

//Sol
var sol = new planetas (40,"Imagenes/sol.jpg");
sol.planetas.position.set(0,0,0);
scene.add(sol.planetas);

//Mercurio
var mercurio = new planetas (1,"Imagenes/mercurio.jpg");
scene.add(mercurio.planetas);

//Venus
var venus = new planetas (3.5,"Imagenes/venus.jpg");
scene.add(venus.planetas);

//Tierra
var tierra = new planetas (4,"Imagenes/tierra.jpg");
scene.add(tierra.planetas);

	//Luna
	var luna = new planetas (1.5,"Imagenes/luna.jpg");
	scene.add(luna.planetas);

//Marte
var marte = new planetas (2,"Imagenes/marte.jpg");
scene.add(marte.planetas);

//Jupiter
var jupiter = new planetas (20,"Imagenes/jupiter.jpg");
scene.add(jupiter.planetas);

//Saturno
var saturno= new planetas (15,"Imagenes/saturno.jpg");
scene.add(saturno.planetas);

	//Aro
	var geo = new THREE.TorusGeometry(20,3,2,32);
	var tex = new loader.load("Imagenes/aro.jpg");
	var mat = new THREE.MeshPhongMaterial({map:tex});
	var aro = new THREE.Mesh(geo, mat);
	scene.add(aro);
	aro.rotation.x = 1; 

//Urano
var urano = new planetas (10,"Imagenes/urano.jpg");
scene.add(urano.planetas);

//Neptuno
var neptuno = new planetas (9,"Imagenes/neptuno.jpg");
scene.add(neptuno.planetas);

//Pluton
var pluton = new planetas (0.5,"Imagenes/pluton.jpg");
scene.add(pluton.planetas);


/*Ahora haremos la función del render, donde se hará cualquier animación necesaria y se mostrará todo en la imagen*/
//Render
var time = 0;
var render = function () {
	requestAnimationFrame(render);
	
    //Sol
    sol.planetas.rotation.y += 0.005;

    //Mercurio
    mercurio.planetas.rotation.y += 0.09;
    mercurio.planetas.position.x = -80*Math.cos(time*5);
    mercurio.planetas.position.z = 80*Math.sin(time*5);

    //Venus
    venus.planetas.rotation.y += 0.08;
    venus.planetas.position.x = -100*Math.cos(time*4.7);
    venus.planetas.position.z = 100*Math.sin(time*4.7);

    //Tierra
    tierra.planetas.rotation.y += 0.06;
    tierra.planetas.position.x = -115*Math.cos(time*4.5);
    tierra.planetas.position.z = 110*Math.sin(time*4.5);

    //Marte
    marte.planetas.rotation.y += 0.04;
    marte.planetas.position.x = -145*Math.cos(time*4.1);
    marte.planetas.position.z = 140*Math.sin(time*4.1);

    //Jupiter
    jupiter.planetas.rotation.y += 0.03;
    jupiter.planetas.position.x = -230*Math.cos(time*3.2);
    jupiter.planetas.position.z = 225*Math.sin(time*3.2);

    //Saturno
    saturno.planetas.rotation.y += 0.02;
    saturno.planetas.position.x = -300*Math.cos(time*2.3);
    saturno.planetas.position.z = 295*Math.sin(time*2.3);

    	//Aro
    	aro.position.x = saturno.planetas.position.x;
    	aro.position.z = saturno.planetas.position.z;

	//Urano
	urano.planetas.rotation.y += 0.015;
	urano.planetas.position.x = -370*Math.cos(time*1.4);
	urano.planetas.position.z = 365*Math.sin(time*1.4);

	//Neptuno
	neptuno.planetas.rotation.y += 0.01;
	neptuno.planetas.position.x = -450*Math.cos(time*1);
	neptuno.planetas.position.z = 445*Math.sin(time*1);

	//Pluton
	pluton.planetas.rotation.y += 0.007;
	pluton.planetas.position.x = -600*Math.cos(time*0.5);
	pluton.planetas.position.z = 500*Math.sin(time*0.5);

	time= time +0.01;
	renderer.render(scene, camara);
};
render();