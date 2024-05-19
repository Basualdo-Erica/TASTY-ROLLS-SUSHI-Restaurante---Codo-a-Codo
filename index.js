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

    // Form validation
    const reservationForm = document.getElementById('reservationForm');
    const subscribeForm = document.getElementById('subscribeForm');

    if (reservationForm) {
        reservationForm.addEventListener('submit', function(event) {
            event.preventDefault();
            if (validateForm(reservationForm, 'reservationError')) {
                reservationForm.submit();
            }
        });
    }

    if (subscribeForm) {
        subscribeForm.addEventListener('submit', function(event) {
            event.preventDefault();
            if (validateForm(subscribeForm, 'subscribeError')) {
                subscribeForm.submit();
            }
        });
    }

    function validateForm(form, errorContainerId) {
        let isValid = true;
        const inputs = form.querySelectorAll('input, textarea');
        const errorContainer = document.getElementById(errorContainerId);
        errorContainer.innerHTML = '';
        errorContainer.style.display = 'none';

        inputs.forEach(input => {
            if (input.value.trim() === '') {
                isValid = false;
                input.style.borderColor = 'red';
                showErrorMessage(errorContainer, `El campo ${input.placeholder} es obligatorio.`);
            } else {
                input.style.borderColor = '#ccc';
            }
            if (input.type === 'email' && !validateEmail(input.value)) {
                isValid = false;
                input.style.borderColor = 'red';
                showErrorMessage(errorContainer, 'El formato del correo electrónico no es válido.');
            }
        });

        if (!isValid) {
            errorContainer.style.display = 'block';
        }

        return isValid;
    }

    function showErrorMessage(container, message) {
        const error = document.createElement('p');
        error.textContent = message;
        container.appendChild(error);
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});

