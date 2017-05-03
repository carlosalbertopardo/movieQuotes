var Round = (function () {

	var currentErrors = 0;
	var current = 0;
	var titleLetters = {};

	function loadCard(quote) {

		//Load the movie Quote inside the container
		var $quoteContainer = $('#quote');
		$quoteContainer.html(quote);
	
	}

	function clearSection(sectionId) {

		var $answerContainer = $(sectionId);
		$answerContainer.html('');

	}

	function showletter(letter) {

		$(letter).html( $(letter).attr('data-attr'));

	}

	function updateLetterObject(letterString) {
		
		titleLetters[letterString] = true;

	}

	function checkWin() {

		for (letter in titleLetters ) {

			if(titleLetters[letter] == false ){
				return
			}

		}

		return true;

	}

	function bindLetters() {

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

		});

	}

	function loadAnswer(title) {

		clearSection('#answers');

		var titleArray = title.split('');

		titleArray.map(function (element, index) {

			//Create the letter element
			var letter = document.createElement('span');
			$(letter).addClass('letter');

			element = element.toUpperCase();


			$(letter).attr('data-attr', element);

			//TODO
			letter.innerHTML = 'X';

			//Create Spaces
			if(element === ' ') {
				$(letter).addClass('space');
			} else {
				//push letters 
				titleLetters[element] = false;
			}


			$('#answers').append(letter);


		})

		bindLetters();

	}


	return {

		init: function (roundInfo) {

			loadCard(roundInfo.quote);
			loadAnswer(roundInfo.movieTitle);

		}

	}

})();





