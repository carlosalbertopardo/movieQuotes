var Round = (function () {

	var currentErrors = 0;
	var current = 0;

	function loadCard(quote) {

		//Load the movie Quote inside the container
		var $quoteContainer = $('#quote');
		$quoteContainer.html(quote);
	
	}

	function clearSection(sectionId) {

		var $answerContainer = $(sectionId);
		$answerContainer.html('');

	}

	function loadAnswer(title) {

		clearSection('#answers');

		var titleArray = title.split('');

		titleArray.map(function (element, index) {

			//Create the letter element
			var letter = document.createElement('span');
			$(letter).addClass('letter');
			$(letter).attr('data-attr', element)

			letter.innerHTML = 'X';

			if(element === ' ') {
				$(letter).addClass('space');
			}


			$('#answers').append(letter);

		})

	}


	return {

		init: function (roundInfo) {

			loadCard(roundInfo.quote);
			loadAnswer(roundInfo.movieTitle);

		}

	}

})();