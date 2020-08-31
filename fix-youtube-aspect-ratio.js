jQuery(function($) {

  // Fix all Youtube aspect ratio's
  
	var $allVideos = $("iframe[src^='https://www.youtube.com']");
  // Replace with your content container ID or Class
	$fluidEl = $("YOUR CONTENT CONTAINER");
	$allVideos.each(function() {
		$(this)
			.data('aspectRatio', this.height / this.width)
			.removeAttr('height')
			.removeAttr('width');
	});
	$(window).resize(function() {
	  var newWidth = $fluidEl.width();
	  $allVideos.each(function() {
		var $el = $(this);
		$el
		  .width(newWidth)
		  .height(newWidth * $el.data('aspectRatio'));
	  });
	}).resize();
});
