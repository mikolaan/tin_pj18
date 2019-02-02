( function ( window, document, undefined ) {
	// m) Stwórz prototyp obiektu reprezentującego studenta przy pomocy inicjalizatora
	// – obiekt ma zawierać tablicę z listą przedmiotów z programu studiów,
	// przygotuj funkcję tworzącą nowe obiekty na podstawie prototypu,
	// ustawiającą im własności imię, nazwisko i nr indeksu.

	'use strict';
	let curriculumContainer = {
		curriculum: [ 'APBD', 'TIN', 'PRO1abd', 'ABD', 'PRO2abd' ]
	};

	function NewStudent( prototyp, name, surname, transcriptNumber ) {
		let student = Object.create( prototyp );
		student.name = name;
		student.surname = surname;
		student.transcriptNumber = transcriptNumber;
		return student;
	}

	const result3m = document.querySelector( '.result3m' );
	const submit3m = document.querySelector( '.submit3m' );

	function Function3m() {
		let result = '';
		result += JSON.stringify( NewStudent( curriculumContainer, 'Andrzej', 'Mikolajczak', 's13092' ), null, 4 ) + '\n';
		result += NewStudent( curriculumContainer, 'Andrzej', 'Mikolajczak', 's13092' ).curriculum;
		result3m.textContent = result;
	}

	submit3m.addEventListener( 'click', Function3m );
} )( window, document );
