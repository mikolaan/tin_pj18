( function ( window, document, undefined ) {
	// b) Funkcja licząca n-ty numer w ciągu Fibonacciego
	'use strict';

	//selectors
	const result3b = document.querySelector( '.result3b' );
	const submit3b = document.querySelector( '.submit3b' );
	const field3b = document.querySelector( '.field3b' );

	//methods
	function FibonacciSeq( fibNum ) {
		if ( fibNum <= 1 ) {
			return fibNum;
		} else {
			return FibonacciSeq( fibNum - 1 ) + FibonacciSeq( fibNum - 2 );
		}
	}

	// http://php.bubble.ro/fibonacci/
	function Function3b() {
		// let selection = parseInt(window.prompt('Please enter a number up to which Fibonacci sequence should be calculated:', ''))

		let userNumber = Number( field3b.value );
		field3b.value = '';

		if ( isNaN( userNumber ) || userNumber < 1 ) {
			result3b.textContent = 'We can\'t count Fibonacci sequence for ' + userNumber;
		} else {
			result3b.textContent = 'The ' + userNumber + ' element of Fibonacci sequence is equal to ' + FibonacciSeq( userNumber );
		}
	}

	// events
	submit3b.addEventListener( 'click', Function3b );
} )( window, document );
