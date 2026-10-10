const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");
const closeMenu = document.querySelector(".mobile-menu .close");
if (hamburger && mobileMenu) {
    hamburger.addEventListener("click", function () {
        mobileMenu.classList.add("active");
    });
}
if (closeMenu && mobileMenu) {
    closeMenu.addEventListener("click", function () {
        mobileMenu.classList.remove("active");
    });
}
if (mobileMenu) {
    mobileMenu.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            mobileMenu.classList.remove("active");
        });
    });
}
const subscribe = document.querySelector("#subscribe");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
if (subscribe && email && message) {
    subscribe.addEventListener("click", function () {
        const emailValue = email.value.trim();

        if (emailValue.includes("@") && emailValue.includes(".")) {
            message.textContent = "Successfully subscribed!";
        } else {
            message.textContent = "Please enter a valid email!";
        }
    });
}
const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("destinationInput");
const cards = document.querySelectorAll(".destination-cards .card");
const viewAll = document.querySelector(".view-all");
if (searchBtn && searchInput) {
    searchBtn.addEventListener("click", function () {
        const searchText = searchInput.value.toLowerCase().trim();
        let found = false;

        cards.forEach(function (card) {
            const heading = card.querySelector("h3");

            if (!heading) {
                return;
            }

            const destination = heading.textContent.toLowerCase();

            if (searchText === "" || destination.includes(searchText)) {
                card.style.display = "";
                found = true;
            } else {
                card.style.display = "none";
            }
        });

        if (searchText !== "" && !found) {
            alert("Destination not found.");
        }
    });


    searchInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            searchBtn.click();
        }
    });
}
if (viewAll) {
    viewAll.addEventListener("click", function () {
        cards.forEach(function (card) {
            card.style.display = "";
        });

        if (searchInput) {
            searchInput.value = "";
        }

        viewAll.textContent = "All destinations shown";
    });
}
const searchIcon = document.querySelector(".search-icon");
const searchBox = document.querySelector(".search-box");

if (searchIcon && searchBox) {
    searchIcon.addEventListener("click", function () {
        searchBox.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

        if (searchInput) {
            searchInput.focus();
        }
    });
}


document.querySelectorAll(".offer-text button").forEach(function (button) {
    button.addEventListener("click", function () {
        alert("Explore our latest travel offers!");
    });
});


document.querySelectorAll(".nav-right a").forEach(function (link) {
    if (link.textContent.toLowerCase().includes("list your property")) {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            alert("Property listing feature coming soon!");
        });
    }
});


document.querySelectorAll(".save-btn").forEach(function (button) {
    const card = button.closest(".card");
    const heading = card ? card.querySelector("h3") : null;

    if (!heading) {
        return;
    }

    const destinationName = heading.textContent.trim();

    let savedDestinations = JSON.parse(
        localStorage.getItem("savedDestinations") || "[]"
    );

   
    if (savedDestinations.includes(destinationName)) {
        button.classList.add("saved");
        button.textContent = "♥";
    }

    button.addEventListener("click", function () {
        let saved = JSON.parse(
            localStorage.getItem("savedDestinations") || "[]"
        );

        if (saved.includes(destinationName)) {
            saved = saved.filter(function (name) {
                return name !== destinationName;
            });

            button.classList.remove("saved");
            button.textContent = "♡";
        } else {
            saved.push(destinationName);

            button.classList.add("saved");
            button.textContent = "♥";
        }

        localStorage.setItem(
            "savedDestinations",
            JSON.stringify(saved)
        );
    });
});


const topBtn = document.getElementById("topBtn");

if (topBtn) {
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
}