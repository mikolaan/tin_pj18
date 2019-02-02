( function ( window, document, undefined ) {
	// j) Binary search w zadanej tablicy
	'use strict';
	// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 10))  // 9
	// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 16))  // < 0

	const result3j = document.querySelector( '.result3j' );
	const submit3j = document.querySelector( '.submit3j' );
	const field3ja = document.querySelector( '.field3ja' );
	const field3jb = document.querySelector( '.field3jb' );

	// array := [...] {nth -element sorted array}
	// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/implementing-binary-search-of-an-array
	function binarySearch( array, searchedValue ) {
		let min = 0;
		let max = array.length - 1;
		let guess = -1;

		while ( max > min ) {
			//updating the mid value
			guess = Math.floor( ( min + max ) / 2 );

			//searching for index and updating boundary if not found
			if ( array[ guess ] < searchedValue ) {
				min = guess + 1;
			} else if ( array[ guess ] > searchedValue ) {
				max = guess - 1;
			} else {
				return guess;
			}
		}
		return -1;
	}


	//needed for binary search so the numbers are sorted ascending
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/arrayay/sort
	function compareNumbers( a, b ) {
		return a - b;
	}

	function Function3j() {

		let arrayOfNumbers = JSON.parse( '[' + field3ja.value + ']' );
		arrayOfNumbers.sort( compareNumbers );
		let searchedElement = Number( field3jb.value );
		let result = binarySearch( arrayOfNumbers, searchedElement );
		if ( result < 0 ) {
			result3j.textContent = 'The element with value ' + searchedElement + ' is not present in submitted array.';
		} else {
			result3j.textContent = 'The element with value ' + searchedElement + ' has an index equal to ' + result;
		}

		field3ja.value = '';
		field3jb.value = '';
	}
	submit3j.addEventListener( 'click', Function3j );
} )( window, document );
