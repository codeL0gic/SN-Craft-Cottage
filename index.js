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

/*--form Development*/
const form = document.getElementById("Form");
const submitButton = document.getElementById("submitButton");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Get form values
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("emailAddress").value;
  const phone = document.getElementById("phoneNumber").value;
  const message = document.getElementById("message").value;

  // Format email body
  const emailBody = `
        Name: ${firstName} ${lastName}
        Email: ${email}
        Phone: ${phone}
        Message: ${message}
    `;

  // Create mailto link
  const mailtoLink = `mailto:mommascraftcottage@gmail.com?subject=Booking Inquiry from ${firstName} ${lastName}&body=${encodeURIComponent(
    emailBody
  )}`;

  //*-- Open email client
  window.location.href = mailtoLink;
  //commented out to prevent form submission
});
/* Form handling with localStorage Form handling with localStorage
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("Form");
  const submitButton = document.getElementById("submitButton");

  // Load any existing form data from localStorage
  const loadFormData = () => {
    const savedData = localStorage.getItem("formData");
    if (savedData) {
      const formData = JSON.parse(savedData);
      document.getElementById("firstName").value = formData.firstName || "";
      document.getElementById("lastName").value = formData.lastName || "";
      document.getElementById("emailAddress").value = formData.email || "";
      document.getElementById("phoneNumber").value = formData.phone || "";
      document.getElementById("message").value = formData.message || "";
    }
  };

  // Save form data to localStorage
  const saveFormData = () => {
    const formData = {
      firstName: document.getElementById("firstName").value,
      lastName: document.getElementById("lastName").value,
      email: document.getElementById("emailAddress").value,
      phone: document.getElementById("phoneNumber").value,
      message: document.getElementById("message").value,
      timestamp: new Date().toISOString(),
    };

    localStorage.setItem("formData", JSON.stringify(formData));
    console.log("Form data saved:", formData); // Debug line
  };

  // Handle form submission
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Save form data
    saveFormData();

    // Show success message
    alert("Form data has been saved!");

    // Optional: Clear form after submission
    form.reset();
    localStorage.removeItem("formData");
  });

  // Save form data as user types (optional)
  form.addEventListener("input", saveFormData);

  // Load saved data when page loads
  loadFormData();
});
// To view stored data
const storedData = JSON.parse(localStorage.getItem("formData"));
console.log(storedData);*/
