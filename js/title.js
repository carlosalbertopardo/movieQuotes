var TitleFactory = function () {};
	

TitleFactory.prototype.createTitle = function(titleString) {

	var titleContainer = document.createElement('div');
	titleContainer.className = 'title';

	//Transform the string into an array to map.
	var titleArray = titleString.split('');

	//Create a letterFactory
	var letterFactory = new LetterFactory;

	var letterObjects = [];

	titleArray.map(function (element, index) {

		var letterObject = letterFactory.createLetter(element);
		letterObject.render(titleContainer);

		//Add to letter Objects
		if (letterObject.letter !== ' ') {
			letterObjects.push(letterObject);			
		}

	})

	return {
		letters: letterObjects,
		titleStructure: titleContainer,
		render: function (parent) {
			$(parent).append(this.titleStructure);
		}

	}

}


