const sidenavInner = document.querySelector('.sidenav');
const { body } = document;

function toggleNav() {
  const burger = document.querySelector('.hamburger');
  sidenavInner.classList.toggle('show-sidenav');
  if (sidenavInner.classList.contains('show-sidenav')) {
    body.classList.add('freezePage');
    burger.style.backgroundImage =
      "url('https://res.cloudinary.com/dpra9vwkq/image/upload/v1598455792/burger-black.png')";
  } else {
    body.classList.remove('freezePage');
    burger.style.backgroundImage =
      "url('https://res.cloudinary.com/dpra9vwkq/image/upload/v1583333596/burger_white.png')";
  }
}

const nImg = document.getElementById('n-img');
const twentyOneImg = document.getElementById('21-img');

function toggleImg() {
  nImg.classList.toggle('show-letter-n');
  twentyOneImg.classList.toggle('show-letter-21');
}

export { toggleNav, toggleImg };
