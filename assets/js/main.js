(() => {
  const PHONE = '5511975856834';
  const BASE_MESSAGE = 'Olá! Vim pelo site da Vidraçaria Cristal e gostaria de solicitar um orçamento.';

  const whatsappUrl = (message) => `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;

  document.querySelectorAll('[data-whatsapp-link]').forEach((link) => {
    link.href = whatsappUrl(BASE_MESSAGE);
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
  });

  document.querySelectorAll('[data-whatsapp-service]').forEach((link) => {
    const service = link.getAttribute('data-whatsapp-service');
    link.href = whatsappUrl(`Olá! Vim pelo site da Vidraçaria Cristal e gostaria de solicitar um orçamento para ${service}.`);
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
  });

  const header = document.querySelector('[data-header]');
  const updateHeader = () => header?.classList.toggle('is-scrolled', window.scrollY > 24);
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  const menuButton = document.querySelector('[data-menu-button]');
  const menu = document.querySelector('[data-menu]');
  const closeMenu = () => {
    menu?.classList.remove('is-open');
    menuButton?.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  menuButton?.addEventListener('click', () => {
    const isOpen = menu?.classList.toggle('is-open');
    menuButton.setAttribute('aria-expanded', String(Boolean(isOpen)));
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  menu?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });

  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach((element) => observer.observe(element));
  } else {
    reveals.forEach((element) => element.classList.add('is-visible'));
  }

  document.querySelectorAll('[data-year]').forEach((el) => {
    el.textContent = new Date().getFullYear();
  });

  // Graceful visual fallback when an external stock reference is unavailable.
  document.querySelectorAll('.application-card img').forEach((img) => {
    img.addEventListener('error', () => {
      img.style.display = 'none';
      img.parentElement?.classList.add('image-fallback');
    });
  });
})();
