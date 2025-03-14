"use strict";

const homeLink = document.getElementById("homeLink");
const aboutLink = document.getElementById("aboutLink");
const galleryLink = document.getElementById("galleryLink");
const contactLink = document.getElementById("contactLink");

const homeMobile = document.getElementById("homeMobile");
const aboutMobile = document.getElementById("aboutMobile");
const galleryMobile = document.getElementById("galleryMobile");
const contactMobile = document.getElementById("contactMobile");

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

homeMobile.addEventListener("click", showHomeContent);
aboutMobile.addEventListener("click", showAboutContent);
galleryMobile.addEventListener("click", showGalleryContent);
contactMobile.addEventListener("click", showContactContent);

const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");
const desktopLinks = document.getElementById("desktopLinks");

menuButton.addEventListener("click", function () {
  const navMenu = document.getElementById("navMenu");
  // Remove d-none class when toggling active
  navMenu.classList.remove("d-none");
  navMenu.classList.toggle("active");
});

window.addEventListener("resize", function () {
  const width = window.innerWidth;
  const navMenu = document.getElementById("navMenu");
  const menuButton = document.getElementById("menuButton");
  const desktopLinks = document.getElementById("desktopLinks");

  if (width >= 769) {
    navMenu.classList.remove("active");
    navMenu.classList.add("d-none");
    menuButton.style.display = "none";
    desktopLinks.style.display = "flex";
  } else {
    menuButton.style.display = "flex";
    desktopLinks.style.display = "none";
  }
});

/*--form Development
const form = document.getElementById("contactForm");
const name = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message")

form.addEventListener('submit', function(event) {
  document.getElementById("submit".onclick = function() {})
  event.preventDefault(); // Prevent the default behavior of reloading page//
  alert('Form submitted');
  console.log("Form submitted");
  document.getElementById("contactForm").reset();

});
*/

/*Submit button validation*
const submitButton = document.getElementById("submitButton");
const form = document.querySelector("form");
const email = document.getElementById("email");
const emailError = document.querySelector("#email + span.error");

function submitButtonHandler(clickEvent) {

  clickEvent.preventDefault();
  if (!form.checkValidity()) {
    emailError.textContent = email.validationMessage;
    emailError.style.display = "block";
  }
}

email.addEventListener("input", (_event) => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I expect an e-mail, darling!");
  } else {
    email.setCustomValidity("");
  }
});

submitButton.addEventListener("click", (submitButton) => {
  if (!form.checkValidity()) {
    emailError.textContent = email.validationMessage;
    emailError.style.display = "block";
  }
})*/

/*-Get references to the hamburger button and nav menu//

const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("navMenu");

hamburger.addEventListener("click", function () {
  navMenu.classList.toggle("active");
});*/
