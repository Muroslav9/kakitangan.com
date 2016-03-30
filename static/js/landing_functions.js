/************************ new custom js *************************/
$(document).ready(function() {
  function heightDetect(){
    $(".landscape_head").css("height", $(window).height());
  };
  heightDetect();
  $(window).resize(function() {
    heightDetect();
  });
  $('.slick-carousel').slick({
  	dots: true,
	  infinite: true,
	  speed: 300,
	  slidesToShow: 1,
	  adaptiveHeight: true
  });
  $('.payroll-carousel').slick({
  	arrows: true
  });
  
	var updateSlider = document.getElementById('tap'),
  	 updateSliderValue = document.getElementById('value');

	noUiSlider.create(updateSlider, {
		start: 48,
		behaviour: 'tap',
		connect: 'upper',
		range: {
			'min':  1,
			'max':  300
		},
		step: 1
	});
	updateSlider.noUiSlider.on('update', function( values, handle ) {
		updateSliderValue.innerHTML = 1*values[handle];
	});
});
