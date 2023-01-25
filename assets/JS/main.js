const navLinks = document.querySelector('.nav_links');
const menuToggle = document.querySelector('.ham_brg_tool');

menuToggle.addEventListener("click", () => {
    const visibility = navLinks.getAttribute('data-visible');
    if(visibility == "false"){
        navLinks.setAttribute("data-visible", true);
        menuToggle.setAttribute("aria-expanded", true);
    }
    else{
        navLinks.setAttribute("data-visible", false);
        menuToggle.setAttribute("aria-expanded", false);
    }
})