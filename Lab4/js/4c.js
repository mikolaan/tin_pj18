( function ( window, document, undefined ) {
	// c) Napisz funkcję JS dodającą wiersz do tabelki HTML w oparciu o dane wprowadzone na formularzu umieszczonym na tej samej stronie

	'use strict';


	const submitData = document.querySelector( '.AddToTable' );

	function AddRowToTable() {
		let subject = document.getElementById( 'subject' );
		let name = document.getElementById( 'name' );
		let email = document.getElementById( 'email' );
		let grade = document.getElementById( 'grade' );

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
