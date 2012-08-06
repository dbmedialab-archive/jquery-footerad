/*

	jquery-footerad
	--------

	@file       jquery-footerad.js
	@version    
	@date       01.06.12
	@author     Tom-Marius Olsen <tmol@dagbladet.no>

	Copyright (c) 2012 DB Medialab AS <http://www.dbmedialab.no/>

*/

(function($) {

	$.fn.footerad = function(options){
		
		var opts = $.extend({}, $.fn.footerad.defaults, options);
		
		return this.each(function(){
			var _element = this,
				   timer = "",
				       i = 0;
			
			if(!opts.cu){
			
				console.warn('jquery-footerad: cu må settes.')
			
			} else {
			
				$(_element).css({ position:'fixed', bottom: ($(_element).height()*-1), display: 'block' } );
							
				function increment(){
					if(opts.loop){
						return (i == (opts.frame.length-1)) ? (0) : (i+1);
					} else {
						return (i == (opts.frame.length-1)) ? (i) : (i+1);
					};
				};
				
				function show(){
					if(opts.debug){
						$(_element).html('<img src="http://placehold.it/980x150/'+(Math.random()*0xFFFFFF<<0).toString(16)+'/FFFFFF/&text=Annonse+980x150" />');
					} else {
						$(_element).html('<iframe src="http://annonser.dagbladet.no/eas?cu=' + opts.cu + ';cre=mu;" width="980" height="150" scrolling="no" frameborder="0" marginheight="0" marginwidth="0"></iframe>');
					};
					$(_element).animate({ bottom: 0 }, opts.speed);
					timer = setTimeout(hide, opts.frame[i].duration);
					if(opts.debug)
						console.log('Vis -> index: ' + i + ' vises: ' + opts.frame[i].duration);
				};
				
				function hide(){
					$(_element).animate({ bottom: ($(_element).height()*-1)}, opts.speed, 'linear', function(){
						$(_element).html('');
					});
					timer = setTimeout(show, opts.frame[i].interval);
					if(opts.debug)
						console.log('Sjul -> index: ' + i + ' neste om: ' + opts.frame[i].interval);
					i = increment();
				};
				
				timer = setTimeout(show, opts.frame[i].interval);
			};
		});
		
	};
	
	$.fn.footerad.defaults = {
		cu: false,
		frame: [
			{ interval: 3000, duration: 10000 }
		],
		speed: 250,
		loop: false,
		debug: false
	};
	
}(jQuery));