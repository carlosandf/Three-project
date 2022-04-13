import { Scene, PerspectiveCamera, WebGLRenderer, BoxGeometry, MeshBasicMaterial, Mesh } from 'three';
const THREE = require('three');

// const scene = new Scene();

// const camera = new PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// const renderer = new WebGLRenderer();
// renderer.setSize( window.innerWidth, window.innerHeight );
// document.body.appendChild( renderer.domElement );

// const geometry = new BoxGeometry(2,2,2);
// const material = new MeshBasicMaterial( { color: 0x9900ff } );
// const cube = new Mesh( geometry, material );
// scene.add( cube );

// camera.position.z = 5;

// function animate() {

// 	requestAnimationFrame( animate );

//     cube.rotation.x += 0.01;
//     cube.rotation.y += 0.01;

// 	renderer.render( scene, camera );
// }

// export default animate;


// ==========  DIBUJAR DOS LINEAS  =======================

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize( window.innerWidth, window.innerHeight );
// document.body.appendChild( renderer.domElement );

// const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );
// camera.position.set( 0, 0, 100 );
// camera.lookAt( 0, 0, 0 );

// const scene = new THREE.Scene();

// const material = new THREE.LineBasicMaterial( { color: 0x0000ff } );

// const points = [];
// points.push( new THREE.Vector3( - 10, 0, 0 ) );
// points.push( new THREE.Vector3( 0, 10, 0 ) );
// points.push( new THREE.Vector3( 10, 0, 0 ) );

// const geometry = new THREE.BufferGeometry().setFromPoints( points );

// const line = new THREE.Line( geometry, material );


// function animate() {

//     requestAnimationFrame( animate );

//     scene.add( line );

// 	renderer.render( scene, camera );
// }

// export default animate;