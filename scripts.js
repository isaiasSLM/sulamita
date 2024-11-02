// scripts.js
function toggleMenu() {
    const menu = document.querySelector('.nav-menu');
    menu.classList.toggle('show');
}



// scripts.js
document.addEventListener("scroll", function () {
    const elements = document.querySelectorAll(".content");
    elements.forEach(element => {
        const position = element.getBoundingClientRect().top;
        if (position < window.innerHeight) {
            element.style.opacity = 1;
            element.style.transform = "translateY(0)";
        }
    });
});
