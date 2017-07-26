window.onload = function(){
var oDiv = document.querySelector('div')
var x =0;
var y =0;
oDiv.onmousedown = function(ev){
	var oTip = document.createElement('p');
	oTip.className = 'tip';
	oTip.style.left = x + 'px';
	oTip.style.top = y + 'px';
	document.body.appendChild(oTip);
	var ev = ev || event;
	var disX = ev.clientX-oDiv.offsetLeft;
	var disY = ev.clientY-oDiv.offsetTop;
	document.onmousemove = function(ev){
		var ev = ev || event;
		x = ev.clientX - disX;
		y = ev.clientY - disY;
		oTip.style.left = x + 'px';
	    oTip.style.top = y + 'px';
	}
	document.onmouseup = function(){
		oDiv.style.left = x + 'px';
		oDiv.style.top = y + 'px';
		document.body.removeChild(oTip)
		document.onmouseup = null;
		document.onmouseover = null;
	}
	return false;
}
}