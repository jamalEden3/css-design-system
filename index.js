const nav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');
const navLink = document.querySelectorAll('.nav-item');

navToggle.addEventListener("click", () => {
    const visibleNav = nav.getAttribute("data-visible");

    if(visibleNav === "false") {
        nav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    } else {
        nav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
    }
    console.log('sad')
});

