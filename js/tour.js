
$(function(){
	
	var count=1;
	$('.tour_up span').click(function(){
		
		$(this).hasClass('left')?--count:++count;
		
		if(count==0||count==1)
		{
			count=1;

			$('.show').eq(0).css('display','block')
			$('.show').eq(1).css('display','none')
				
				
		}else if(count==3||count==2)
		{
			count=2;
			$('.show').eq(1).css('display','block')
			$('.show').eq(0).css('display','none')
			
		}
			
	})
	
	$('.show a').on({
		
		mouseenter:function(){
			
			$(this).css('color','red')
			
		},
		mouseleave:function(){
			
			$(this).css('color','#999999')
			
		}
	})
	
	
})