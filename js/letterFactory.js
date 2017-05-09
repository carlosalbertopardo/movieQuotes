function LetterFactory () {}

LetterFactory.prototype.createLetter = function(letter) {

	function createLetterStructure (letterObject) {

		//create Letter Structure
		var letterStructure = document.createElement('span');
		$(letterStructure).addClass('letter');

		letter = letter.toUpperCase();

		//TODO
		letterStructure.innerHTML = 'X';

		//Create Spaces
		if(letter === ' ') {
			$(letterStructure).addClass('space');
		}

		bindKey(letterObject, letterStructure)

		return letterStructure;

	}

	function getLetterKeyCode(letter) {
		var keycode  = letter.toUpperCase().charCodeAt(0);
		return keycode;

	}

	function showLetter(letterStructure, letter) {
		letterStructure.innerHTML = letter ;
	}

	//Generates a random id
	/*
	function generatId() {
	  function s4() {
	    return Math.floor((1 + Math.random()) * 0x10000)
	      .toString(16)
	      .substring(1);
	  }
	  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
	    s4() + '-' + s4() + s4() + s4();
	}*/


	//Bind key to letter
	function bindKey(letterObject, letterStructure) {

		var keycode = getLetterKeyCode(letterObject.letter);

		$( window ).on( "keyCodePress-"+keycode , function( event, keyLetter ) {
			showLetter(letterStructure, keyLetter);
			letterObject.setGuessed('true');
			letterObject.notify(keyLetter);
		});

	}

	var letterObject = {
		//id: generatId(),
		structure: null,
		guessed: false,
		letter: letter,
		setGuessed: function(bool){
			this.guessed = bool;
		},
		notify: function (letter) {
			$(window).trigger( 'notifyLetterChange' , letter);
		},
		render: function function_name(parent) {
			$(parent).append(this.structure);
		},
		init: function(){
			this.structure = createLetterStructure(this);
		}

	}

	letterObject.init();

	return letterObject;

}