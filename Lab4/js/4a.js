( function ( window, document, undefined ) {
	// a) Napisz funkcję JS konwertującą temperatury między skalami
	// Celsjusza i Fahrenheita (https://en.wikipedia.org/wiki/Fahrenheit),
	// plus formularz przyjmujący dane do konwersji i wypisujący wynik.

	'use strict';

	const checkBox4a = document.getElementById( 'celsius' );
	const input4a = document.querySelector( '.gradeValue' );
	const result4a = document.getElementById( '4a_result' );
	const submit4a = document.querySelector( '.submit4a' );

	function Function4a() {
		let valueToConvert = Number( input4a.value );
		let convertToCelsius = checkBox4a.checked;
		let result = 0;

		if ( convertToCelsius === true ) {
			result = valueToConvert * 1.8 + 32;
		} else {
			result = ( valueToConvert - 32 ) / 1.8;
		}

		result4a.textContent = result;
		input4a.value = 0;
	}

	// window.onload = function () {};
	submit4a.addEventListener( 'click', Function4a );

} )( window, document );
