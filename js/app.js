'use strict';


var movieQuotes = (function () {

	var quotes = [];

	//Private Methods
	function getMovieInfo() {
		var index = Math.floor(Math.random() * (quotes.length) );
		return quotes[index];
	};


	return {
		init: function() {

			var currentCard = getMovieInfo();
			Round.init(currentCard);

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
		movieTitle: 'Titanic'
	},
	{
		quote: 'Luke i\'m your father!',
		movieTitle: 'Star Wars'
	},
	{
		quote: 'I hate snakes',
		movieTitle: 'Indiana Jones'
	},
	{
		quote: 'You\'re gonna need a bigger boat.',
		movieTitle: 'Jaws'
	}
];  

movieQuotesArray.map(function(element,index) {
	movieQuotes.loadQuote(element);
})


movieQuotes.init();

