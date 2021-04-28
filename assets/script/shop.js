let carouselWidth= 330; 

let prevButton= document.getElementById("button-previous"); 
let nextButton = document.getElementById("button-next");
let imageRow = document.getElementById("chick-images");

let imageNum= 0;

function showNextImage() {
	imageNum= imageNum + 1; 
	let moveImage = imageNum*carouselWidth; 
	imageRow.style.left = -moveImage; 
	 
}

nextButton.onclick = showNextImage; 

function showPrevImage() {
	imageNum= imageNum - 1; 
	let moveImage= imageNum*carouselWidth; 
	imageRow.style.left = -moveImage; 
	
}

prevButton.onclick = showPrevImage;

let totalImages = document.getElementsByClassName("item").length;

/* function checkControls() {
	if (imageNum == 0) {
		prevButton.classList.add("hidden"); 
	}
	else if (prevButton.classList.contains("hidden")) {
		prevButton.classList.remove("hidden"); 
	}
	if (imageNum == 2) {
		nextButton.classList.add("hidden"); 
	}
	else if (nextButton.classList.contains("hidden")) {
		nextButton.classList.remove("hidden"); 
	}
} */