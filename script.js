// //HAMBURGER MENU
// const menu = document.querySelector(".nav-menu");
// const menuItems = document.querySelectorAll(".menu-item");
// const hamburger= document.querySelector(".hamburger-menu");
// const menuIcon = document.querySelector(".menu-icon");
// const closeIcon= document.querySelector(".close-icon");

// function toggleMenu() {
//   if (menu.classList.contains("showMenu")) {
//     menu.classList.remove("showMenu");
//     closeIcon.style.display = "none";
//     menuIcon.style.display = "block";
//   } else {
//     menu.classList.add("showMenu");
//     closeIcon.style.display = "block";
//     menuIcon.style.display = "none";
//   }
// }

// menuItems.forEach( 
//     function(menuItem) { 
//       menuItem.addEventListener("click", toggleMenu);
//     })

// hamburger.addEventListener("click", toggleMenu);



const menuIcon = document.querySelector("#menu-icon");
const openNav = () => {
    const navContainer = document.querySelector("nav");
    navContainer.classList.toggle("menuToggle");
}

menuIcon.onclick = openNav