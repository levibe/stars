var el = document.querySelector('.viewport')
for (i = 0; i < 2000; i++) {
	var star = document.createElement('i')
	star.className = "star"
	star.style.top =  random(1, 100000) * .001 + '%'
	star.style.left = random(1, 100000) * .001 + '%'
	star.style.transform = "scale(" + random(1, 100) * 0.01 + ")"
	star.style.filter = "blur(" + random(1, 200) * 0.01 + "px)"
	star.style.opacity = random(1, 1000) * 0.001

	star.kelvin = random(1000, 40000)
	var color = tinycolor("hsl(" + tinycolor(getLightColor(star.kelvin)).toHsl().h + ", 1, " + random(92, 97) + "%)")
	star.style.backgroundColor = color.toString()

	// make some stars glow bright
	if (random(1, 10) <= 3) {
		var glow = random(1, 50)
		var intensity = glow * random(1, 16) * 0.01
		star.style['box-shadow'] = "0 0 " + glow + "px " + intensity + "px " + color.darken(random(1, 20)).toString()
		star.style.filter = "blur(" + random(1, 100) * 0.01 + "px)"
		star.style.opacity = random(90,100) * .01
	}

	el.appendChild(star)
}

function getLightColor(temp) {
	var r = 0, g = 0, b = 0,
		temp = Math.floor(temp / 100 + 0.5)

	if (temp <= 66) {
		r = 255
	} else {
		r = temp - 60
		r = 329.698727446 * Math.pow(r, -0.1332047592)
	}

	if (temp <= 66) {
		g = temp
		g = 99.4708025861 * Math.log(g) - 161.1195681661
	} else {
		g = temp - 60
		g = 288.1221695283 * Math.pow(g, -0.0755148492)
	}

	if (temp >= 66) {
		b = 255
	} else if (temp <= 19) {
		b = 0
	} else {
		b = temp - 10
		b = 138.5177312231 * Math.log(b) - 305.0447927307
	}

	return "rgba(" + Math.round(r) + ", " + Math.round(g) + ", " + Math.round(b) + ", " + 1 + ")"
}
