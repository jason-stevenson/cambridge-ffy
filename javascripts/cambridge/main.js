
$( document ).ready(function() {
 	
 	// Chapter cover
 	// ================================================================
	// As we cant use the body element to apply the cover images to
	// we need to re-size the internal div to fill the browser window
	$('#cover').css({'height':($(window).height())});

	$(window).resize(function(){
    	$('#cover').css({'height':($(window).height())});
    });
	

	$( ".chapter, .title" ).wrapAll('<div class="masthead"></div>');
	$( ".masthead" ).wrapInner('<div class="wrapper"></div>');
	$( ".wrapper" ).wrapInner('<div class="inner"></div>');



	// EOC
 	// ================================================================
	$('.eoc').wrapInner('<div class="content"></div>');
	$('.eoc .download a').html('<span class="icon-doc-solid"></span><div></div>');


	// Panels
 	// ================================================================
	// Investigate Panels
	//$('.investigate-panel').wrapInner('<div class="content"></div>');
	$('.investigate-panel .download a').html('<span class="icon-doc-solid"></span><div></div>');

	// Design brief panel
	$('.design-brief-panel .download a').html('<span class="icon-doc-solid"></span><div></div>');

	// Collaborate Panels
	//$('.collaborate-panel').wrapInner('<div class="content"></div>');
	$('.collaborate-panel .download a').html('<span class="icon-doc-solid"></span><div></div>');

	// Solution Panels
	$('.solution-panel .download a').html('<span class="icon-doc-solid"></span><div></div>');

	// Reflect Panels
	$('.reflect-panel .download a').html('<span class="icon-doc-solid"></span><div></div>');


	//Acitivity panel
	$('.activity-panel').wrapInner('<div class="inner"></div>');
	$('.activity-panel').prepend('<div class="top"></div>');
	$('<div class="bottom"></div>').insertAfter('.activity-panel .inner');
	$('.activity-panel .download a').html('<span class="icon-doc-solid"></span><div></div>');


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