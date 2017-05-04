function LetterFactory () {}


LetterFactory.prototype.createLetter = function(letter) {

	function createLetterStructure () {

		console.log(this);

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

		bindKey(letter, letterStructure);

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
	function generatId() {
	  function s4() {
	    return Math.floor((1 + Math.random()) * 0x10000)
	      .toString(16)
	      .substring(1);
	  }
	  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
	    s4() + '-' + s4() + s4() + s4();
	}


	//Bind key to letter
	function bindKey(letter, letterStructure) {

		var keycode = getLetterKeyCode(letter);

		$( window ).on( "keyCodePress-"+keycode , function( event, keyLetter ) {
			
			showLetter(letterStructure, keyLetter);

		});

		/*
		$('body').keyup(function (event) {

			//jquery's map is different?

			var elements =  $('span[data-attr="' + event.key.toUpperCase() + '"');

			if(elements.length !== 0) {

				$('span[data-attr="' + event.key.toUpperCase() + '"').map(function (index, element) {

					showletter(element);
					updateLetterObject(event.key.toUpperCase());
					
					if (checkWin()) {
						alert('You won!!!');
					};

				});

			} else {
				
				currentErrors++;

				if (currentErrors >= 3) {

					alert('looooserrr');

				}

			}

		});*/

	}

	var letterObject = {
		id: generatId(),
		structure: createLetterStructure(letter),
		guessed: false,
		setGuessed: function(bool){
			this.guessed = bool
		},
		render: function function_name(parent) {
			$(parent).append(this.structure);
		},

	}

	return letterObject;

}