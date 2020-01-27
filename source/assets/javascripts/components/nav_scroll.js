function checkScroll() {
  const navbar = document.querySelector('#navbar');
  console.log(navbar);
  const startY = navbar.offsetHeight * 4;
  console.log(startY);
  const scrollPosition = window.scrollY;
  console.log(scrollPosition);
  if (scrollPosition > startY) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}

export { checkScroll };
