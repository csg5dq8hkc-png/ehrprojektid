(() => {
  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.menu-toggle');

  if (header && toggle) {
    const closeMenu = () => {
      header.classList.remove('menu-open');
      toggle.setAttribute('aria-expanded', 'false');
    };

    toggle.addEventListener('click', (event) => {
      event.stopPropagation();
      const isOpen = header.classList.toggle('menu-open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    document.querySelectorAll('.site-header nav a, .site-header .nav-cta').forEach(link => {
      link.addEventListener('click', closeMenu);
    });

    document.addEventListener('click', (event) => {
      if (!header.contains(event.target)) closeMenu();
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 900) closeMenu();
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth'});
      }
    });
  });
})();
