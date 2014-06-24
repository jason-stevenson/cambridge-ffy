
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



	// EOC
 	// ================================================================
	$('.eoc').wrapInner('<div class="content"></div>');
	$('.eoc .download a').html('<span class="icon-doc-solid"></span><div>Download</div>');


	// Panels
 	// ================================================================
	// Investigate Panels
	$('.investigate-panel').wrapInner('<div class="content"></div>');


	//Acitivity panel
	$('.activity-panel').wrapInner('<div class="inner"></div>');
	$('.activity-panel').prepend('<div class="top"></div>');
	$('<div class="bottom"></div>').insertAfter('.activity-panel .inner');
	$('.activity-panel .download a').html('<span class="icon-doc-solid"></span><div>Download</div>');


	//Acitivity panel
	$('.interactive-panel').wrapInner('<div class="inner"></div>');
	$('.interactive-panel').prepend('<div class="top"></div>');
	$('<div class="bottom"></div>').insertAfter('.interactive-panel .inner');
	

	// Colour list items
	 $('ol li').wrapInner('<span class="item"/></span>');



	// GLOBAL
	// ================================================================
	// Lighbox / Modal
	$('<span class="icon-search"></span>').insertAfter('figure a[data-reveal-id] img');




	

});