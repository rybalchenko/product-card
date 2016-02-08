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
		var prodColor = $('[name="product-color"]');
		prodColor.on('change', function(){
			// console.log($(this).val());

		});

	});

})(jQuery);
