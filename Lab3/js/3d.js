( function ( window, document, undefined ) {
	/* d) Funkcja zwracająca litery z zadanego ciągu w kolejności alfabetycznej
	Przykładowy string : 'webmaster'
	oczekiwane wyjście : 'abeemrstw'
	*/
	'use strict';

	const result3d = document.querySelector( '.result3d' );
	const submit3d = document.querySelector( '.submit3d' );
	const field3d = document.querySelector( '.field3d' );

	function Function3d() {
		let userInput = field3d.value;

		let arrOfChars = userInput.split( '' );
		let sortedUserInput = '';
		arrOfChars = arrOfChars.sort();

		for ( let i = 0; i < arrOfChars.length; i++ ) {
			sortedUserInput += arrOfChars[ i ];
		}

		result3d.textContent = 'Sequence \'' + userInput + '\' was sorted to \'' + sortedUserInput + '\'.';
		field3d.value = '';
	}
	submit3d.addEventListener( 'click', Function3d );
} )( window, document );
