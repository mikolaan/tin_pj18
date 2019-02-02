( function ( window, document, undefined ) {
	// f) Funkcja sprawdzająca, czy zadana liczba jest liczbą pierwszą
	'use strict';
	const result3f = document.querySelector( '.result3f' );
	const submit3f = document.querySelector( '.submit3f' );
	const field3f = document.querySelector( '.field3f' );

	function IsPrime( number ) {
		for ( let i = 2; i < number; i++ ) {
			if ( number % i === 0 && i !== number ) {
				return false;
			}
		}
		return true;
	}

	function Function3f() {
		let userInput = Number( field3f.value );
		let decision = '';
		if ( IsPrime( userInput ) === false ) {
			decision = 'not';
		}

		result3f.textContent = 'Number \'' + userInput + '\' is ' + decision + ' prime.';
		field3f.value = '';
	}
	submit3f.addEventListener( 'click', Function3f );
} )( window, document );
