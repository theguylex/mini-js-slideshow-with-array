// Images placed in array using filepath
let images = ["Assets/img/vlcsnap-2019-01-20-19h58m37s498.png","Assets/img/vlcsnap-2018-01-19-19h57m59s196.png","Assets/img/vlcsnap-2017-10-07-23h37m31s37.png",];

//declaring variable which will help keep track of the current index
let currentIndex = 0;

function nextSlide() {
//The currentIndex is incremented by 1. 
//and the modulo operator (%) ensures that if currentIndex exceeds the length
//of the images array, it wraps around to 0.
    currentIndex = (currentIndex + 1) % images.length;
// updates the src attribute of the <img> element to the new image.
    document.getElementById("slider-image").src = images[currentIndex];
}

function prevSlide() {
//"currentIndex - 1" decreases the index to move to the previous image.
//"+ images.length" ensures that if the index is negative (e.g., when moving 
// from the first image), it wraps around to the end of the array
// "% images.length" makes sure that the index stays within the valid range 
// of the array.
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    document.getElementById("slider-image").src = images[currentIndex];
}