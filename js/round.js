var Round = (function () {

	var currentErrors = 0;
	var current = 0;
	var letterObjects = [];


	//Load the movie Quote inside the container
	function loadCard(quote) {


		var $quoteContainer = $('#quote');
		$quoteContainer.html(quote);
	
	}

	//Clears a section html
	function clearSection(sectionId) {

		var $answerContainer = $(sectionId);
		$answerContainer.html('');

	}

	//TODO
	function updateLetterObject(letterId) {
		
		//letterObjects[letterId].guessed = true;

	}


	//TODO
	function checkWin() {

		for (letter in letterObjects ) {

			if(letterObjects[letter].guessed == false ){
				return
			}

		}

		return true;

	}

	//Create the events for each key
	function setKeyboard () {

		$('body').keyup(function (event) { //The keyup always returns the uppercase letter keycode.
			
			if ((event.keyCode >= 48 && event.keyCode <= 90) || (event.keyCode >= 96 && event.keyCode <= 105)) { 

				//trigger event

				$( window).trigger( "keyCodePress-"+event.keyCode , event.key);

				updateLetterObject(event.key.toUpperCase());
		
				/*
				if (checkWin()) {
					alert('You won!!!');
				};
				*/

			}

		})

		console.log(letterObjects);

	}


	//Load the title of each movie.
	function loadAnswer(title) {

		clearSection('#answers');

		var titleArray = title.split('');
		var letterFactory = new LetterFactory;

		titleArray.map(function (element, index) {

			var letterObject = letterFactory.createLetter(element);
			letterObjects[letterObject.id] = letterObject;
			letterObject.render('#answers');

		})

		setKeyboard();

	}


	return {

		init: function (roundInfo) {

			loadCard(roundInfo.quote);
			loadAnswer(roundInfo.movieTitle);

		}

	}

})();





