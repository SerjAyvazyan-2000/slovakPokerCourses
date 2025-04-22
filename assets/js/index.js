const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const header = document.querySelector('header');
const menuBg = document.querySelector('.menu-bg');
const headerBody = document.querySelector('.header-body');



document.addEventListener('DOMContentLoaded', function () {
    burger.addEventListener("click", function (e) {
        if (menu.classList.contains('active')) {
            closeMenu();
        } else {
            openMenu();
        }
    });
    menuBg.addEventListener("click", function (e) {
        if (menu.classList.contains('active')) {
            closeMenu();
        } else {
            openMenu();
        }
    });
    document.querySelectorAll('.menu-list li a').forEach(link => {
        link.addEventListener("click", closeMenu);
    });

    function openMenu() {
        menu.classList.add('active');
        burger.classList.add('active');
        header.classList.add('active');
        menuBg.classList.add('active');
        headerBody.classList.add('active');


    }

    function closeMenu() {
        menu.classList.remove('active');
        burger.classList.remove('active');
        header.classList.remove('active');
        menuBg.classList.remove('active');
        headerBody.classList.remove('active');

    }


});




document.querySelectorAll('.faq-header').forEach(button => {
    button.addEventListener('click', () => {
        const active = button.classList.contains('active');

        // закрываем всё
        document.querySelectorAll('.faq-header').forEach(btn => {
            btn.classList.remove('active');
            btn.nextElementSibling.style.maxHeight = null;
        });

        // открываем выбранное
        if (!active) {
            button.classList.add('active');
            const body = button.nextElementSibling;
            body.style.maxHeight = body.scrollHeight + "px";
        }
    });
});


document.querySelectorAll('.home-link ').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });



});

const banner = document.getElementById("cookie-banner");
const acceptBtn = document.getElementById("cookie-accept");

if (!localStorage.getItem("cookieAccepted")) {
    banner.classList.remove("hidden");
}

acceptBtn.addEventListener("click", () => {
    localStorage.setItem("cookieAccepted", "true");
    banner.classList.add("hidden");
});