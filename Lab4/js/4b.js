( function ( window, document, undefined ) {
	// b) Napisz funkcję JS dodającą akapit tekstu do strony po 5 sekundach od jej otwarcia
	'use strict';

	const result4b = document.getElementById( '4b_newText' );
	const submit4b = document.querySelector( '.submit4b' );
	const insertionArray = [ 'Hola mundo', 'Hallo-Welt', 'Привет, мир!', 'Hello, world!', 'Witaj Świecie!' ];
	// const result4b = document.querySelector('.result4a'); //Why it does not work?

	function Function4a() {
		let helloWorld = insertionArray[ Math.floor( Math.random() * insertionArray.length ) ];
		setTimeout( () => result4b.textContent = ` ${helloWorld}!`, 500 );
	}

	window.onload = function () {
		let helloWorld = insertionArray[ Math.floor( Math.random() * insertionArray.length ) ];
		setTimeout( () => result4b.textContent = ` ${helloWorld}!`, 1000 );
	};
	submit4b.addEventListener( 'click', Function4a );

} )( window, document );
