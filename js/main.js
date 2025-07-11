// Smooth Scrolling for Nav Links
document.querySelectorAll('.site-nav a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const target = document.getElementById(targetId);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60, // Adjust this offset as needed
        behavior: 'smooth'
      });
    }
  });
});

// Theme Toggle with Icon Switching
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

const savedTheme = localStorage.getItem('theme');
const isLight = savedTheme === 'light';
if (isLight) {
  document.body.classList.add('light-theme');
}
themeIcon.textContent = isLight ? '🌙' : '☀️';

themeToggle.addEventListener('click', () => {
  const isLightNow = document.body.classList.toggle('light-theme');
  localStorage.setItem('theme', isLightNow ? 'light' : 'dark');
  themeIcon.textContent = isLightNow ? '🌙' : '☀️';
});

// Scroll Progress Bar
const progressBar = document.querySelector('.scroll-progress-bar');
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / pageHeight) * 100;
  progressBar.style.width = `${scrollPercent}%`;
});

// Section Reveal on Scroll
const sections = document.querySelectorAll('.reveal-section');
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.2
});

sections.forEach(section => {
  observer.observe(section);
});
