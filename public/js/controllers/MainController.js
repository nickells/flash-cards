app.controller('MainController', function ($scope,FlashCardsFactory,ScoreFactory) {
	$scope.showLoadingIcon = true;
	FlashCardsFactory.getFlashCards().then(function(data,err){
		$scope.flashCards = data;
		$scope.showLoadingIcon = false;
	})
	$scope.categories = [
	'All Categories',
	'MongoDB',
	'Express',
	'Angular',
	'Node'
	]

	$scope.getCategoryCards = function(category){
			$scope.showLoadingIcon = true;
			console.log($scope.showLoadingIcon)
			$scope.selectedCategory = category;
		if(category==='All Categories'){
			FlashCardsFactory.getFlashCards().then(function(data,err){
				$scope.flashCards = data;
				$scope.showLoadingIcon=false;
			})
		} else {
			FlashCardsFactory.getFlashCards(category).then(function(data,err){
				$scope.flashCards = data;
				$scope.showLoadingIcon=false;
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





