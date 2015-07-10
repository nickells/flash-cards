app.controller('MainController', function ($scope,FlashCardsFactory,ScoreFactory) {
	$scope.showLoadingIcon = true;
	FlashCardsFactory.getFlashCards().then(function(data,err){
		$scope.flashCards = data;
	})
	.then(function(){
		$scope.showLoadingIcon = false;
	})
	// debugger;
	// console.log($scope.showLoadingIcon)
	

	$scope.categories = [
	'All Categories',
	'MongoDB',
	'Express',
	'Angular',
	'Node'
	]

	$scope.getCategoryCards = function(category){
			$scope.showLoadingIcon = true;
			// debugger;
			console.log($scope.showLoadingIcon)
			$scope.selectedCategory = category;
			// $scope.showFlashcard=false;
		if(category==='All Categories'){
			FlashCardsFactory.getFlashCards().then(function(data,err){
				$scope.flashCards = data;
			// $scope.showFlashcard1=true;
			// console.log(data)
			})
			.then(function(){
				$scope.showLoadingIcon=false;
			})
		} else {
			// console.log($scope)
			FlashCardsFactory.getFlashCards(category).then(function(data,err){
				$scope.flashCards = data;
				// $scope.showFlashcard1=true;
			})
			.then(function(){
				$scope.showLoadingIcon=false;
			})
			
		}
			// $scope.showFlashcard=false;
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





