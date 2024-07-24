document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector('.movil-menu');
    const navBar = document.querySelector('.nav-bar');
    const socialMedia = document.querySelector('.social-media');
    
    hamburger.addEventListener("click", () => {
        navBar.classList.toggle('active');
        socialMedia.classList.toggle('active');
    })

    //se seleccionan todos los elementos a del ul
    const navLinks = document.querySelectorAll('.nav-bar ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) { //Es importante usar function porque sino this no funciona de la misma manera que con una arrow function
            //evita el comportamiento default del elemento
            event.preventDefault(); 

            // Quita la clase active del enlace que la tenga
            document.querySelector('.nav-bar ul li a.active').classList.remove('active');

            // Añade la clase active al enlace clicado
            this.classList.add('active');
        })
    })
});
    