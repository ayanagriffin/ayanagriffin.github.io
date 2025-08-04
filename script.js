// === SCROLL FADE-IN EFFECT ===
const faders = document.querySelectorAll('.fade-in');

const appearOptions = { threshold: 0.2, rootMargin: "0px 0px -50px 0px" };
const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('appear');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => { appearOnScroll.observe(fader); });

const toggleBtn = document.getElementById('toggle-btn');
const aboutText = document.getElementById('about-text');

toggleBtn.addEventListener('click', () => {
  aboutText.classList.toggle('expanded');
  toggleBtn.textContent = aboutText.classList.contains('expanded') ? 'Read Less' : 'Read More';
});


  const navbar = document.getElementById('navbar');
  let lastScrollY = window.scrollY;

  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    const landingHeight = document.querySelector('.landing').offsetHeight;

    // Always show navbar on the landing section
    if (currentScrollY < landingHeight) {
      navbar.classList.remove('hide');
      return;
    }

    // Hide on scroll down, show on scroll up
    if (currentScrollY > lastScrollY) {
      navbar.classList.add('hide');   // scrolling down
    } else {
      navbar.classList.remove('hide'); // scrolling up
    }

    lastScrollY = currentScrollY;
  });

