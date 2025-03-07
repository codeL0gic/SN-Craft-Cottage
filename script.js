//-Get references to the hamburger button and nav menu//

const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("navMenu");

hamburger.addEventListener("click", function () {
  navMenu.classList.toggle("active");
});
