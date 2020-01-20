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
