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
window.addEventListener('scroll', function(){
    var header = document.querySelector("header");
    header.classList.toggle("abajo", window.scrollY>0);
})






document.addEventListener("DOMContentLoaded", function() {
    const logoMenu = document.querySelector('.bx-align-right');
    const menuUl = document.querySelector('.menu ul');

    logoMenu.addEventListener('click', function() {
        menuUl.classList.toggle('menu-ul-visible');
    });
});
