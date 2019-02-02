( function ( window, document, undefined ) {
	// // d) Napisz funkcję JS walidującą zawartość formularza – formularz powinien mieć przynajmniej jedno obowiązkowe pole numeryczne i jedno pole do sprawdzenia wyrażeniem regularnym (np. e-mail). W razie nie przejścia walidacji przez pole wyświetl odpowiednie informacje by poinformować użytkownika. Jeśli walidacja jest nieudana, funkcja powinna zwracać false, w przeciwnym wypadku true
	'use strict';

	const submitData = document.querySelector( '.AddToTable' );

	function validateNumber( value ) {
		return !isNaN( Number( value ) );
	}

	function validateEmail( value ) {
		let re = new RegExp( /(\w+)@{1}(\w+)\.{1}(\w+)/ );
		return !re.test( value );
	}

	function AddRowToTable() {
		let subject = document.getElementById( 'subject' );
		let name = document.getElementById( 'name' );
		let email = document.getElementById( 'email' );
		let grade = document.getElementById( 'grade' );

		if ( !validateNumber( grade.value ) ) {
			window.alert( `Correct the value of grade : '${grade.value}' it is not a number.` );
			return;
		}
		if ( validateEmail( email.value ) ) {
			window.alert( `Submitted value : '${email.value}' is not ae e-mail.` );
			return;
		}


		let row = document.createElement( 'tr' );
		let subjectColumn = document.createElement( 'td' );
		let nameColumn = document.createElement( 'td' );
		let emailColumn = document.createElement( 'td' );
		let gradeColumn = document.createElement( 'td' );

		let subjectNode, nameNode, emailNode, gradeNode;

		subjectNode = document.createTextNode( `${subject.value}` );
		nameNode = document.createTextNode( `${name.value}` );
		emailNode = document.createTextNode( `${email.value}` );
		gradeNode = document.createTextNode( `${grade.value}` );

		subjectColumn.appendChild( subjectNode );
		nameColumn.appendChild( nameNode );
		emailColumn.appendChild( emailNode );
		gradeColumn.appendChild( gradeNode );
		row.appendChild( subjectColumn );
		row.appendChild( nameColumn );
		row.appendChild( emailColumn );
		row.appendChild( gradeColumn );


		document.getElementById( 'tbody' ).appendChild( row );
		subject.value = '';
		name.value = '';
		email.value = '';
		grade.value = '';

	}


	submitData.addEventListener( 'click', AddRowToTable );

} )( window, document );
