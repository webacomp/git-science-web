let btnInit = document.getElementById("slide-show");
let slides = document.querySelectorAll(".gallery-container .slide");
let currentImageCounter = 0;
const delayImage = 3000;

// slides[currentImageCounter].style.display = "flex";
 slides[currentImageCounter].style.opacity = 1

btnInit.addEventListener("click", (e) => {
     createSlideShow(currentImageCounter);
     setInterval(nextImage, delayImage); 
 

});

// Apply to all slideshows that you define with the markup wrote

function nextImage() {
//   slides[currentImageCounter].style.display = "none";
 
//   slides[currentImageCounter].style.display = "flex";
  const timer = currentImageCounter
    setTimeout(() => {
      slides[timer].style.opacity = 0
    }, 1000)
    currentImageCounter = (currentImageCounter + 1) % slides.length; 
    slides[currentImageCounter].style.opacity = 1
}
  let figures = document.querySelector('.gallery')
function createSlideShow(i) {
//   let figures = document.querySelectorAll("figure");
  
  figures.classList.add('show__box')
//   for (let i = 0; i < figures.length; i++) {
    if (figures.length === currentImageCounter) {
       figures.classList.remove("show__box");
    
  }

  if (figures.length === currentImageCounter) {
    currentImageCounter = 0;
    }
    
    if (currentImageCounter < figures.length) {
        currentImageCounter ++
    }

}
