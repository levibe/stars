var el = document.querySelector('.viewport');
for (i = 0; i < 1000; i++) {
	var star = document.createElement('i')
	star.className = "star"
	star.style.top =  random(window.innerHeight) + 'px'
	star.style.left = random(window.innerWidth) + 'px'
	star.style.transform = "scale(0." + random(99) + ")"
	star.style.filter = "blur(0." + random(99) + "px)"
	el.appendChild(star)
}