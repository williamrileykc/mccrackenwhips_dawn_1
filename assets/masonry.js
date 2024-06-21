const allImages = document.querySelectorAll(".images .img");
const lightbox = document.querySelector(".lightbox");
const closeImgBtn = lightbox.querySelector(".close-icon");

allImages.forEach(img => {
    // Calling showLightBox function with passing clicked img src as argument
    img.addEventListener("click", () => showLightbox(img));
});

const showLightbox = (img) => {
    let src = img.querySelector("img").src;
    let desc = img.querySelector(".img__desc").innerHTML;    console.log(desc);
    // Showing lightbox and updating img source
    lightbox.querySelector("img").src = src;
    lightbox.querySelector(".preview_desc").innerHTML = desc
    lightbox.classList.add("show");
    document.body.style.overflow = "hidden";
}

closeImgBtn.addEventListener("click", () => {
    // Hiding lightbox on close icon click
    lightbox.classList.remove("show");
    document.body.style.overflow = "auto";
});