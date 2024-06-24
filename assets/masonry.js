const allImages = document.querySelectorAll(".images .img");
const lightbox = document.querySelector(".lightbox");
const closeImgBtn = lightbox.querySelector(".close-icon");
const previewNav = lightbox.querySelector(".preview-img__nav")
const prevBtn = previewNav.querySelector(".preview-img__nav--prev");
const nextBtn = previewNav.querySelector(".preview-img__nav--next");


allImages.forEach(img => {
    // Calling showLightBox function with passing clicked img src as argument
    img.addEventListener("click", () => showLightbox(img));
});

const removeImgActiveClass = () => {
  allImages.forEach(img => {
    img.classList.remove("img--active");
  })
}

const updateLightboxSrc = (img) => {
  let src = img.querySelector("img").src;
  let desc = img.querySelector(".img__desc").innerHTML;
  // Showing lightbox and updating img source
  lightbox.querySelector("img").src = src;
  lightbox.querySelector(".preview_desc").innerHTML = desc
}

const showGalleryNav = () => {
  if(allImages.length > 1) {
    previewNav.classList.remove("hide")
  }
}

const showLightbox = (img) => {
  removeImgActiveClass();
  img.classList.add("img--active");
  showGalleryNav();
  updateLightboxSrc(img);
  lightbox.classList.add("show");
  document.body.style.overflow = "hidden";
  resetListeners();
}

const closeLightbox = () => {
  // Hiding lightbox on close icon click
  lightbox.classList.remove("show");
  document.body.style.overflow = "auto";
}

const getNodeIndex = (arr, node) => {
  let i = null
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] === node) {
      i = index
    }
  }
  return i;
}

const arrLoopFix = (ind, arr) => {
  return (ind + arr.length) % arr.length
}

const advLightbox = (dir) => {
  const imgNode = document.querySelector(".img--active");
  let currImgIndex = getNodeIndex(allImages, imgNode);
  if (dir === 0) {
    showLightbox(allImages[arrLoopFix(currImgIndex - 1, allImages)]);
  } else {
    showLightbox(allImages[arrLoopFix(currImgIndex + 1, allImages)]);
  }
}

const lightboxNext = () => {
  advLightbox(1)
}
const lightboxPrev = () => {
  advLightbox(0)
}

const addListeners = () => {
  closeImgBtn.addEventListener("click", closeLightbox);
  nextBtn.addEventListener("click", lightboxNext);
  prevBtn.addEventListener("click", lightboxPrev);
}

const removeListeners = () => {
  closeImgBtn.removeEventListener("click", closeLightbox);
  nextBtn.removeEventListener("click", lightboxNext);
  prevBtn.removeEventListener("click", lightboxPrev);
}
const resetListeners = () => {
  removeListeners();
  addListeners();
}

