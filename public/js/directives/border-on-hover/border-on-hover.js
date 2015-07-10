app.directive('borderOnHover',function(){
	return{
		restrict: 'A',
		link: function(scope,element,attributes){
			element.on('mouseenter',function(){
				console.log('scope');
				element.addClass('addHover')
			})

		}
	}

})