// Ano dinâmico
document.getElementById('year').textContent = new Date().getFullYear();

// Tema (dark/light) com persistência
(function() {
  const KEY = 'theme';
  const btn = document.getElementById('themeToggle');
  const apply = t => document.body.classList.toggle('theme-light', t === 'light');
  const current = localStorage.getItem(KEY) || 'dark';
  apply(current);
  btn.addEventListener('click', () => {
    const next = document.body.classList.contains('theme-light') ? 'dark' : 'light';
    apply(next); localStorage.setItem(KEY, next);
  });
})();

// Reveal on scroll (leve e sem libs)
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  })
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));