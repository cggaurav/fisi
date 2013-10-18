    $(function(){

      $('.zen_toggle').click(function(){
        $('#normal').toggle();
        $('#zen').toggle();
      });

			$('.countdown').countdown({until: '+25m',
			layout: '{mnn}:{snn}', onTick: shiftProgressBar});
			$('.countdown').countdown('pause');

			$('input.taskinput').keypress(function(e){

				if ((e.which == 13) && (($('.meter>span').css('background-color') == "rgb(112, 101, 106)"))){

					$('.meter>span').attr("style", "background: #f05544");
				};


			})

			$('#task').submit(function(){
				$('.meter>span').attr("style", "background: #f05544");
        $('.countdown').countdown('resume');
        $('.tagline').html("DON'T GIVE UP NOW.");
				return false;

			});

			$('.taskinput').focusin(function(){
				if ( this.value == 'Put in a task here and determine the consequences.' ) {
            this.value = '';
        }
			});
			$('.taskinput').blur(function() {
        if (this.value === '') {
            this.value = this.defaultValue;
        }
      });
          var width =$(window).width();
          if (width < 894) {
            $('.taskinput').attr('value', '');
          }
          /*
      $(window).resize(function() {
          var width = $(window).width();
          console.log($(window).width());
          });
          */

});
	// # DONT GIVE UP NOW.
	// # IM COMING. WAIT FOR ME.
	// # RANDOM
	function changecolor(color){

		if (($('.meter>span').css('background-color') == "rgb(112, 101, 106)")){
			$('.countdown').countdown('resume');
  		$('.tagline').html("DON'T GIVE UP NOW.");
		};

		if (color == "red") {
			$('.meter>span').css("background", "#f05544");
		}
		else if (color == "orange") {
			// $('.meter>span').attr("style", "background: #f26721");

			$('.meter>span').css("background", "#f26721");
		}
		else if (color == "green") {
			$('.meter>span').css("background", "#76c043");
		};
		// red #f05544
		// orange #f26721
		// green #76c043

	}

	function shiftProgressBar(periods){
		time = (periods[5] * 60) + periods[6]
		totaltime = 25 * 60

		// move the span
    // $('.meter>span').attr('style', "width:" + (time/totaltime)*100 +"%")
    document.title = "" + (time/totaltime)*100 + "%";
		$('.meter>span').css('width', "" + (time/totaltime)*100 +"%")
		// if span is 50%
		if (time == (totaltime/2)) {
			$('.tagline').html("I'M COMING. WAIT FOR ME.");
		}
		else if (time == (totaltime * 0.9)) {
			// random stuff
// 			You must be some kind of rockstar!
// Someboday call the POLICE! We got a bad ass here!
// The force is strong with this one!
// Yo mama is gonna be so proud!
// Congratulations! Do you want a medal?!
// Great job! You are no longer an underachiever!
// Ladies and gentleman! WE HAVE A WINNER!
// Looks like you can do something else in your life, besides sucking
// You sir are a king! NOW TELL EVERYONE
// Barney Stinson, salutes your awesomeness
			var randomtext = [
				'You must be some kind of rockstar!',
				'Somebody call the POLICE! We got a bad ass here!',
				'The force is strong with this one!',
				'Yo mama is gonna be so proud!',
				'Congratulations! Do you want a medal?!',
				'Great job! You are no longer an underachiever!',
				'Ladies and gentleman! WE HAVE A WINNER!',
				'Looks like you can do something else in your life, besides sucking.',
				'You sir are a king! NOW TELL EVERYONE',
				'Barney Stinson, salutes your awesomeness'
			]
			$('.tagline').html(randomtext[Math.floor( Math.random() * 7 )]);
		}



	}

