'use strict';

var movieQuotes = (function () {

	var quotes = [];

	//Private Methods
	function getMovieInfo() {
		var index = Math.floor(Math.random() * (quotes.length) );
		var movieObject = quotes[index];
		quotes.splice(index,1);
		return movieObject;
	};

	function setNextMovieButton() {
		$('#nextMovie').click(function () {

			Round.close();
			var newCard = getMovieInfo();
			Round.init(newCard);

		});
	}

	return {
		init: function() {

			var currentCard = getMovieInfo();
			Round.init(currentCard);
			setNextMovieButton();

		},
		loadQuote: function (quoteObject) {
			quotes.push(quoteObject);
		},
		showMovies: function () {
			console.log(quotes);
		}

	}


})();


var movieQuotesArray = [

	{
		quote: 'I\'m the king of the world',
		movieTitle: 'Titanic',
		img: '../imgs/movies/titanic.png'
	},
	{
		quote: 'Luke i\'m your father!',
		movieTitle: 'Star Wars',
		img: '../imgs/movies/star-wars.png'
	},
	{
		quote: 'I hate snakes',
		movieTitle: 'Indiana Jones',
		img: '../imgs/movies/indiana-jones.png'
	},
	{
		quote: 'You\'re gonna need a bigger boat.',
		movieTitle: 'Jaws'
	}/*,
	{
		quote: 'They may take our lives, but they\'ll never take our freedom!',
		movieTitle: 'Braveheart'
	},
	{
		quote: 'When you realize you want to spend the rest of your life with somebody, you want the rest of your life to start as soon as possible.',
		movieTitle: 'When Harry Met Sally'
	},
	{
		quote: 'You complete me.',
		movieTitle: 'Jerry Maguire'
	},
	{
		quote: 'These go to eleven.',
		movieTitle: 'Spinal Tap'
	},
	{
		quote: 'I\'m just one stomach flu away from my goal weight.',
		movieTitle: 'The Devil Wears Prada'
	},
	{
		quote: 'They call it a Royale with cheese.',
		movieTitle: 'Pulp Fiction'
	},
	{
		quote: 'I\'m having an old friend for dinner.',
		movieTitle: 'the Silence of the Lambs'
	}*/
];  

movieQuotesArray.map(function(element,index) {
	movieQuotes.loadQuote(element);
})


movieQuotes.init();

