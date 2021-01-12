// Your code goes here
// you could change colors, animate objects, remove objects, etc. Here are some event types you could try to use:
//   * `mouseover` -> turn the image sharper and make others opaque
//   * `wheel` -> when mouse wheels do something
//   * `load` -> trigger something on load
//   * `focus`
//   * `resize`
//   * `scroll` -> do something when scroll; maybe fix the nav
//   * `select` -> highlight text when part of a p is selected
//   * `dblclick` -> easter egg on a picture to double click
//   * `drag / drop`
//   * `copy` -> when a paragraph is copied
//   * `keydown` & `keyup` -> when someone holds down "`" turn background black
//   * `mouseenter` & `mouseleave` -> make something bold

// Selectors
const docBody        = document.querySelector('body'),
      heroBannerImg  = document.querySelector('.intro img'),
      pageTitle      = document.querySelector('.intro h2'),
      allH2s         = [...document.querySelectorAll('h2')],
      allH4s         = [...document.querySelectorAll('h4')],
      allParagraphs  = [...document.querySelectorAll('p')],
      buttons        = [...document.querySelectorAll('.btn')],
      destinationImg = document.querySelector('.content-destination img'),
      footer         = document.querySelector('.footer p');

// Helper Functions
function borderRadius(e) {
  if (e.target.style.borderRadius === "20px") {
    e.target.style.borderRadius = null;  
  } else {
    e.target.style.borderRadius = "20px";
  }
}

function backquote(e) {
  if (e.key === "`" && docBody.style.backgroundColor === "") {
    docBody.style.backgroundColor = "black";
    allParagraphs.map(p => p.style.color = "white");
    allH2s.map(h => h.style.color = "white");
    allH4s.map(h => h.style.color = "white");
    footer.style.color = "black";
  } else {
    docBody.style.backgroundColor = null;
    allParagraphs.map(p => p.style.color = "black");
    allH2s.map(h => h.style.color = "black");
    allH4s.map(h => h.style.color = "black");
    footer.style.color = null;
  }
}

function makeBold(e) {
  e.target.style.fontStyle = "italic";
}

function removeBold(e) {
  e.target.style.fontStyle = null;
}

function copyAction(e) {
  const selection = document.getSelection();
  e.clipboardData.setData('text/plain', "Not allowed to copy our copy :)");
  e.preventDefault();
}

// Event Listeners
document.addEventListener('keydown', backquote);

heroBannerImg.addEventListener('dblclick', borderRadius);

allParagraphs.forEach(p => p.addEventListener('mouseenter', makeBold));
allParagraphs.forEach(p => p.addEventListener('mouseleave', removeBold));
allParagraphs.forEach(p => p.addEventListener('copy', copyAction));

// heroBannerImg.addEventListener('click', event => {
//   console.log(event);
// });