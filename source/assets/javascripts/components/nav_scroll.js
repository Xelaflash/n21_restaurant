function checkScroll() {
  const navbar = document.querySelector('#navbar');
  const startY = navbar.offsetHeight * 3;
  const scrollPosition = window.scrollY;
  if (scrollPosition > startY) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}

export { checkScroll };
