( function ( window, document, undefined ) {
	// e) Funkcja przyjmująca ciąg jako parameter i zwracająca najdłuższe słowo w ciągu
	'use strict';

	const result3e = document.querySelector( '.result3e' );
	const submit3e = document.querySelector( '.submit3e' );
	const field3e = document.querySelector( '.field3e' );

	function Function3e() {
		let userInput = field3e.value;

		let arrOfWords = userInput.split( ' ' );
		let longestWord = '';
		let wordLength = 0;

		for ( let i = 0; i < arrOfWords.length; i++ ) {
			if ( arrOfWords[ i ].length > wordLength ) {
				longestWord = arrOfWords[ i ];
			}
		}

		result3e.textContent = 'In \'' + userInput + '\' longest word is \'' + longestWord + '\'.';

		field3e.value = '';
	}
	submit3e.addEventListener( 'click', Function3e );
} )( window, document );
