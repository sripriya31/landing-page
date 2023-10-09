// script.js

// Get the navbar element
const navbar = document.getElementById("navbar");

// Function to update navbar style when scrolled
function updateNavbarStyle() {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
}

// Listen for scroll events
window.addEventListener("scroll", updateNavbarStyle);

// Initial call to set the navbar style on page load
updateNavbarStyle();
