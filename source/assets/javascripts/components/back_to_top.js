function checkScrollToTop() {
  const backToTopBtn = document.querySelector('.back_to_top');
  const scrollPosition = window.scrollY;
  if (scrollPosition > 400) {
    backToTopBtn.classList.add('show');
  } else {
    backToTopBtn.classList.remove('show');
  }
}

export { checkScrollToTop };
