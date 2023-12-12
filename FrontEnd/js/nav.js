const navLinks = document.querySelectorAll('.nav-link');

function removeActiveClass() {
    navLinks.forEach(link => link.classList.remove('active'));
}

function addActiveClass(e) {
    removeActiveClass();
    e.target.classList.add('active');
}

//here i am making a function that removes the active class from the nav links, and then adds it to the one that is clicked.

navLinks.forEach(link => link.addEventListener('click', addActiveClass));

let url = window.location.href;

navLinks.forEach((navLink) => {
    if (navLink.href === url) {
        removeActiveClass();
        navLink.classList.add('active');
    }
});