( function ( window, document, undefined ) {
	// g) Funkcja zwracająca typ otrzymanego parametru - typeof()

	'use strict';

	const result3g = document.querySelector( '.result3g' );
	const submit3g = document.querySelector( '.submit3g' );
	const field3g = document.querySelector( '.field3g' );

	function Function3g() {
		let userInput = field3g.value;
		result3g.textContent = "Submitted value '" + userInput + "' is " + typeof ( userInput );

		field3g.value = '';
	}

	submit3g.addEventListener( 'click', Function3g );
} )( window, document );
