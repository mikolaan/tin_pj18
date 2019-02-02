( function ( window, document, undefined ) {
	// h) Funkcja przyjmująca tablicę liczb i znajdująca drugą najmniejszą i drugą największą wartość

	'use strict';

	const result3h = document.querySelector( '.result3h' );
	const submit3h = document.querySelector( '.submit3h' );
	const field3h = document.querySelector( '.field3h' );

	function Function3h() {
		let userInput = field3h.value;

		let arrOfNumbers = userInput.split( ' ' );
		arrOfNumbers = arrOfNumbers.sort();
		let secondLargestNum = 0;
		let secondSmallestNum = 0;

		secondLargestNum = arrOfNumbers[ 1 ];
		secondSmallestNum = arrOfNumbers[ arrOfNumbers.length - 2 ];

		result3h.textContent = 'In [' + userInput + '] the second largest number is ' + secondLargestNum + ' and the second smallest number is ' + secondSmallestNum;
		field3h.value = '';
	}

	submit3h.addEventListener( 'click', Function3h );
} )( window, document );
