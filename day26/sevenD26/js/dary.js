$(function(){
				
			//鼠标按下  鼠标移动   鼠标松开
			//思路：在鼠标安下时获取鼠标在元素上的相对距离  在移动过程中  获取鼠标位置  利用相对距离求取元素位置
			$("div").mousedown(function(e){
				var ev = e||window.enent;
				var disX = ev.pageX - $(this).offset().left;
				var disY = ev.pageY - $(this).offset().top;
				
				  var self = this;
				$(document).mouseover(function(e){
					var ev = e || window.event;
					var mx = ev.pageX;//鼠标在页面上的x位置
					var my = ev.pageY;//鼠标在页面上的y位置
					
					$(self).css({left:mx-disX,top:my-disY});
					
					
					
				})
			})
			$(document).mouseup(function(){
				$(document).off("mousedown")
				 $(document).off("mousemove")
			})
})