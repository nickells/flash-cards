app.controller('MainController', function ($scope,FlashCardsFactory,ScoreFactory) {
	FlashCardsFactory.getFlashCards().then(function(data,err){
		$scope.flashCards = data
		console.log(data)
	})

	// console.log ($scope.flashCards)
	// $scope.scores = 

	$scope.answerQuestion = function (answer, flashCard) {
		if (!flashCard.answered) {
			flashCard.answered = true;
			flashCard.answeredCorrectly = answer.correct;
			if (answer.correct){
			ScoreFactory.correct++;
			}
			else{
			ScoreFactory.incorrect++;
			}
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

app.filter('cheat',function(){

	return function(answer){
		return answer.filter(function(s){
			return s.correct;
		})	
	}
})