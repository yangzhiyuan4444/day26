$(function(){
		
		$('#ul1').width($('#ul1 li').length*$('#ul1 li').width());
		
		$('#ol1 li').click(function(){
			$('#ol1 li').removeClass('active');
			$(this).addClass('active');
			$('#ul1').stop().animate({left:-$(this).index()*$('#ul1 li').width()})
		})	
	})