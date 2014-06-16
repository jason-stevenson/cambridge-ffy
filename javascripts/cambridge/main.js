
$( document ).ready(function() {
 	
 	// Chapter cover
 	// ================================================================
	// As we cant use the body element to apply the cover images to
	// we need to re-size the internal div to fill the browser window
	$('.chapter-cover').css({'height':($(window).height())});

	$(window).resize(function(){
    	$('.chapter-cover').css({'height':($(window).height())});
    });

	$('.chapter-cover').wrapInner('<div class="masthead"></div>');


	// Investigate Panels
	$('.investigate-panel').wrapInner('<div class="content"></div>');


	//Acitivity panel
	$('.activity-panel').wrapInner('<div class="inner"></div>');
	$('.activity-panel').prepend('<div class="top"></div>');
	$('<div class="bottom"></div>').insertAfter('.activity-panel .inner');
	$('.activity-panel .download a').html('<span class="icon-doc-solid"></span><div>Download</div>');







	// $('.end-of-chapter .download a').html('<span class="icon-doc-solid"></span><div>Download</div>');



	// // Coloured bullets

	// $( ".end-of-chapter ul" ).each(function( index ) {
	//   $('.end-of-chapter ul li').wrapInner('<span class="item"/>');
	//   $(".end-of-chapter .item").css("color", "black");
	// });

	 $('ol li').wrapInner('<span class="item"/></span>');

});