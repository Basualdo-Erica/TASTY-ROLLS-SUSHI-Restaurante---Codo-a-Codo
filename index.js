// let singUp = document.getElementById("singUp");
// let singIn = document.getElementById("singIn");
// let nameinput = document.getElementById("nameinput");
// let title = document.getElementById("title");

// singIn.onclick = function() {
//     nameinput.style.maxHeight = "0",
//     title.innerHTML = "login";
//     singUp.classList.add(disable);
//     singIn.classList.remove(disable)
// }


// singUp.onclick = function() {
//     nameinput.style.maxHeight = "60px",
//     title.innerHTML = "registro";
//     singUp.classList.remove(disable);
//     singIn.classList.add(disable)
// }

// menu de navegacion con scroll hacia abajo
// document.addEventListener("DOMContentLoaded", function() {
//     const burger = document.getElementById('burger');
//     const navbar = document.querySelector('.navbar-a-visible');

//     burger.addEventListener('click', function() {
//         navbar.classList.toggle('active');
//     });
// });

// window.addEventListener('scroll', function() {
//     var header = document.querySelector("header");
//     header.classList.toggle("abajo", window.scrollY > 0);
// });


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
