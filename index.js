document.addEventListener("DOMContentLoaded", function() {
    const burger = document.getElementById('burger');
    const navbar = document.querySelector('.navbar-a-visible');
    const logo = document.getElementById('logo');

    if (burger && navbar) {
        burger.addEventListener('click', function() {
            navbar.classList.toggle('active');
            if (logo) {
                logo.classList.toggle('hidden');
            }
        });
    }

    window.addEventListener('scroll', function() {
        var header = document.querySelector("header");
        if (header) {
            header.classList.toggle("abajo", window.scrollY > 0);
        }
    });
});



