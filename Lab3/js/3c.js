( function ( window, document, undefined ) {
	/* c) Funkcja sprawdzająca, czy przekazany ciąg jest palindromem */
	'use strict';

	const result3c = document.querySelector( '.result3c' );
	const submit3c = document.querySelector( '.submit3c' );
	const field3c = document.querySelector( '.field3c' );

	// let para = document.querySelector('3c')
	// para.addEventListener('click', Function3c)

	function Function3c() {
		let userInput = field3c.value;
		field3c.value = '';
		//  let selection = window.prompt('Please enter a string to check if it is a palindrome:', '')
		let reverseSelection = userInput.split( '' ).reverse().join( '' );

		if ( userInput === reverseSelection ) {
			result3c.textContent = "'" + userInput + "' is palindrome (equal to " + reverseSelection + ').';
		} else {
			result3c.textContent = "'" + userInput + ' is not palindrome (not equal to ' + reverseSelection + ').';
		}
	}
	submit3c.addEventListener( 'click', Function3c );
} )( window, document );
