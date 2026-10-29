const root = document.documentElement;
const themeBtn = document.getElementById('theme-btn');
const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

// Dark / light rejim (boshlang'ich qiymat index.html <head> da o'rnatiladi)
themeBtn.addEventListener('click', () => {
  const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
  root.dataset.theme = next;
  try { localStorage.setItem('theme', next); } catch (e) {}
});

// Telefon menyusi
menuBtn.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', open);
});

menu.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    menu.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
  }
});

document.getElementById('year').textContent = new Date().getFullYear();
