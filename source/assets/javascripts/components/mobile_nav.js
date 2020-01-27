const sidenavInner = document.querySelector('.sidenav');
const { body } = document;

function toggleNav() {
  sidenavInner.classList.toggle('show-sidenav');
  if (sidenavInner.classList.contains('show-sidenav')) {
    body.classList.add('freezePage');
  } else {
    body.classList.remove('freezePage');
  }
}

const nImg = document.getElementById('n-img');
const twentyOneImg = document.getElementById('21-img');

function toggleImg() {
  nImg.classList.toggle('show-letter-n');
  twentyOneImg.classList.toggle('show-letter-21');
}

export { toggleNav, toggleImg };
