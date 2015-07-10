app.directive('borderOnHover',function(){
	return{
		restrict: 'A',
		link: function(scope,element,attributes){
			element.on('mouseenter',function(){
				console.log(element);
				element.addClass('addBorder')
			})
			element.on('mouseleave',function(){
				console.log(element);
				element.removeClass('addBorder')
			})


		}
	}

})