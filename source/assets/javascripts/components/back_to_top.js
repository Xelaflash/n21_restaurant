const backToTopBtn = document.querySelector('.back_to_top');
const anchor = document.querySelector('#about_us').offsetTop;
console.log(anchor);

function checkScrollToTop() {
  const scrollPosition = window.scrollY;
  if (scrollPosition > 400) {
    backToTopBtn.classList.add('show');
  } else {
    backToTopBtn.classList.remove('show');
  }
}

function scrollToTop() {
  window.scrollTo({ top: anchor, left: 0, behavior: 'smooth' });
}

backToTopBtn.addEventListener('click', scrollToTop);

export { checkScrollToTop };
