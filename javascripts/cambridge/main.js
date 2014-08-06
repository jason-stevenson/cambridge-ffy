
$( document ).ready(function() {
 	

 	// var docHeight = $(window).height();
  //  	var footerHeight = $('.chapter-opener .content').height();
  //  	var footerTop = $('.chapter-opener .content').position().top + footerHeight + 300;


 	// Chapter cover
 	// ================================================================
	// As we cant use the body element to apply the cover images to
	// we need to re-size the internal div to fill the browser window
	
	$('#cover').append('<div class="image"></div>');
	$('#cover').append('<div class="footer"><img src="images/covers/cover-footer.png"></img></div>');
	


	$('#cover').css({'height':($(window).height())});
	$('#cover .image').css({'height':($(window).height()-420)});
	$( ".chapter-opener").css({'height':($(window).height()*0.75)});

	// $( ".chapter-opener .content").css({'height':($(window).height()*0.75)});

	$(window).resize(function(){
    	$('#cover').css({'height':($(window).height())});
    	$('#cover .image').css({'height':($(window).height()-420)});
    	$( ".chapter-opener").css({'height':($(window).height()*0.75)});



    	// if (footerTop < docHeight) {
    	// 	$('#footer').css('margin-top', 10 + (docHeight - footerTop) + 'px');
   		// }

    	
    });
	

	$( ".chapter-opener .chapter, .chapter-opener .title" ).wrapAll('<div class="masthead"></div>');
	$( ".chapter-opener .masthead" ).wrapInner('<div class="wrapper"></div>');
	$( ".chapter-opener .wrapper" ).wrapInner('<div class="inner"></div>');



	
		

            


	// EOC
 	// ================================================================
	$('.eoc').wrapInner('<div class="content"></div>');
	$('.eoc .download a').html('<span class="icon-doc-solid"></span><div></div>');

	// Recipes
	$('.recipes .download a').html('<span class="icon-doc-solid"></span><div></div>');
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