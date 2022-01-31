let btn = document.getElementById("arrow-btn");
const moveGallery = document.getElementById("moving-gallery")
let changeImage = document.getElementById("change-image")
let viewImage = document.getElementById("view-image")



let index = 0;

let images = [
  "img/backet of apples.jpeg",
  "img/boy in the red vest.jpeg",
  "img/frame picture.jpeg",
  "img/girl with earring.jpeg",
  "img/great wave.jpeg",
  "img/lady.webp",
  "img/mona lisa.jpeg",
  "img/night cafe.jpeg",
  "img/penitent.webp",
  "img/portrait of the landscape.jpeg",
  "img/sleeping beatu.jpeg",
  "img/starry night.jpeg",
  "img/storm on the sea.webp",
  "img/swings.jpeg",
  "img/van gogh.jpeg",
];

btn.addEventListener("click", () => {
  if (moveGallery.style.display === "none") {
    moveGallery.style.display = "flex";
  } else {
    // moveGallery.style.display = "none";

    flipImage(images);
  }
});

function flipImage(img) {
  document.getElementById("change-image").src = img[index];
  let flipped = null;

  for (let index = 0; index < img.length; index++) {
    flipped = img[index];
  }

  if (index === img.length - 1) {
    index = 0;
  } else {
    index++;
  }

  return flipped;
}

function viewImageShift(img) {
  // let index1 = 0
  // let viewImage = document.getElementById("view-image").href = img[index1]
  // for ( index1 = 0; index1 < img.length; index++) {
  //    viewImage = img[index1];
  // }
  // console.log(viewImage)
  //  index1 === (img.length - 1) ? 0 : index1++
  // return viewImage
}

viewImage.addEventListener("click", (e) => {
  // if (! enlargeImg()) {

  //     enlargeImg()

  // } else {
  //     resetImg()

  // }

  flipImage(images);
});

// Get the img object using its Id

// Function to increase image size
function enlargeImg() {
  // Set image size to 1.5 times original
  changeImage.style.transform = "scale(1.5)";
  // Animation effect
  changeImage.style.transition = "transform 0.25s ease";
}
// Function to reset image size
function resetImg() {
  // Set image size to original
  changeImage.style.transform = "scale(1)";
  changeImage.style.transition = "transform 0.25s ease";
}

// function compareIndex(index) {
//     index === images.length - 1 ? (index = 0) : index++;
// }



slideShow.forEach(initSlideshow)

function initSlideshow(slideShow) {
    let slides = document.querySelectorAll(`#${slideShow.id} [role="list"] .slide`)

    let index = 0
    let interval = 5000
    slides[index].classList.add('active')

    setInterval(() => {
        slides[index].classList.remove('active')

        index++

        index === slides.length ? index = 0 : slides[index].classList.add('active')
    },time)
}
