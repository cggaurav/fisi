$(function(){

	// console.log("Hello!");
	$.fn.textWidth = function(text, font) {
	    if (!$.fn.textWidth.fakeEl) $.fn.textWidth.fakeEl = $('<span>').hide().appendTo(document.body);
	    $.fn.textWidth.fakeEl.html(text || this.val() || this.text()).css('font', font || this.css('font'));
	    return $.fn.textWidth.fakeEl.width();
	};


	
	$('.taskinput').keypress(function (e) {
	  if (e.which === 13) {
	  	console.log("FUCK");
	  	e.preventDefault();
	    window.location.href = "fisi.html";
	  }
	});

});
	