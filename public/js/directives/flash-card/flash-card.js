app.directive('flashCard',function(ScoreFactory){
	return {
		restrict:'E',
		templateUrl:'js/directives/flash-card/flash-card.html',
		link: function(scope,element){
			// console.log(scope.card)
			// console.log(scope);
			scope.answerQuestion = function (answer, flashCard) {

			if (!flashCard.answered) {
			// flashCard.answered = true;
				flashCard.answeredCorrectly = answer.correct;
				if (answer.correct){
					ScoreFactory.correct++;
				}
				else{
					ScoreFactory.incorrect++;
				}
			}
			}
		},
		scope:{
			card:'='
		}

	}
})