const menu = document.getElementById("menu");
const overlay = document.getElementById("overlay");
const openBtn = document.getElementById("openMenu");
const closeBtn = document.getElementById("closeMenu");

function openMenu() {
    menu.classList.add("active");
    overlay.classList.add("active");
}

function closeMenu() {
    menu.classList.remove("active");
    overlay.classList.remove("active");
}

openBtn.onclick = openMenu;
closeBtn.onclick = closeMenu;

overlay.onclick = closeMenu;