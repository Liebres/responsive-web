let menu = document.querySelector("#menu-icon")
let navbar = document.querySelector(".uele")
let navicon = document.querySelector(".icon")

menu.addEventListener("click", function(){
    navbar.classList.toggle("active")
    navicon.classList.toggle("active")
});

window.onscroll = () => {
    navbar.classList.remove("active")
    navicon.classList.remove("active")
}
