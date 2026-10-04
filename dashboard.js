const exploreBtn = document.getElementById("exploreBtn");
const tripsBtn = document.getElementById("tripsBtn");
const logout = document.getElementById("logout");
const savedGrid = document.getElementById("savedGrid");

exploreBtn.addEventListener("click", function () {
    window.location.href = "index.html#destinations";
});

tripsBtn.addEventListener("click", function () {
    document.getElementById("trips").scrollIntoView({
        behavior: "smooth"
    });
});

logout.addEventListener("click", function () {
    window.location.href = "index.html";
});

const savedDestinations = JSON.parse(
    localStorage.getItem("savedDestinations")
) || [];

const destinationImages = {
    "Amalfi Coast": "card1.jpg",
    "Kyoto": "card2.jpg",
    "Swiss Alps": "card3.jpg",
    "Santorini": "card4.jpg",
    "Bali": "card5.jpg",
    "Patagonia": "card6.jpg"
};

savedDestinations.forEach(function (destination) {

    const card = document.createElement("div");
    card.classList.add("saved-card");

    card.innerHTML = `
    <img src="${destinationImages[destination]}" alt="${destination}">
    <h3>${destination}</h3>
    <button class="remove-btn">Remove</button>
`;
    savedGrid.appendChild(card);
    const removeBtn = card.querySelector(".remove-btn");

removeBtn.addEventListener("click", function () {

    let savedDestinations = JSON.parse(
        localStorage.getItem("savedDestinations")
    ) || [];

    savedDestinations = savedDestinations.filter(function (item) {
        return item !== destination;
    });

    localStorage.setItem(
        "savedDestinations",
        JSON.stringify(savedDestinations)
    );

    card.remove();
});
});

if (savedDestinations.length === 0) {
    savedGrid.innerHTML = "<p>No saved destinations yet.</p>";
}