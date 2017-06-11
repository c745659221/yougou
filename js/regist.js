$(function() {

	$('.reg_phone_text1,.mail_none_small').children('span').mouseenter(function() {

		$(this).css('color', 'red')

	})
	$('.reg_phone_text1,.mail_none_small').children('span').mouseleave(function() {

		$(this).css('color', '#000')

	})

	$('.reg_phone_text1').find('i').on({

		click: function() {

			$('.mail_none_small').toggle()

		}

	})

	$('.phone_1').click(function() {

		$('.reg_content').show();
		$('.mail_content').hide();
		$('.mail_none_small').hide();

	})

	$('.mail_1').click(function() {

		$('.reg_content').hide();
		$('.mail_content').show();
		$('.mail_none_small').hide();

	})

	$('#lo_footer').find('a').mouseenter(function() {

		$(this).css('color', 'red')
	})

	$('#lo_footer').find('a').mouseleave(function() {

		$(this).css('color', 'rgb(170, 170, 170)')
	})

	$('.lo_1').mouseenter(function() {
		$(this).css('color', 'red')

	})

	$('.lo_1').mouseleave(function() {
		$(this).css('color', '#000')

	})

	$('.reg_text4').on({

		blur: function() {

			var isEmail = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

			var email = $('.reg_text4').val();
			
			console.log(email)

			if($('.reg_text4').val() == '') {
				$('.mail').css('visibility', 'visible')
				$('.mail').html('请输入邮箱');
		
			}else if(!(isEmail.test(email))){
				
			
				$('.mail').css('visibility', 'visible')
				$('.mail').html('格式错误');

			}else {
				$('.mail').css('visibility', 'hidden')

			}
		}

	})

	var arr1 = ['e7mn', 'dn4e', 's4kw', 'bme4', 'w926']
	var arr = ['1.png', '2.png', '3.png', '4.png', '5.png']
	var count = 0;
	$('.yzm_img img').click(function() {

		count = Math.floor(Math.random() * 5)
		$('.yzm_img img').attr('src', 'img/buycar/3/' + arr[count]);

	})

	$('.text2').on({

		blur: function() {

			var yz = $('.text2').val();

			console.log($('.text2').val())

			if($('.text2').val() == '') {
				$('.Num').css('visibility', 'visible')
				$('.Num').html('请输入验证码');
			} else if(!(yz == arr1[count])) {
				$('.Num').css('visibility', 'visible')
				$('.Num').html('验证码错误')
			} else {
				$('.Num').css('visibility', 'hidden')
			}

		}

	})

	$('.pass4').on({

		blur: function() {

			var isture1 = /[a-zA-Z0-9-=;,.~!@#$^*()_+:?]{6,25}/;

			var pass = $('.pass4').val();
			console.log(pass.length)

			if($('.pass4').val() == '') {
				$('.pass_num').css('visibility', 'visible')
				$('.pass_num').html('请输入密码');
				
			} else if(pass.length < 6 || pass.length > 25) {
				
				$('.pass_num').css('visibility', 'visible')
				$('.pass_num').html('密码应6-25位之间');
			}
			/*else if(!(isture1.test(pass))){
						
						$('.pass_num').css('visibility','visible')
						$('.pass_num').html('密码格式错误');
						
					}*/
			else {
				$('.pass_num').css('visibility', 'hidden')
			}

		}

	})

	$('.ture4').on({

		blur: function() {

			if($('.ture4').val() == '') {
				$('.true_num').css('visibility', 'visible')
				$('.true_num').html('请输入确认密码');
			} else if($('.ture4').val() != $('.pass4').val()) {

				$('.true_num').css('visibility', 'visible')
				$('.true_num').html('两次密码不一致');

			} else {
				$('.true_num').css('visibility', 'hidden')
			}

		}

	})

	//	   if(!($('.yzm_text1').val()==arr1[count]))
	//	   {
	//	   	$('.Num').html('验证码错误')
	//	   }

})