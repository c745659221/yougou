$(function(){
	
	$('.content_title a')
	.not('#new_sp li a,#new_sp1 li a,#new_sp2 li a,#new_sp3 li a,#new_sp4 li a')
	.on({
		
		mouseenter:function(){
			
			$(this).css({
				
				color:'red'
			})
			
		},
		mouseleave:function(){
			$(this).css({
				color:'#888'
			})
			
		}
		
		
	})
	
	var count=1;
	$('.btn').click(function(){
		

		$(this).hasClass('left')?--count:++count
		console.log(count)
		
		if(count==4)
		{
			count=1;
			
			$('.content_lb_list_fu').css({
			
			     left:0
		  })
			
		}else if(count==-1)
		{
			count=2;
			$('.content_lb_list_fu').css({
			
			    left:-1108*3
		  })
			
		}
		
		$('.content_lb_list_fu').stop().animate({
			
			left:-1108*count
		})
		
	})
	
	
	$('.tb_title .fr').mouseenter(function(){
		
		$(this).css({
			
			color:'red'
		})
	})
	
	$('.tb_title .fr').mouseleave(function(){
		
		$(this).css({
			
			color:'#fff'
		})
	})
	
	
	$('.tb_title h4').not($('.tb_title h4').children('span')).mouseenter(function(){
		
		$(this).css({
			color:'red'
		})
		
	})
	
	$('.tb_title h4').not($('.tb_title h4').children('span')).mouseleave(function(){
		
		$(this).css({
			color:'#000'
		})
		
	})
	
	
	$('.sell_list li').on({
		
		mouseenter:function(){
			
			$('.sell_list li').removeClass();
			$(this).addClass('change');
			console.log($(this).index())
			$('.product1').attr('id','block');
			$('.product1').eq($(this).index()-1).attr('id','')
		}
		
		
	})
	
	
	$('.product1 dd a').on({
		mouseenter:function(){
			$(this).css('color','red')
			
		},
		mouseleave:function(){
			$(this).css('color','#7e7c7d')
			
		}
	})
	
	

	
})