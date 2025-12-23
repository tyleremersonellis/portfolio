function scrollWithOffset(id) {
  const element = document.getElementById(id);
  const navbarHeight = document.querySelector('.navbar').offsetHeight;

  // Scroll position exactly below the navbar
  const y = element.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

  window.scrollTo({ top: y, behavior: 'smooth' });
}

if (document.getElementById('my-work-link')) {
  document.getElementById('my-work-link').addEventListener('click', () => {
    scrollWithOffset('my-work-section');
  });
}

if (document.getElementById('about-section-link')) {
  document.getElementById('about-section-link').addEventListener('click', () => {
    scrollWithOffset('about-section');
  });
}
