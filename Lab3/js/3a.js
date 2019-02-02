( function ( window, document, undefined ) {
	//selectors
	//methods
	// events
	// } )( window, document );
	'use strict';

	//selectors
	const result3a = document.querySelector( '.result3a' );
	const submit3a = document.querySelector( '.submit3a' );
	const field3a = document.querySelector( '.field3a' );

	//methods
	// function expression
	let getRecurrentFactorial = function RecurrentFactorial( inputNumber ) {
		if ( inputNumber < 2 ) {
			return 1;
		} else {
			return inputNumber * RecurrentFactorial( inputNumber - 1 );
		}
	};

	// function declaration
	function IterativeFactorial( inputNumber ) {
		let product = 1;
		let tempNum = 0;
		for ( tempNum = 1; tempNum <= inputNumber; tempNum++ ) {
			product *= tempNum;
		}
		return product;
	}

	function Function3a() {

		let approach = document.querySelector( 'input[name="factorial"]:checked' ).value;
		let userNumber = Number( field3a.value );
		field3a.value = '';

		if ( isNaN( userNumber ) || userNumber < 1 ) {
			result3a.textContent = 'We can\'t count factorial for ' + userNumber;
		} else if ( approach === 'Iterative' ) {
			result3a.textContent = 'The result for number ' + userNumber + ' is ' + IterativeFactorial( userNumber );
		} else if ( approach === 'Recursive' ) {
			result3a.textContent = 'The result for number ' + userNumber + ' is ' + getRecurrentFactorial( userNumber );
		}
	}
	// events
	submit3a.addEventListener( 'click', Function3a );
} )( window, document );
