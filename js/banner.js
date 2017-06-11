$(function() {

	$('.banner_list li').on({

		mouseenter: function() {

			$('.banner_list li').attr('id', '')
			$(this).attr('id', 'moveStyle')

			$('.banner_list li .yc1').css({

				display: 'none'
			})

			$(this).children('.yc1').css({

				display: 'block'
			})



		},

		mouseleave: function() {

			$('.banner_list li .yc1').css({

				display: 'none'
			})


		}

	})
	
//	
//	if($('.banner_list li').attr('id')=='moveStyle')
//	{
//		$(this).mouseenter(function(){
//			
//			$(this).find('small').css('background-position-x',-10)
//		})
//		
//		
//	}

	$('.h3 a,.p_a a').on({

		mouseenter: function() {

			$(this).css({
				'text-decoration': 'underline'

			})

		},
		mouseleave: function() {

			$(this).css({
				'text-decoration': 'none'

			})
		}
	})

	$('.yc1 .up').on({

		mouseenter: function() {

			$(this).css({

				marginLeft: 10
			})

		},
		mouseleave: function() {

			$(this).css({

				marginLeft: -10
			})

		}

	})

	$('.down a').not('.red').on({

		mouseenter: function() {

			$(this).css({
				color: 'red'
			})
		},
		mouseleave: function() {
			$(this).css({
				color: '#666'
			})
		}
	})

	var count = 1;

	$('.index a').on({
		mouseenter: function() {

			count = $(this).index('.index a') + 1;
			bannner();

		}
	})

	var timer1 = setInterval(bannner, 2000);

	function bannner() {

		if(count == 9) {
			count = 1;
		}

		$('.index a').removeClass();
		$('.index a').eq(count-1).addClass('select');
		$('.banner_img img').attr('src', 'img/bannner/' + count + '.jpg');
		++count;
                         
	}

	$('.banner_right').on({

		mouseenter: function() {

			clearInterval(timer1)
		},
		mouseleave: function() {

			timer1 = setInterval(bannner, 2000);

		}

	})
	
	$(window).scroll(function(){
		
		var distance=$(this).scrollTop();
		if(distance>200)
		{
			$('.float_list').css({
				
				position:'fixed',
				top:10
				
			})
			
		}else{
			$('.float_list').css({
				
				position:'absolute',
				top:220				
			})
			
		}
		
   
		
		
	})
	


})