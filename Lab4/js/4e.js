( function ( window, document, undefined ) {
	// // e) Stwórz klasę Student. Student powinien być opisywany imieniem, nazwiskiem, id i tablicą zawierającą oceny oraz metodą liczącą średnią ocen. Stwórz plik HTML z formularzem pozwalającym na wprowadzenie/edycję danych studenta (wystarczy obsłużyć pojedynczy obiekt), drugi formularz pozwalający na dodawanie ocen do tablicy i obszar, w którym wyświetlane są dane i oceny studenta + średnią ocen. Po każdej modyfikacji danych/dopisaniu oceny aktualizuj wyświetlane informacje.

	'use strict';
	class Student {
		constructor( name, surname, id, grades ) {
			this.name = name;
			this.surname = surname;
			this.id = id;
			this.grades = grades;
		}
		averageGrades() {
			if ( this.grades.length > 0 ) {
				return ( this.grades.reduce( ( a, b ) => {
					return Number( a ) + Number( b );
				} ) / this.grades.length );
			} else {
				return NaN;
			}
		}
	}

	const myStudent = new Student( '', '', '', [] );
	const addNewStudent = document.querySelector( '.newData' );
	const addGrade = document.querySelector( '.newGrade' );

	function updateData() {
		document.getElementById( 'name' ).textContent = myStudent.name;
		document.getElementById( 'surname' ).textContent = myStudent.surname;
		document.getElementById( 'id' ).textContent = myStudent.id;
		document.getElementById( 'grades' ).textContent = myStudent.grades;
		document.getElementById( 'average' ).textContent = myStudent.averageGrades();
	}

	function enterNewStudent() {
		document.getElementById( 'newData' ).onclick = () => {
			myStudent.name = document.getElementById( 'newName' ).value;
			myStudent.surname = document.getElementById( 'newSurname' ).value;
			myStudent.id = document.getElementById( 'newId' ).value;
			updateData();
		};
		updateData();
	}

	function addNewGrade() {
		let grade = window.prompt( 'Enter grade' );
		myStudent.grades.push( grade );
		updateData();
	}

	addNewStudent.addEventListener( 'click', enterNewStudent );
	addGrade.addEventListener( 'click', addNewGrade );

} )( window, document );
