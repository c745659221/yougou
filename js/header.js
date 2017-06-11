$(function() {
	$('.a1').on({
		mouseenter: function() {

			$('.a1').css('color', 'red')

		},
		mouseleave: function() {
			$('.a1').css('color', '#000')
		}

	})

	$('.a3').on({
		mouseenter: function() {
			$('.a3').css({
				background: 'white',
				color: 'red'				
			})

			$('.phone_con').css({
				display: 'block'
			})

		},
		mouseleave: function() {
			$('.a3').css({
				 color: '#000',
                background:'url(img/header/bg.jpg)'
			})

			$('.phone_con').css({
				display: 'none'
			})
		}

	})
	
	$('.phone_con').mouseenter(function(){
		
		$('.phone_con').css({
			display:'block'
		})
		
	})
	$('.phone_con').mouseleave(function(){
		
		$('.phone_con').css({
			display:'none'

		})	
	})
	
	$('.a2').on({
		mouseenter: function() {
			$('.a2').css('color', 'red')

		},

		mouseleave: function() {
			$('.a2').css('color', '#fff')

		}

	})
	
	$('.li1 span').mouseenter(function(){
		
		$(this).css('color','red');
	})
	
	$('.li1 span').mouseleave(function(){
		
		$(this).css('color','#000');
	})
	
	
	$('.li1').on({
		mouseenter:function(){
			$('.li1').css({
				
				background:'#fff',
				border:'1px solid #ccc',
				borderBottom:0
				
			})
			
			$('.sc').css({
				
				display:'block'
					
				
			})
			
		},
		mouseleave:function(){
			$('.li1').css({
				border:0,
				background:'url(img/header/bg.jpg)'
				
			})
			
			$('.sc').css({
				
				display:'none'
									
			})
			
		}
		
	})
	
	
	$('.sc').mouseenter(function(){
		
		$(this).css({
				color:'red',
				display:'block'
			})
		
	})
	
	$('.sc').mouseleave(function(){
		
		$(this).css({
				color:'#000',
				display:'none'
			})
		
		
	})
	
	
	$('.li2 span').mouseenter(function(){
		
		$(this).css('color','red');
	})
	
	$('.li2 span').mouseleave(function(){
		
		$(this).css('color','#000');
	})
	
	
	$('.li2').on({
		
		mouseenter:function(){
			
			$(this).css({
				border:'1px solid #ccc',
				borderBottom:0,
				background:'#fff'
				
			})
			
			$('.gg').css({
				
				display:'block'
			})

		},
		
			mouseleave:function(){
				
				$(this).css({
				color:'#000',
				background:'url(img/header/bg.jpg)',
				border:0
				
				
				
			})
			
			$('.gg').css({
				
				display:'none'
			})		
		}
		
	})
	
	$('.gg').mouseenter(function(){
		
		$('.gg').css({
				
				display:'block'
			})
		
	})
	
	$('.gg').mouseleave(function(){
		
		$('.gg').css({
				
				display:'none'
		})
		
	})
	
	
	$('.li3 span').mouseenter(function(){
		
		$(this).css('color','red')
	})
	
	$('.li3 span').mouseleave(function(){
		
		$(this).css('color','#000')
	})
	
	$('.li3').on({
		
		mouseenter:function(){
			
			$('.li3').css({

				background:'#fff',
				border:'1px solid #ccc',
				borderBottom:0
				
				
			})
			
			$('.more').css({
				
				display:'block'
			})

		},
		
			mouseleave:function(){
				
				$('.li3').css({
				border:0,
				background:'url(img/header/bg.jpg)'				
				
				})
			
			$('.more').css({
				
				display:'none'
			})
					
		}
		
	})
	
	$('.more').mouseenter(function(){
		
		$(this).css({
				color:'red',
				display:'block'
			})
		
	})
	
	$('.more').mouseleave(function(){
		
		$(this).css({
			color:'#000',
			display:'none'
		})
			
	})
	
	$('.li4').mouseenter(function(){
		
		$('.li4').css('color','red')
	})
	$('.li4').mouseleave(function(){
		
		$('.li4').css('color','#000')
	})
	
	$('.notice li a').on({
		
		mouseenter:function(){
			
			
			$('.notice li a').css('color','#000000');
			$(this).css('color','red');
		},
		mouseleave:function(){
			
			
			$('.notice li a').css('color','#000000');
			
		}
		
		
	})
	
	$('.more p').mouseenter(function(){
		
		    $('.more p').css('color','#000000');
			$(this).css('color','red');
	})
	
	$('.more p').mouseleave(function(){
		
		    $('.more p').css('color','#000000');
			
	})
	
	$('.input_list li:not(.input_list li:nth-child(1))').on({
		
		mouseenter:function(){
			
			$(this).css('color','#f00');
		
		},
		
		mouseleave: function () {
			$(this).css('color','#666');
		}
		
	})
	
	
	$('.buy').on({
		
		mouseenter:function(){
			
			$('.buyCar').show();
			
		},
		mouseleave:function(){
			$('.buyCar').hide();
			
		}
		
	})
	
	
	$('.nav_list li a').not('.nav_list .nav_list_li1 a').on({
		
		mouseenter:function(){
			
			$(this).css({
				
				color:'red'
			})
			
		},
		mouseleave:function(){
			
			$(this).css({
				
				color:'#000'
			})
			
		}
		
		
	})
	
	
	$('.float_list li').click(function(){
		
		var index=$(this).index('.float_list li');
		console.log($(this).index())
		
			if(index>=3)
			{
			$('body').stop().animate({
			    scrollTop: $('.tb_title').eq(index+1).offset().top
			  })	
			}else if(index<=2){
			   $('body').stop().animate({
				
			   scrollTop: $('.tb_title').eq(index).offset().top
			 })
			}	
	})
	
	
	$('.buy').click(function(){
		
		location.assign('buyCar.html')
		
	})
	
	$('.close_1').click(function(){
		
		$('#float_down').css('display','none')
		
		
	})
	
	
	
})


