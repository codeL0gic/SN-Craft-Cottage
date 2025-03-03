const homeLink = document.getElementById("homeLink");
const aboutLink = document.getElementById("aboutLink");
const galleryLink = document.getElementById("galleryLink");
const contactLink = document.getElementById("contactLink");

const homeContent = document.getElementById("homeContent");
const aboutContent = document.getElementById("aboutContent");
const galleryContent = document.getElementById("galleryContent");
const contactContent = document.getElementById("contactContent");

function hideAllContent() {
  homeContent.style.display = "none";
  aboutContent.style.display = "none";
  galleryContent.style.display = "none";
  contactContent.style.display = "none";
}

function showHomeContent() {
  hideAllContent();
  homeContent.style.display = "block";
}

function showAboutContent() {
  hideAllContent();
  aboutContent.style.display = "block";
}

function showGalleryContent() {
  hideAllContent();
  galleryContent.style.display = "block";
}

function showContactContent() {
  hideAllContent();
  contactContent.style.display = "block";
}

homeLink.addEventListener("click", showHomeContent);
aboutLink.addEventListener("click", showAboutContent);
galleryLink.addEventListener("click", showGalleryContent);
contactLink.addEventListener("click", showContactContent);
