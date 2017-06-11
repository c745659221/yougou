$(function(){
	
	$('.adidas .ad_locantion a').mouseenter(function(){
		
		$(this).css('color','red')
		
	})
	$('.adidas .ad_locantion a').mouseleave(function(){
		
		$(this).css('color','#3366cc')
		
	})
	
	
	$('.ad_small .ad_list li').on({
		
		mouseenter:function(){
			
			$('.ad_small .ad_list li').removeClass();
			$(this).addClass('ad_select');
			
			$('.adidas_left .ad_show img').attr('src','img/adidas/title/1/big/100503222_0'+ ($(this).index()+1) +'_m.jpg')
			
			$('.fdj_big').css({
			'background-image': 'url(img/adidas/title/1/big/100503222_0'+ ($(this).index()+1) +'_m.jpg)'
			})
		}
	})
	
	
	$('.ad_show').on({
					
		mouseenter:function(){
			$('.faj_small').show();
			$('.fdj_big').show();

		},
		
		 mouseleave:function(){			
		  $('.faj_small').hide();
		  $('.fdj_big').hide();
		},
		
		mousemove:function(e){
			
			$('.faj_small').css({
				
				left:function(){
					
					var left=e.pageX-$(this).parent().offset().left-100;
					
					if(left<=0)
					{
						left=0;
					}else if(left>=$(this).parent().width()-200)
					{
						left=$(this).parent().width()-200
					}
					
					var sacle=$(this).width()/$(this).parent().width();
					
					$('.fdj_big').css('background-position-x',-left/sacle);
					
					return  left
					
				},
				
				top:function(){
					
					var top=e.pageY - $(this).parent().offset().top-100;
					
					if(top<=0)
					{
						top=0;
					}else if(top>=$(this).parent().height()-200)
					{
						top=$(this).parent().height()-200
					}
					
					var sacle=$(this).height() / $(this).parent().height();
					
					$('.fdj_big').css('background-position-y', -top / sacle);
					
					return top
					
				}				
				
			})	
		
		}

	})
	
	
	$('.share_list_down li a').on({
		
		mouseenter:function(){
			$('.share_list_down li a').css('background','#fff')
			$(this).css('background','#f3f3f3')
		}
	})
	
	$('.share_1').mouseenter(function(){
		
		$('.share_list').show()
	})
	
	$('.share_1').mouseleave(function(){
		
		$('.share_list').hide()
	})
	
	
	$('.share_list').mouseenter(function(){
		
		$('.share_list').show()
	})
	
	$('.share_list').mouseleave(function(){
		
		$('.share_list').hide()
	})
	
	$('.share a').mouseenter(function(){
		
		$(this).css('color','red')
		
	})
	
	$('.share a').mouseleave(function(){
		
		$(this).css('color','#6d6e70')
		
	})
	
	$('.adidas_center .small1').mouseenter(function(){
		$(this).css('color','red')
		
	})
	
	$('.adidas_center .small1').mouseleave(function(){
		$(this).css('color','#3366cc')
		
	})
	
	
	$('.ad_change .change1 .fu').mouseenter(function(){
		
		$('.ad_change  i').show()
		
	})
	
	$('.ad_change .change1 .fu').mouseleave(function(){
		
		$('.ad_change  i').hide()
		
	})
	
	
	$('.ad_change .size a').not('.true_size').on({
		
		mouseenter:function(){
			
			$(this).css({
				'border-color':'red',
				 'color':'red'
				
			})
			
		},
		mouseleave:function(){
			
			$(this).css({
				
				'border-color':'#ddd',
				 'color':'#000'
				
			})
			
		},
		
		click:function(){
			
			$('.size  a').attr('id','')
			$(this).attr('id','size_select')
			
			$(this).addClass('cz')
	        $('.red .num_se').html($('.size #size_select').html())
			
			
		}
		
	})
	
	
	$('.adidas_center .zx').mouseenter(function(){
		
		$(this).css('color','red')
		
	})
	$('.adidas_center .zx').mouseleave(function(){
		
		$(this).css('color','#000')
		
	})
	
	
	$('.size .size_1').on({
		
		
		mouseenter:function(){
			
			$('.size .size_1').css('color','red')
		},
		
		mouseleave:function(){
			
			$('.size .size_1').css('color','#666')
		}
	})
	
	var count=1
	
	$('.number  u').click(function(){
			
		
		if(count<=1)
		{
			count=2
		}
		$('.number input').val(--count)
		
	})
	
	$('.number  em').click(function(){
		
		$('.number input').val(++count)
		
	})
	
   $('.zy a').mouseenter(function(){
   	
   	  $(this).css('color','red')
   	
   })
   
    $('.zy a').mouseleave(function(){
   	
   	  $(this).css('color','#999')
   	
   })
    
    
    
    var num=1;
    
    $('.adidas_right .btn2').on({
    	
    	click:function(){
    		
    		 $(this).hasClass('up_1')? --num:++num;
    		 
    		 console.log(num)
    		 
    		 if(num==7)
    		 {
    		 	 num=1;
    		 	 $('.ad_box1').css({
    		 	 	
    		 	 	top:0
    		 	 	
    		 	 })
    		 }else if(num==-1)
    		 {
    		 	num=6
    		 	
    		 	$('.ad_box1').css({
    		 	 	
    		 	 	top:-4060
    		 	 	
    		 	 })
    		 }
    		 
    		 $('.ad_box1').stop().animate({
    		 	
    		 	top:-580*num
    		 	
    		 })
    		
    	}
    	
    })
    
    $('.ad_box1 ul li a').on({
    	
    	mouseenter:function(){
    		
    		$(this).css('color','red')
    	},
    	mouseleave:function(){
    		
    		$(this).css('color','#666')
    		
    	}
    	
    })
    
    
     $('.box2 ul li a,.xs ul li a,.box4 ul li a,.lb_1_left a').on({
    	
    	mouseenter:function(){
    		
    		$(this).css('color','red')
    	},
    	mouseleave:function(){
    		
    		$(this).css('color','#666')
    		
    	}
    	
    })
     
     $('.lb_1_left dt').mouseenter(function(){
     	
     	$(this).next().children('a').css('color','red')
     	
     })
     $('.lb_1_left dt').mouseleave(function(){
     	
     	$(this).next().children('a').css('color','#666')
     	
     })
    
    
    var k=1;
    $('.adidas_lb .btn1').on({
    	
    	click:function(){
    		
    		 $(this).hasClass('lb_left')? --k:++k;
    		 
    		 console.log(k)
    		 
    		 if(k==5)
    		 {
    		 	 k=1;
    		 	 $('.box2').css({
    		 	 	
    		 	 	left:0
    		 	 	
    		 	 })
    		 }else if(k==0)
    		 {
    		 	k=4;
    		 	
    		 	$('.box2').css({
    		 	 	
    		 	 	left:-5660
    		 	 	
    		 	 })
    		 }
    		 
    		 $('.box2').stop().animate({
    		 	
    		 	left:-1132*k
    		 	
    		 })
    		 
    		 $('.lb_title span  .count').html(k)
    		
    	}
    	
    })
    
    
     var n=1;
    $('.btn3').on({
    	
    	click:function(){
    		
    		 $(this).hasClass('lb_left_1')? --n:++n;
    		 
    		// console.log(k)
    		 
    		 if(n==4)
    		 {
    		 	 n=1;
    		 	 $('.box4').css({
    		 	 	
    		 	 	left:0
    		 	 	
    		 	 })
    		 }else if(n==0)
    		 {
    		 	n=3;
    		 	
    		 	$('.box4').css({
    		 	 	
    		 	 	left:-3760
    		 	 	
    		 	 })
    		 }
    		 
    		 $('.box4').stop().animate({
    		 	
    		 	left:-940*n
    		 	
    		 })
    		 
    		 $('.lb_title span .n').html(n)
    		
    	}
    	
    })
    
    
    $('.adidas_center .ad_change .size_1').click(function(){
    	
    	$('.uiTable').show()

    	
    })
    
    
    $('.clearfix .uiClose').click(function(){
    	
    	$('.uiTable').hide()
    	
    })
	
	
	$('.dp_con,.con1,.ad_con_right .nb').children('a').mouseenter(function(){
		
		$(this).css('color','red')
	})
	$('.dp_con,.con1,.ad_con_right .nb').children('a').mouseleave(function(){
		
		$(this).css('color','blue')
	})
	
	
	$(window).scroll(function(){
		
		var distance=$(this).scrollTop()
		
		if(distance>=200)
		{
			$('#top1').show()

			if(distance>=15000)
			{
				$('#top1').css({
					position:'fixed',
					bottom:200
				})
			}else{
				$('#top1').css({
					position:'fixed',
					bottom:10
				})
			}
		}else{
			$('#top1').hide()
			
			
		}
		
	})
	
	
	$('#top1').click(function(){
		
		console.log(1111)
		
		$('body').stop().animate({
			
			scrollTop:0
			
		},30)
		
		
	})
	
	
	$('.left_ti_list li').on({
		
		click:function(){
			
		$('.left_ti_list li').removeClass();
		$(this).addClass('ti_list_select')
			
    	$('body').stop().animate({
			
			scrollTop:$('.left_ti_list li').offset().top
		
		},30)
    	
    	
    	$('.div1').css('display','none');
    	$('.div1').eq($(this).index()).css('display','block')
    	
    	
						
	   }
	
	})
	
	
	$('.sao').on({
		
		mouseenter:function(){
			
			$('.none_ewm').css('display','block')
		},
		mouseleave:function(){
			
			$('.none_ewm').css('display','none')
			
		}
	})
			

	
	$('.buy_2').click(function(){
	
		
		if(!($('.ad_change .size a').hasClass('cz')))
		{

			$('.body1').css('display','block')
			$('.none_size').css('display','block')
			
			
			
			
			
		}else{
			$('.buycar_link').css('display','block')
			
			$('.link_fl_2 u').html($('.pro_num').val())
			$('.link_fl_2 em').html($('.price_1 a').html() *  $('.pro_num').val())
			
	        var r=10;
             
			 timer=setInterval(function(){
				
				console.log(111)
				if(r==0)
				{
					clearInterval(timer)
					$('.buycar_link').css('display','none')
				}
				
				--r;
				$('.link_fl_4 i').html(r)
		
			},1000)
					
			
			var product_name=$('.product_ti').html()
			var product_price=$('.price_1 a').html()
			var img_src=$('.img_big').attr('src')
			var product_color=$('.change1 .fu').attr('cc')
			var product_size=$('#size_select').html()
			var product_num=$('.pro_num').val()
			var all_price=$('.price_1 a').html() *  $('.pro_num').val();
			
			var date=new Date();
			date.setDate(date.getDate()+7)
			 
			 setCookie('name',product_name,date)
			 setCookie('price',product_price,date)
			 setCookie('src',img_src,date)
			 setCookie('color',product_color,date)
			 setCookie('size',product_size,date)
			 setCookie('num',product_num,date)
			 setCookie('all_price',all_price,date)
			  
		}	
		
	})
	
	
	$('.buycar_link').children('span').click(function(){
		
		
		clearInterval(timer)
		$('.link_fl_4 i').html(10)
		$('.buycar_link').css('display','none')
		
		
	})
	
	$('.clear_size').click(function(){
		
		$('.none_size').css('display','none')
		$('.body1').css('display','none')
		
	})
	
	$('.size_none_1 a').click(function(){
		
		if($('.none_size .size_none_1 a').hasClass('cz'))
		{
			
			$('.size_none_1 .true_size').css('display','block')
		}else{
			$('.size_none_1 .true_size').css('display','none')
			
		}
		
	})
	
	
	$('.true_size').click(function(){
		
		
			$('.none_size').css('display','none')
		    $('.body1').css('display','none')
		    $('.buycar_link').css('display','block')
		    
		    $('.link_fl_2 u').html($('.pro_num').val())
			$('.link_fl_2 em').html($('.price_1 a').html() *  $('.pro_num').val())
		    
		    var r=10;
             
			 timer=setInterval(function(){
				
				console.log(111)
				if(r==0)
				{
					clearInterval(timer)
					$('.buycar_link').css('display','none')
				}
				
				--r;
				$('.link_fl_4 i').html(r)
		
			},1000)
		    
		    
		    var product_name=$('.product_ti').html()
			var product_price=$('.price_1 a').html()
			var img_src=$('.img_big').attr('src')
			var product_color=$('.change1 .fu').attr('cc')
			var product_size=$('#size_select').html()
			var product_num=$('.pro_num').val()
			var all_price=$('.price_1 a').html() *  $('.pro_num').val();
			
			var date=new Date();
			date.setDate(date.getDate()+7)
			 
			 
			 setCookie('name',product_name,date)
			 setCookie('price',product_price,date)
			 setCookie('src',img_src,date)
			 setCookie('color',product_color,date)
			 setCookie('size',product_size,date)
			 setCookie('num',product_num,date)
			 setCookie('all_price',all_price,date) 
		    
			
		
		
	})
	
	$('.buycar_link').children('span').click(function(){
		
		clearInterval(timer)
		$('.buycar_link').css('display','none')
		
		
	})
	
	
	
	
	
})