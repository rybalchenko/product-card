;(function($){

	$(function(){
		$('.ba-slider').slick({
			dots: true,
			infinite: false
		});
		var qtyField = $('.ba-product__qty-field'),
		qtyUp = $('.ba-product__qty-up'),
		qtyDown = $('.ba-product__qty-down');

		qtyUp.on('click', function(event){
			event.preventDefault();
			var oldVal =  qtyField.val();

			qtyField.val(++oldVal);
		});

		qtyDown.on('click', function(event){
			event.preventDefault();
			var oldVal =  qtyField.val();
			if (--oldVal > 0){
				qtyField.val(oldVal);
			}
		});

	var prodColor = $('[name="product_color"]'),
	colorBlack = $('.headphones-black'),
	colorGrey = $('.headphones-grey');

	prodColor.on('change', function(){
		var color = $(this).val();
		if(color === 'black'){
			colorBlack.show();
			colorGrey.hide();
		}else{
			colorBlack.hide();
			colorGrey.show();
		};

	});


});
})(jQuery);



		// var prodColor = $('[name="product_color"]');

		// prodColor.on('change', function(){
		// 	console.log($(this).val());
		// 	if($(this).val()=='black'){
		// 		$('.headphones-black').fadeIn('slow');
		// 		$('.headphones-grey').css('display', 'none');
		// 	}
		// 	else {
		// 		if($(this).val()=='grey'){
		// 			$('.headphones-black').css('display', 'none');
		// 			$('.headphones-grey').fadeIn('slow');
		// 		}
		// 	}
		// });
