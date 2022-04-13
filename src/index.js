import animate from './utils/animation.js'
import WebGL from './utils/WebGl.js';
import './styles/style.css';

if ( WebGL.isWebGLAvailable() ) {

	// Initiate function or other initializations here
	animate();

} else {

	const warning = WebGL.getWebGLErrorMessage();
	document.getElementById( 'container' ).appendChild( warning );

}