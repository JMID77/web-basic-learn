function initMenu() {
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.getElementById('main-nav');

    if (navToggle && nav) {
        navToggle.addEventListener('click', () => {
            const open = nav.classList.toggle('open');
            navToggle.setAttribute('aria-expanded', open);
        });

        const submenuToggles = document.querySelectorAll('.submenu-toggle');
        submenuToggles.forEach(btn => {
            btn.addEventListener('click', () => {
                const parent = btn.closest('.has-submenu');
                const submenu = parent.querySelector('.submenu');
                const open = submenu.classList.toggle('open');
                btn.setAttribute('aria-expanded', open);
            });
        });
    }
}

initMenu();
