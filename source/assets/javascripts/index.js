import '@babel/polyfill';

// components JS files
import { toggleNav } from './components/mobile_nav';

// Sidenav
const sidenavTrigger = document.getElementById('sidenav-trigger');
const sideNavLinks = document.querySelectorAll('.sidenav-link');

sidenavTrigger.addEventListener('click', toggleNav);
sideNavLinks.forEach(function(link) {
  link.addEventListener('click', toggleNav);
});

const nImg = document.getElementById('n-img');
const twentyOneImg = document.getElementById('21-img');
const burger2 = document.querySelector('.hamburger');

function toggleImg() {
  nImg.classList.toggle('show-letter-n');
  twentyOneImg.classList.toggle('show-letter-21');
}
burger2.addEventListener('click', toggleImg);
