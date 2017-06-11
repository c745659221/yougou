$(function(){
	
	$('.header-left .a3').on({
		
		mouseenter:function(){
			
			$('.header-left .a1').css('border-right','0')
			$('.header-left .a3').css({
				
				'border-left':'1px solid #ccc',
				'border-right':'1px solid #ccc'
				
			})
			
		},
		
		mouseleave:function(){
			
			$('.header-left .a1').css('border-right','1px solid #aaa')
			$('.header-left .a3').css({
				
				'border-left':'0',
				'border-right':'0',
				'background':'#f1f1f1'
				
			})
			
		}
		
		
	})
	
	
	$('.list1').children('li').not('.li4,.li3').on({
		
		mouseenter:function(){
			$(this).css({
				'height':'26px',
				'line-height':'26px',
				'border':0,
				'border-left':'1px solid #ccc',
				'border-right':0,
				'border-right':'1px solid #ccc',
				 'margin':0
				 
				
			})
			
			$(this).children('b').css('top','10px')
		},
		mouseleave:function(){
			
			$(this).css({
				'height':'14px',
				'line-height':'14px',
				'border-left':'1px solid #aaa',				
				'border-right':'1px solid #aaa',								
				'background':'#f1f1f1',
				 'margin':'6px 0'			
			})
			
			$(this).children('b').css('top','4px')
		}
		
	})
	
	
	$('.li3').on({
		
		mouseenter:function(){
			
			$(this).css({
				'height':'26px',
				'line-height':'26px',
				'border':0,
				'border-left':'1px solid #ccc',
				'border-right':0,
				'border-right':'1px solid #ccc',
				 'margin':0
				 
			})
			$('.li2').css('border-right','0')
			$(this).children('b').css('top','10px')
			
			
		},
		mouseleave:function(){
			
			$(this).css({
				'height':'14px',
				'line-height':'14px',
				'border':0,							
				'background':'#f1f1f1',
				 'margin':'6px 0'			
			})
			$('.li2').css('border-right','1px solid #ccc')
			
			$(this).children('b').css('top','4px')
		}
		
	})
	
	
	$('.gohome_btn').on({
		
		mouseenter:function(){
			
			$(this).css('color','red')
			
		},
		mouseleave:function(){
			
			$(this).css('color','#666')
			
		}
		
	})
	
	
	$('.empty_fr_3  a').on({
		
		mouseenter:function(){
			
			$(this).css('color','red')
			
		},
		mouseleave:function(){
			
			$(this).css('color','#3366cc')
			
		}
		
	})
	
	$('.cgray').mouseenter(function(){
		
		$(this).css('color','red')
	})
	
	$('.cgray').mouseleave(function(){
		
		$(this).css('color','#a9a9a9')
	})
	
	
	
	var arr3=getCookie('name');
          
	if(arr3)
	{
		$('.buy_content').css('display','none')
		$('.buy_have').css('display','block')
		$('.product_name').html(getCookie('name'))
		$('.td1 img').attr('src',getCookie('src'))
		$('.product_color span').html(getCookie('color'))
		$('.product_size span').html(getCookie('size'))
		$('.product_price').html(getCookie('price'))
		$('.product_num').val(getCookie('num'))
		$('.product_all_price').html(getCookie('all_price'))
		$('.corg').html($('.product_all_price').html())
		
	}
	
	var num1=$('.product_num').val();
	$('.num_min').click(function(){
		
		--num1;
		if(num1==0)
	   {
	   	   var ret=confirm ('您确定要删除该件商品吗？')
	   	  
	   	   if(ret)
	   	   {
	   	   	$.removeCookie('name')
	   	   	$('.buy_content').css('display','block')
		    $('.buy_have').css('display','none')
	   	   	
	   	   }
	   }
	   
		$('.product_num').val(num1)
		
		var all=$('.product_num').val() *$('.product_price').html()
		
		$('.product_all_price').html(all)
		$('.corg ').html($('.product_all_price').html())
		
		
		
	})	
	
	$('.fl_1  .qk').click(function(){
		
		  var ret=confirm ('您确定要删除该件商品吗？')
	   	  
	   	   if(ret)
	   	   {
	   	   	$.removeCookie('name')
	   	   	$('.buy_content').css('display','block')
		    $('.buy_have').css('display','none')
		   
	   	   }			
	})
	
	$('.fl_1  .qk').on({
		mouseenter:function(){
		
		 $('.fl_1  .qk').css('color','red')
		 	
	   },
	     
	     mouseleave:function(){
	     	
	     	 $('.fl_1  .qk').css('color','#3366cc')
	     	
	     }
	
	})
	
	$('.last_td a').on({
		mouseenter:function(){
			
			$(this).css('color','red')
		},
		mouseleave:function(){
			
			$(this).css('color','#666')
			
		}		
	})
	
	
	
	
	$('.num_add').click(function(){
		
		++num1;
		$('.product_num').val(num1)
		
		var all=$('.product_num').val() *$('.product_price').html()
		
		$('.product_all_price').html(all)
		if($('.cheak_td1').attr('checked'))
		{
			
		   $('.corg').html($('.product_all_price').html())			
			
		}else{
		   $('.corg').html(0)			
			
		}
	
	})
	
	$('.cheak_td1').click(function(){
			
		if($('.cheak_td1').attr('checked'))
		{
			
		   $('.corg').html($('.product_all_price').html())			
			
		}else{
		   $('.corg').html(0)
		   $('.all_change').removeAttr('checked')
		   $('.last_2 input').removeAttr('checked')
			
		}
		
		
	})
	
	
	
	
	
	$('.all_change').click(function(){
		
		if($('.all_change').attr('checked')=='checked')
	   {
	   	  $('.have_table  :checkbox').attr('checked','checked')
	   	  $('.corg').html($('.product_all_price').html())	
	   
	   }else{
	   	
	   	  $('.have_table  :checkbox').removeAttr('checked')
	   	  $('.corg').html(0)
	   	
	   }
	   				
	})
	
	
	$('.box5 a').on({
		
		mouseenter:function(){
			
			$(this).css('color','red')
			
		},
		mouseleave:function(){
			
			$(this).css('color','#666')
		}		
		
	})
	var m=1;
	
	$('.button_1').click(function(){
		
		$(this).hasClass('also_buy_1_fl')?--m:++m;
		
		if(m==3)
		{
			m=1;
			$('.box5').css({
				
				left:0
			})
		}else if(m==0)
		{
			m=2;
			$('.box5').css({
				
				left:-2865
			})
		}
		
		$('.box5').not('.look_1 .box5').stop().animate({
			
			left:-955*m
			
		})
		$('.ti_1 span').html(m)
		
		
	})
	   
	
})