var el = document.querySelector('.viewport');
for (i = 0; i < 1000; i++) {
	var star = document.createElement('i')
	star.className = "star"
	star.style.top =  random(1, window.innerHeight) + 'px'
	star.style.left = random(1, window.innerWidth) + 'px'
	star.style.transform = "scale(" + random(1, 100) * 0.01 + ")"
	star.style.filter = "blur(" + random(1, 100) * 0.01 + "px)"
	star.style.opacity = random(1, 1000) * 0.001

	if (random(1, 10) <= 1) {
		var glow = random(1, 50)
		var intensity = glow * random(10, 20) * 0.01
		star.style['box-shadow'] = "0 0 " + glow + "px " + intensity + "px white"
	}

	el.appendChild(star)
}