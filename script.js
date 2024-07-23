document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector('.movil-menu');
    hamburger.addEventListener("click", () => {
        const navBar = document.querySelector('.nav-bar');
        navBar.classList.toggle('active');

        const socialMedia = document.querySelector('.social-media');
        socialMedia.classList.toggle('active');
    })

    toggleMenu.addEventListener('click', () => {
        navContent.classList.toggle('active');
    })
});
    