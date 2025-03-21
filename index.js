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

  let formDataObject = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    phone: phone,
    message: message,
  };

  localStorage.setItem("formData", JSON.stringify(formDataObject));
  console.log("Form data saved:", formDataObject);
  const localStorageData = JSON.parse(localStorage.getItem("formData"));
  console.log("The form data from local storage is", localStorageData);

  // Format email body
  const emailBody = `
        Name: ${localStorageData.firstName} ${localStorageData.lastName}
        Email: ${localStorageData.email}
        Phone: ${localStorageData.phone}
        Message: ${localStorageData.message}
    `;

  // Create mailto link
  const mailtoLink = `mailto:mommascraftcottage@gmail.com?subject=Booking Inquiry from ${
    localStorageData.firstName
  } ${localStorageData.lastName}&body=${encodeURIComponent(emailBody)}`;

  //*-- Open email client
  window.location.href = mailtoLink;
  //commented out to prevent form submission
  form.reset();
  localStorage.clear();
});

//*Bible Verse API development
const verse = document.querySelector(`#verse-content`);
const verseRef = document.querySelector(`#verse`);

async function getRandomVerse() {
  const API_KEY = `abd336c8cee9fdfde6291c5ce6689f17`;
  const BIBLE_ID = "06125adad2d5898a-01";
  const Verses = [
    `JER.29.11`,
    `PSA.23`,
    `1COR.4.4-8`,
    `PHP.4.13`,
    `JHN.3.16`,
    `ROM.8.28`,
    `ISA.41.10`,
    `PSA.46.1`,
    `GAL.5.22-23`,
    `HEB.11.1`,
    `2TI.1.7`,
    `1COR.10.13`,
    `PRO.22.6`,
    `ISA.40.31`,
    `JOS.1.9`,
    `HEB.12.2`,
    `MAT.11.28`,
    `ROM.10.9-10`,
    `PHP.2.3-4`,
    `MAT.5.43-44`,
  ];
  const verseIndex = Math.floor(Math.random() * Verses.length);
  const verseID = Verses[verseIndex];
  const [book, chapter, verse] = verseID.split(".");
  try {
    const response = await fetch(
      `https://api.scripture.api.bible/v1/bibles/${BIBLE_ID}/verses/${verseID}`,
      {
        method: "GET",
        headers: {
          "api-key": API_KEY,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        mode: "cors", // Explicitly set CORS mode
      }
    );
    if (!response.ok) {
      throw new Error("Failed to fetch verse");
    }
    const data = await response.json();
    // console.log("Verse data:", data);
    return data;
  } catch (error) {
    console.error("Failed to fetch verse:", error);
    return null;
  }
}

document.addEventListener("DOMContentLoaded", async function () {
  const verseData = await getRandomVerse();
  if (verseData && verseData.data) {
    // Remove the # from getElementById calls
    const verseContent = document.getElementById("verse-content");
    const verseReference = document.getElementById("verse");

    // Update content if elements exist
    if (verseContent && verseReference) {
      // Clean and set content
      const cleanContent = verseData.data.content.replace(/<[^>]*>/g, "");
      verseContent.textContent = cleanContent;
      verseReference.textContent = verseData.data.reference;
    }
  }
});
