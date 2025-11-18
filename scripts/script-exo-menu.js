// Toggle du menu mobile
const navToggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('main-nav');


navToggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', open);
});


// Sous-menu en mobile: utilisation de bouton .submenu-toggle
const submenuToggles = document.querySelectorAll('.submenu-toggle');
submenuToggles.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const parent = btn.closest('.has-submenu');
        const submenu = parent.querySelector('.submenu');
        const open = submenu.classList.toggle('open');
        btn.setAttribute('aria-expanded', open);
    });
});