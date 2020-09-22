// var quadimages = document.querySelectorAll("#quad figure");
// for(i=0; i<quadimages.length; i++) {
//   quadimages[i].addEventListener('click', function(){ this.classList.toggle("expanded"); quad.classList.toggle("full") });
// }

const quadimages = document.querySelectorAll('#quad figure');

if (quadimages) {
  quadimages.forEach(quadimage => {
    quadimage.addEventListener('click', function() {
      this.classList.toggle('expanded');
      // quad.classList.toggle('full');
    });
  });
}
