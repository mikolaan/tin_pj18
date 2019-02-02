( function ( window, document, undefined ) {
	// l) Napisz funkcje konstruktora, tworzącą obiekty reprezentujące studentów –
	// mają zawierać imię, nazwisko, nr indeksu,
	// tablicę z ocenami i metodę wypisującą imię, nazwisko i średnią ocen.

	'use strict';

	function Student( name, surname, transcriptNumber, grades ) {
		this.name = name;
		this.surname = surname;
		this.transcriptNumber = transcriptNumber;
		this.grades = grades;
		this.StudentData = function () {
			let fullInfo = '';
			fullInfo += this.name + ', ';
			fullInfo += this.surname + ', ';
			fullInfo += grades.reduce( ( a, b ) => a + b ) / grades.length + '\n';
			return fullInfo;
		};
	}

	const result3l = document.querySelector( '.result3l' );
	const submit3l = document.querySelector( '.submit3l' );
	const field3lName = document.querySelector( '.field3l_name' );
	const field3lSurname = document.querySelector( '.field3l_surname' );
	const field3lTranscriptNumber = document.querySelector( '.field3l_transcript' );
	const field3lGrades = document.querySelector( '.field3l_grades' );

	function Function3l() {
		let name = field3lName.value;
		let surname = field3lSurname.value;
		let transcript = field3lTranscriptNumber.value;
		let currentGrades = JSON.parse( '[' + field3lGrades.value + ']' );

		let me = new Student( name, surname, transcript, currentGrades );

		result3l.textContent = me.StudentData();
		field3lName.value = '';
		field3lSurname.value = '';
		field3lTranscriptNumber.value = '';
		field3lGrades.value = '';
	}


	submit3l.addEventListener( 'click', Function3l );

} )( window, document );
