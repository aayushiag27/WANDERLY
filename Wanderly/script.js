
const hamburger = document.querySelector(".hamburger");

const mobileMenu = document.querySelector(".mobile-menu");

const close = document.querySelector(".close");

hamburger.addEventListener("click", function () {

    mobileMenu.classList.add("active");

});

close.addEventListener("click", function () {

    mobileMenu.classList.remove("active");

});


const email = document.querySelector("#email");

const subscribe = document.querySelector("#subscribe");

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

    message.textContent = "Searching for your destination...";

});


const favorites = document.querySelectorAll(".favorite");

favorites.forEach(function (button) {

    button.addEventListener("click", function () {

        if (button.textContent === "♡") {

            button.textContent = "♥";

        } else {

            button.textContent = "♡";

        }

    });

});


const topBtn = document.querySelector("#topBtn");

topBtn.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
```
