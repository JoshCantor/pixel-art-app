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

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createRandomColorPalette (numberOfColors, className) {
	for (i = 0; i < numberOfColors; i++) { 
		var paletteColor = createPixel("#" + getRandomIntInclusive(100000, 999999), className);
		document.body.appendChild(paletteColor);
	}
}

window.onload = function() {
	createRandomColorPalette(57, "palette");
	
	createPixelArray(1482, "grey", "pixel");

	var paletteColors = document.getElementsByClassName("palette");
	var currentColor = "";
	for	(i = 0; i < paletteColors.length; i++) {
		paletteColors[i].addEventListener("click", function(event) {
			currentColor = event.target.style.background;
		})
	}

	var pixels = document.getElementsByClassName("pixel");

	for	(i = 0; i < pixels.length; i++) {
		pixels[i].addEventListener("mouseover", function(event) {
			event.target.style.background = currentColor.toString();
		})
	}	

	

}


