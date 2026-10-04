const exploreBtn = document.getElementById("exploreBtn");
const tripsBtn = document.getElementById("tripsBtn");
const logout = document.getElementById("logout");

exploreBtn.addEventListener("click", function () {
    window.location.href = "index.html";
});

tripsBtn.addEventListener("click", function () {
    alert("Your upcoming trips will appear here!");
});

logout.addEventListener("click", function () {
    window.location.href = "index.html";
});