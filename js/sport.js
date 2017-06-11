
$(function(){
	
$('#wrap-nav .nav .all,#banner_sport').mouseenter(function(){
	
	$('#banner_sport').css('display','block')
})

$('#wrap-nav .nav .all,#banner_sport').mouseleave(function(){
	
	$('#banner_sport').css('display','none')
})
	
	
//	$('.center .Map area').click(function(){
//		
//		$('.center .Map area').css({
//			border:'1px solid blue'
//		})
//		
//	})
	


	$('#new_sp li').on({
		
		mouseenter:function(){
			
			$('#new_sp li').attr('id','');
			$(this).attr('id','select1');
			
			$('.pbx').css('display','none');
			$('.pbx').eq($(this).index()).css('display','block');
			
			count=$(this).index();	
	  }
	      
	})
	
    count=$(this).index();                             	
	$('#new_sp').on({
		
		mouseenter:function(){
			clearInterval(timer1)
			
		},
		mouseleave:function(){
	   	  timer1=setInterval(text,2000)
			
		}
	})
	
	var timer1=setInterval(text,2000)
		
	function  text(){
		
		++count;
		if(count==6)
		{
			count=0;
		}
	    $('.pbx').css('display','none');
		$('.pbx').eq(count).css('display','block');
		
		$('#new_sp li').attr('id','');
		$('#new_sp li').eq(count).attr('id','select1');
	
	}
	
	
	$('#new_sp1 li').on({
		
		mouseenter:function(){
			
			$('#new_sp1 li').attr('id','');
			$(this).attr('id','select2');
			
			$('.ydx1').css('display','none');
			$('.ydx1').eq($(this).index()).css('display','block');
			
			count1=$(this).index();	
	  }
	      
	})
	
    count1=$(this).index();                             	
	$('#new_sp1').on({
		
		mouseenter:function(){
			clearInterval(timer2)
			
		},
		mouseleave:function(){
	   	  timer2=setInterval(text1,2000)
			
		}
	})
	
	var timer2=setInterval(text1,2000)
		
	function  text1(){
		
		++count1;
		if(count1==6)
		{
			count1=0;
		}
	    $('.ydx1').css('display','none');
		$('.ydx1').eq(count1).css('display','block');
		
		$('#new_sp1 li').attr('id','');
		$('#new_sp1 li').eq(count1).attr('id','select2');
	
	}
	
	
	$('#new_sp2 li').on({
		
		mouseenter:function(){
			
			$('#new_sp2 li').attr('id','');
			$(this).attr('id','select3');
			
			$('.ydf1').css('display','none');
			$('.ydf1').eq($(this).index()).css('display','block');
			
			count2=$(this).index();	
	  }
	      
	})
	
    count2=$(this).index();                             	
	$('#new_sp2').on({
		
		mouseenter:function(){
			clearInterval(timer3)
			
		},
		mouseleave:function(){
	   	  timer3=setInterval(text2,2000)
			
		}
	})
	
	var timer3=setInterval(text2,2000)
		
	function  text2(){
		
		++count2;
		if(count2==6)
		{
			count2=0;
		}
	    $('.ydf1').css('display','none');
		$('.ydf1').eq(count2).css('display','block');
		
		$('#new_sp2 li').attr('id','');
		$('#new_sp2 li').eq(count2).attr('id','select3');
	
	}
	
	
	
	$('#new_sp3 li').on({
		
		mouseenter:function(){
			
			$('#new_sp3 li').attr('id','');
			$(this).attr('id','select4');
			
			$('.ydb1').css('display','none');
			$('.ydb1').eq($(this).index()).css('display','block');
			
			count3=$(this).index();	
	  }
	      
	})
	
    count3=$(this).index();                             	
	$('#new_sp3').on({
		
		mouseenter:function(){
			clearInterval(timer4)
			
		},
		mouseleave:function(){
	   	  timer4=setInterval(text3,2000)
			
		}
	})
	
	var timer4=setInterval(text3,2000)
		
	function  text3(){
		
		++count3;
		if(count3==6)
		{
			count3=0;
		}
	    $('.ydb1').css('display','none');
		$('.ydb1').eq(count3).css('display','block');
		
		$('#new_sp3 li').attr('id','');
		$('#new_sp3 li').eq(count3).attr('id','select4');
	
	}
	
	
	$('#new_sp4 li').on({
		
		mouseenter:function(){
			
			$('#new_sp4 li').attr('id','');
			$(this).attr('id','select5');
			
			$('.bag1').css('display','none');
			$('.bag1').eq($(this).index()).css('display','block');
			
			count4=$(this).index();	
	  }
	      
	})
	
    count4=$(this).index();                             	
	$('#new_sp4').on({
		
		mouseenter:function(){
			clearInterval(timer5)
			
		},
		mouseleave:function(){
	   	  timer5=setInterval(text4,2000)
			
		}
	})
	
	var timer5=setInterval(text4,2000)
		
	function  text4(){
		
		++count4;
		if(count4==6)
		{
			count4=0;
		}
	    $('.bag1').css('display','none');
		$('.bag1').eq(count4).css('display','block');
		
		$('#new_sp4 li').attr('id','');
		$('#new_sp4 li').eq(count4).attr('id','select5');
	
	}
	
	
})

