app.controller('MainController', function ($scope,FlashCardsFactory) {
	FlashCardsFactory.getFlashCards().then(function(data,err){
		$scope.flashCards = data
		console.log(data)
	})

	// console.log ($scope.flashCards)

	$scope.answerQuestion = function (answer, flashCard) {
		if (!flashCard.answered) {
			flashCard.answered = true;
			flashCard.answeredCorrectly = answer.correct;
		}
	}

	$scope.categories = [
	'All Categories',
	'MongoDB',
	'Express',
	'Angular',
	'Node'
	]

	$scope.getCategoryCards = function(category){
			$scope.selectedCategory = category;
		if(category==='All Categories'){
			FlashCardsFactory.getFlashCards().then(function(data,err){
			$scope.flashCards = data
			console.log(data)
		})
		} else {
			console.log($scope)
			FlashCardsFactory.getFlashCards(category).then(function(data,err){
				$scope.flashCards = data
				console.log(data)
			})
			
		}
		isActive = true;
	}


});