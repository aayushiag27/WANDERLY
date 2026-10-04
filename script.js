const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");
const close = document.querySelector(".close");

hamburger.addEventListener("click", function () {
    mobileMenu.classList.add("active");
});

close.addEventListener("click", function () {
    mobileMenu.classList.remove("active");
});


const subscribe = document.querySelector("#subscribe");
const email = document.querySelector("#email");
const message = document.querySelector("#message");

subscribe.addEventListener("click", function () {

    if (email.value.includes("@")) {
        message.textContent = "Successfully subscribed!";
    } else {
        message.textContent = "Please enter a valid email!";
    }

});


const searchBtn = document.querySelector("#searchBtn");

searchBtn.addEventListener("click", function () {
    alert("Search button clicked!");
});


const cards = document.querySelectorAll(".card");

cards.forEach(function (card) {

    card.addEventListener("click", function () {

        const place = card.querySelector("h3").textContent;

        alert("You selected " + place);

    });

});


const viewAll = document.querySelector(".view-all");

viewAll.addEventListener("click", function () {

    cards.forEach(function (card) {
        card.style.display = "block";
    });

    viewAll.textContent = "All destinations shown";

});


const offerButtons = document.querySelectorAll(".offer-text button");

offerButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        alert("Explore Collection clicked!");

    });

});





const property = document.querySelector(".nav-right a");

property.addEventListener("click", function (event) {

    event.preventDefault();

    alert("List your property clicked!");

});


const searchIcon = document.querySelector(".search-icon");

searchIcon.addEventListener("click", function () {

    document.querySelector(".search-box").scrollIntoView({
        behavior: "smooth"
    });

});


const mobileLinks = document.querySelectorAll(".mobile-menu a");

mobileLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        mobileMenu.classList.remove("active");

    });

});


const topBtn = document.querySelector("#topBtn");

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});


topBtn.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
const saveButtons = document.querySelectorAll(".save-btn");

saveButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const destination = button.dataset.name;

        let savedDestinations = JSON.parse(
            localStorage.getItem("savedDestinations")
        ) || [];

        if (savedDestinations.includes(destination)) {

            savedDestinations = savedDestinations.filter(function (item) {
                return item !== destination;
            });

            button.textContent = "♡";
            button.classList.remove("saved");

        } else {

            savedDestinations.push(destination);

            button.textContent = "♥";
            button.classList.add("saved");
        }

        localStorage.setItem(
            "savedDestinations",
            JSON.stringify(savedDestinations)
        );
    });
});