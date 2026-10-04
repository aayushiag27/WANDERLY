
const exploreBtn = document.getElementById("exploreBtn");
const tripsBtn = document.getElementById("tripsBtn");
const logout = document.getElementById("logout");

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
