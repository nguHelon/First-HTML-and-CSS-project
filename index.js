const menu = document.querySelector(" #header .menu");
const close = document.querySelector("#header .close");
const navbar = document.querySelector("#header ul");

menu.addEventListener("click", () => {
    navbar.style.right = "0px";
});

close.addEventListener("click", () => {
    navbar.style.right = "-250px";
})