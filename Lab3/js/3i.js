( function ( window, document, undefined ) {
	// i) Funkcja podająca monety, przy pomocy których powinna być wydana konkretna kwota przy użyciu zadanych nominałów
	// Przykładowe wywołanie: amountTocoins(46, [25, 10, 5, 2, 1])
	// Kwota to 46, dostępne nominały to 25, 10, 5, 2, 1.
	// Wyjście: 25, 10, 10, 1

	'use strict';

	// function ConvertToArray( arrayOfStrings ) {
	// 	// for (let i = 0; i < array.length; i++) {
	// 	// 	array[i]
	// 	// }
	// 	return arrayOfStrings.map( Number );
	// }

	function AmountToCoins( amount, nominals ) {
		let i = 0;
		let coins = [];
		while ( amount > 0 ) {
			if ( amount < nominals[ i ] ) {
				i++;
			} else {
				coins.push( nominals[ i ] );
				amount -= nominals[ i ];
			}
		}
		return coins;
	}

	const result3i = document.querySelector( '.result3i' );
	const submit3i = document.querySelector( '.submit3i' );
	const field3i_a = document.querySelector( '.field3i_money' );
	const field3i_b = document.querySelector( '.field3i_denomination' );

	//needed for sorting so the numbers in the nominal array are sorted descending
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
	function compareNumbers( a, b ) {
		return b - a;
	}

	function Function3i() {
		let numberToDivide = Number( field3i_a.value );
		let arrOfNumbers = field3i_b.value.split( ',' );
		arrOfNumbers = arrOfNumbers.map( Number );
		arrOfNumbers.sort( compareNumbers );
		result3i.textContent = 'Number ' + numberToDivide + ' was divied with following result ' + AmountToCoins( numberToDivide, arrOfNumbers );
		field3i_a.value = '';
		field3i_b.value = '';
	}
	submit3i.addEventListener( 'click', Function3i );
} )( window, document );
