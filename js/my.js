var clock = document.querySelector('#clock');
var color = document.querySelector('#color');

function myClock(){
	let time = new Date();
	let h = (time.getHours() % 12).toString();
	let m = time.getMinutes().toString();
	let s = time.getSeconds().toString();

	if(h.length < 2){
		h = '0' + h;
	}s
	if(m.length < 2){
		m = '0' + m;
	}
	if(s.length < 2){
		s = '0' + s;
	}

	let clockString = h + ':' + m + ':' + s;
	let colorString = '#' + h + m + s;

	clock.textContent = clockString;
	color.textContent = colorString;

	document.body.style.background = colorString;
	
	function music(){
  		new Audio('audio/cuckoo.mp3').play()
	}
	if(s === '00'){
		music();
	}
	

}

myClock();
setInterval(myClock, 1000);


  

