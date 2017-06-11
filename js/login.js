$(function(){
	
	$('.reg_1').mouseenter(function(){
		$(this).css('color','red')
		
	})
	
	$('.reg_1').mouseleave(function(){
		$(this).css('color','#000')
		
	})
	
	
	$('.lo_text').on({
		
		blur:function(){
			
			if($('.lo_text').val()=='')
			{
				$('.zh').show();
				
			}else{
				$('.zh').hide();
				
				
			}
			
		}
		
	})
	
	
	$('.lo_password').on({
		
		blur:function(){
			
			if($('.lo_password').val().length==0)
			{
				$('.mm').show();
				$('.mm').html('请输入密码');
			
		    }else if($('.lo_password').val().length<6||$('.lo_password').val().length>25)
			{
					$('.mm').show();
					$('.mm').html('密码应6-25位之间');
			}else{
				
				$('.mm').hide();
								
			}
			
		}
		
	})
	
	
	$('.lo_submit').click(function(){
		
		 $.get('http://127.0.0.1:8080/json/name.json',function(responseObj){
	  	
	  
	  	    for(var attr in responseObj)
	  	    {
	  	    
	  	    	for(var n in responseObj[attr])
	  	    	{
	  	    		if($('.lo_text').val()==responseObj[attr].userName && $('.lo_password').val()==responseObj[attr].password)	
	  	    		{
	  	    			
	  	    			
	  	    			location.assign('index.html')
	  	    			 
	  	    		}else{
	  	    			
	  	    			$('.mm').show();
	                    $('.mm').html('密码错误');
	  	    			
	  	    		}
	  	    		
	  	    	}	    	  	    	
	  	    }
	  	    
	  	    
	  	    
	  	
	  })
		
		
	})
	
	
	
	 
	
	
	
})