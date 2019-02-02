( function ( window, document, undefined ) {
	// k) Stwórz obiekt przy pomocy inicjalizatora (object initializer),
	// obiekt powinien mieć przynajmniej 2-3 pola i 2-3 metody.
	// Napisz funkcję przyjmującą obiekt jako parametr
	// i wypisującą wszystkie jego własności wraz z ich typami

	'use strict';
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer

	function inspectObject( obiekt ) {
		let fullInfo = '';
		for ( let element in obiekt ) {
			fullInfo += element + ', \t';
			let prop = obiekt[ element ];
			fullInfo += typeof prop + ', \t';
			fullInfo += prop + '\n';
		}
		return fullInfo;
	}

	const result3k = document.querySelector( '.result3k' );
	const submit3k = document.querySelector( '.submit3k' );
	const field3k = document.querySelector( '.field3k' );

	function Function3k() {
		let userInput = field3k.value;

		let student = {
			age: 31,
			firstName: userInput,
			lastName: 'Mikolajczak',
			getIndex() {
				return 13092;
			},
			getCity() {
				return 'Warsaw';
			},
			getDepartment() {
				return 'Information Technology';
			}
		};

		result3k.textContent = inspectObject( student );
		field3k.value = '';
	}
	submit3k.addEventListener( 'click', Function3k );

} )( window, document );
