// Scroll reveal
const elements = document.querySelectorAll('[data-animate]');

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

elements.forEach(el => observer.observe(el));

// Scroll progress
const progressBar = document.querySelector('.progress-bar');

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const height = document.documentElement.scrollHeight - window.innerHeight;
  const progress = (scrollTop / height) * 100;
  progressBar.style.width = progress + '%';
});

// Cursor glow
const glow = document.querySelector('.cursor-glow');

document.addEventListener('mousemove', (e) => {
  glow.style.left = e.clientX + 'px';
  glow.style.top = e.clientY + 'px';
});
