const menuButton = document.getElementById("menuButton");
const navigationLinks = document.getElementById("navigationLinks");
const navigationItems = navigationLinks.querySelectorAll("a");
const currentYear = document.getElementById("currentYear");

menuButton.addEventListener("click", () => {
    navigationLinks.classList.toggle("open");
});

navigationItems.forEach((item) => {
    item.addEventListener("click", () => {
        navigationLinks.classList.remove("open");
    });
});

currentYear.textContent = new Date().getFullYear();
