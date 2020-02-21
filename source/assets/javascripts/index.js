// plugins import
import '@babel/polyfill';
import './plugins/intl_tel';
import 'mapbox-gl/dist/mapbox-gl.css';
import PhotoSwipe from 'photoswipe/dist/photoswipe';
import PhotoSwipeUI_Default from 'photoswipe/dist/photoswipe-ui-default';

// components JS files
import './components/contact';
import { toggleNav, toggleImg } from './components/mobile_nav';
import { handleFirstTab } from './components/keyboard_focus';
import { checkScroll } from './components/nav_scroll';
import { checkScrollToTop } from './components/back_to_top';

import { initMapbox } from './plugins/mapbox';

// outline for keyboard user on focus
window.addEventListener('keydown', handleFirstTab);

// Navbar visible on scroll + back top top btn
window.addEventListener('scroll', () => {
  checkScroll();
  checkScrollToTop();
});

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

// add margin to main for parallax footer
const footer = document.querySelector('.footer');
const main = document.querySelector('.main');

function mainMarginBottom() {
  const footerHeight = footer.clientHeight;
  main.style.marginBottom = `${footerHeight}px`;
}
// run on page load and then on window resize
mainMarginBottom();
window.addEventListener('resize', mainMarginBottom);

// Animation on Logo
const logoAnim = document.querySelector('.logo-wrapper');
document.addEventListener('DOMContentLoaded', () => {
  logoAnim.classList.add('zoomIn');
});

const pswpElement = document.querySelectorAll('.pswp')[0];

// build items array
const items = [
  {
    src: 'https://res.cloudinary.com/dpra9vwkq/image/upload/v1581967729/food1_fn5nw3.png',
    w: 600,
    h: 400,
  },
  {
    src: 'https://res.cloudinary.com/dpra9vwkq/image/upload/v1581967729/food6_mfbnjk.png',
    w: 1200,
    h: 900,
  },
  {
    src: 'https://res.cloudinary.com/dpra9vwkq/image/upload/v1581967729/food7_jtwwkt.png',
    w: 1200,
    h: 900,
  },
];

// define options (if needed)
const options = {
  // optionName: 'option value'
  // for example:
  index: 0, // start at first slide
};

// Initializes and opens PhotoSwipe
const gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
gallery.init();
