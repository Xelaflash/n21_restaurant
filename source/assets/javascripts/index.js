import '@babel/polyfill';
import './components/contact';

// plugins import
import './plugins/intl_tel';
import { initMapbox } from './plugins/mapbox';
import 'mapbox-gl/dist/mapbox-gl.css';
// components JS files
import { toggleNav, toggleImg } from './components/mobile_nav';
import { handleFirstTab } from './components/keyboard_focus';
import { checkScroll } from './components/nav_scroll';

// outline for keyboard user on focus
window.addEventListener('keydown', handleFirstTab);

// Navbar visible on scroll
window.addEventListener('scroll', checkScroll);

// Sidenav
const sidenavTriggers = document.querySelectorAll('.sidenav-trigger');
const sideNavLinks = document.querySelectorAll('.sidenav-link');

sidenavTriggers.forEach(function(trigger) {
  trigger.addEventListener('click', () => {
    toggleNav();
    toggleImg();
  });
});

sideNavLinks.forEach(function(link) {
  link.addEventListener('click', () => {
    toggleNav();
    toggleImg();
  });
});

// Mapbox
initMapbox();
