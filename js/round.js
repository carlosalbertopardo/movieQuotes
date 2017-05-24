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


	function bindKeys (event, round) { //The keyup always returns the uppercase letter keycode.
		
		if ((event.keyCode >= 48 && event.keyCode <= 90) || (event.keyCode >= 96 && event.keyCode <= 105)) { 

			console.log('event.keyCode');
			console.log(event.keyCode);

			//trigger event
			$( window).trigger( "keyCodePress-"+event.keyCode , event.key);

			/* Check if the event Does not exist */
			if ($._data(window, 'events')["keyCodePress-"+event.keyCode] === undefined) {
				round.checkLoss(event.key);
			}

		};

	}


	//Create the events for each key
	function setKeyboard (round) {

		$('body').keyup(function () {
			return bindKeys(event,round);
		});

		$(window).on('notifyLetterChange', function(event, letter) {
			round.checkWin();
		});

	}

	function unbindKeyEvents() {

		$('body').off('keyup');

		var activeEvents = $._data(window, 'events');

		console.log($._data(window, 'events'));

		for (event in activeEvents) {

			$(window).off(event);

		}

		console.log('unbindenEVENTS!!!');
		console.log($._data(window, 'events'));

	}


	return {
		movieTitle: null,
		init: function (roundInfo) {
			
			if ( typeof roundInfo !== 'undefined') {

				loadCard(roundInfo.quote);
				this.loadAnswer(roundInfo.movieTitle);
				setKeyboard(this);

				this.currentErrors = 0;
				$('.current-movie-errors').html(0);				

			} else {
				alert('Game Finished');
			}

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

			this.finishRound('win');

		},
		checkLoss: function (letter) {


			console.log('checking LOSS!!!');
			console.log(letter);

			letter = letter.toUpperCase();

			var letters = this.movieTitle.letters;

			for (var i = 0; i < letters.length; i++) {
			
				if(letters[i].letter === letter) {
					console.log('LETTER FOUND!')
					return;
				}
			
			}

			console.log(this.currentErrors);

			this.currentErrors++;

			//updateCurrent errors in the html
			$('.current-movie-errors').html(this.currentErrors);

			if(this.currentErrors >= 3) {
				this.finishRound('lose');
			}
		},
		finishRound: function (status) {

			this.showButtons(status);
			//Show modal to continue.

		},
		showButtons: function(status) {

			$('.controls').show();
			$('.controls .' +status ).show();

		},
		hideButtons: function () {
			$('.controls').hide();
			$('.controls .status').hide();			
		},
		close: function () {
			
			this.hideButtons();
			unbindKeyEvents();
			currentErrors = 0;
			$('.current-movie-errors').html(this.currentErrors);
			console.log('CLOSING ROUND');

		}

	}

})();




