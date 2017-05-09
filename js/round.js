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

	//Create the events for each key
	function setKeyboard (round) {

		$('body').keyup(function (event) { //The keyup always returns the uppercase letter keycode.
			
			if ((event.keyCode >= 48 && event.keyCode <= 90) || (event.keyCode >= 96 && event.keyCode <= 105)) { 

				//trigger event
				$( window).trigger( "keyCodePress-"+event.keyCode , event.key);

				round.checkLoss(event.key);

			};

		});

		$(window).on('notifyLetterChange', function(event, letter) {
			round.checkWin();
		});

	}

	return {
		movieTitle: null,
		init: function (roundInfo) {
			
			loadCard(roundInfo.quote);
			
			this.loadAnswer(roundInfo.movieTitle);

			setKeyboard(this);
		},
		loadAnswer: function (titleString) {

			//Load the title of each movie.
			
			clearSection('#answers');

			var titleFactory =  new TitleFactory;
			var movieTitle = titleFactory.createTitle(titleString);

			movieTitle.render('#answers');

			this.movieTitle = movieTitle;

		},
		currentErrors: 0,
		checkWin: function () {

			console.log('checking win in movie title');
			console.log(this.movieTitle);

			var letters = this.movieTitle.letters;

			for (var i = 0; i < letters.length; i++) {

				if (!letters[i].guessed) {
					console.log('not yet');

					return false;
				}

			}

			alert('you won!!');

		},
		checkLoss: function (letter) {

			var letters = this.movieTitle.letters;

			for (var i = 0; i < letters.length; i++) {
			
				if(letters[i].letter === letter) {
					console.log('LETTER FOUND!')
					return;
				}
			
			}

			this.currentErrors++;

			if(this.currentErrors >= 3) {
				alert('game lost');
			}
		}

	}

})();




