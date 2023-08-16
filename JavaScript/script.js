// JavaScript code
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('translate-x-full');
});

// JavaScript code
// JavaScript code
const slider = document.getElementById('slider');
const sliderItems = slider.querySelectorAll('.slider-item');
let currentIndex = 0;

function showSlide(index) {
    sliderItems.forEach((item, i) => {
        if (i === index) {
            item.classList.add('show');
        } else {
            item.classList.remove('show');
        }
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % sliderItems.length;
    showSlide(currentIndex);
}

setInterval(nextSlide, 2000);
showSlide(currentIndex);

function toggleDescription(descriptionId) {
    var description = document.getElementById(descriptionId);
    var button = description.previousElementSibling;

    if (description.style.display === "none") {
        description.style.display = "block";
        button.textContent = "See Less";
    } else {
        description.style.display = "none";
        button.textContent = "See More";
    }
}
function showMore(cardId) {
    const moreSection = document.getElementById(`${cardId}More`);
    moreSection.classList.toggle('hidden');
}

function showFootwearSection() {
    var section1 = document.getElementById("footwearSection");
    section1.style.display = "block";
    var section2 = document.getElementById("Cape");
    section2.style.display = "none";
    var section3 = document.getElementById("Greys");
    section3.style.display = "none";
    var section4 = document.getElementById("Accessories");
    section4.style.display = "none";
    var section5 = document.getElementById("Apparel");
    section5.style.display = "none";
}
function Cape() {
    var section1 = document.getElementById("footwearSection");
    section1.style.display = "none";
    var section2 = document.getElementById("Cape");
    section2.style.display = "block";
    var section3 = document.getElementById("Greys");
    section3.style.display = "none";
    var section4 = document.getElementById("Accessories");
    section4.style.display = "none";
    var section5 = document.getElementById("Apparel");
    section5.style.display = "none";
}
function Greys() {
    var section1 = document.getElementById("footwearSection");
    section1.style.display = "none";
    var section2 = document.getElementById("Cape");
    section2.style.display = "none";
    var section3 = document.getElementById("Greys");
    section3.style.display = "block";
    var section4 = document.getElementById("Accessories");
    section4.style.display = "none";
    var section5 = document.getElementById("Apparel");
    section5.style.display = "none";
}
function Accessories() {
    var section1 = document.getElementById("footwearSection");
    section1.style.display = "none";
    var section2 = document.getElementById("Cape");
    section2.style.display = "none";
    var section3 = document.getElementById("Greys");
    section3.style.display = "none";
    var section4 = document.getElementById("Accessories");
    section4.style.display = "block";
    var section5 = document.getElementById("Apparel");
    section5.style.display = "none";
}
function Apparel() {
    var section1 = document.getElementById("footwearSection");
    section1.style.display = "none";
    var section2 = document.getElementById("Cape");
    section2.style.display = "none";
    var section3 = document.getElementById("Greys");
    section3.style.display = "none";
    var section4 = document.getElementById("Accessories");
    section4.style.display = "none";
    var section5 = document.getElementById("Apparel");
    section5.style.display = "block";
}
// Initialization for ES Users
