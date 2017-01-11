function random(last, first) {
	var first = first || 1
	return Math.floor((Math.random() * last) + first)
}

function cl(data) {
	console.log(data)
}