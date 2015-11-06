function createPixel(color, className) {
	var pixel = document.createElement("div");
	pixel.style.width = "20px";
	pixel.style.height = "20px"
	pixel.style.float = "left";
	pixel.style.background = color
	pixel.style.margin = "1px"
	pixel.className = className;
	return pixel;
}

function createPixelArray(number, color, className) {
	for (i = 0; i < number; i++) { 
		var pixel =  createPixel(color, className);
		document.body.appendChild(pixel);
	}
}

// function getRandomIntInclusive(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

function createColorPalette (numberOfColors, className) {
	var allColors = [];
	for (var r = 0; r < 256; r += 20) {
		for (var g = 0; g < 256; g += 20) {
			for (var b = 0; b < 256; b += 20) {
				allColors.push("rgb(" + r + ", " + g + ", " + b + ")")
			}
		}
	}
	console.log(allColors.length);
	console.log(allColors);
	
	var paletteColors = [];
	for (var i = 0; i < allColors.length; i += (allColors.length / numberOfColors)) {
		paletteColors.push(allColors[Math.floor(i)]);
	}

	console.log(paletteColors.length);
	console.log(paletteColors);

	for (i = 0; i < numberOfColors; i++) { 
		var paletteColor = createPixel(paletteColors[i], className);
		document.body.appendChild(paletteColor);
	}
}

window.onload = function() {
	createColorPalette(57, "palette");
	
	createPixelArray(1482, "grey", "pixel");

	var paletteColors = document.getElementsByClassName("palette");
	var currentColor = "";
	for	(i = 0; i < paletteColors.length; i++) {
		paletteColors[i].addEventListener("click", function(event) {
			currentColor = event.target.style.backgroundColor;
		})
	}

	var pixels = document.getElementsByClassName("pixel");

	for	(i = 0; i < pixels.length; i++) {
		pixels[i].addEventListener("mouseover", function(event) {
			event.target.style.backgroundColor = currentColor.toString();
		})
	}	

	

}


