const menu = document.getElementById("menu");
const overlay = document.getElementById("overlay");
const openBtn = document.getElementById("openMenu");
const closeBtn = document.getElementById("closeMenu");

function toggleMenu() {
    menu.classList.toggle("active");
    overlay.classList.toggle("active");
}

openBtn.onclick = toggleMenu;
closeBtn.onclick = toggleMenu;
overlay.onclick = toggleMenu;
