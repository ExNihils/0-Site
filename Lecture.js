// // Uniformisation des HTMLs
const oneHTML = document.querySelector(".oneHTML")
oneHTML.innerHTML = `
<nav class="navLecture">
<ul>
  <li>
    <a href="../../1 Reveil/en/18 billions.html"
      ><img
        class="iconSlider"
        src="../../Assets/First.png"
        alt="First"
        title="First"
    /></a>
  </li>
  <li>
    <div>
      <img
        class="iconSlider previousPage"
        src="../../Assets/Previous.png"
        alt="Previous"
        title="Previous"
      />
    </div>
  </li>
  <li>
    <a href="../../Sommaire.html"
      ><img
        class="iconSlider"
        src="../../Assets/Accueil.png"
        alt="Welcome"
        title="Welcome"
    /></a>
  </li>
  <li>
  <div onclick="zoomIn()">
    <img
      class="iconSlider zoomAvant"
      src="../../Assets/Zoom.png"
      alt="Zoom"
      title="Zoom"
    />
  </div>
</li>
<li>
<div onclick="zoomBack()">
  <img
    class="iconSlider zoomOut"
    src="../../Assets/Zoom.png"
    alt="Zoom"
    title="Zoom"
  />
</div>
</li>
  <!-- <li><a  id= "fullscreen" onclick="toggleFullScreen()"><img class= "iconSlider" onclick="" src="Assets/Fullscreen.png"title="Fullscreen" alt="Fullscreen"></img></a></li> -->
  <li>
    <div>
      <img
        class="iconSlider nextPage"
        src="../../Assets/Next.png"
        alt="Next"
        title="Next"
      />
    </div>
  </li>
  <li>
    <a href="../../5 l'Empereur/fr/Oeuvre.html"
      ><img
        class="iconSlider"
        src="../../Assets/Last.png"
        alt="Last"
        title="Last"
    /></a>
  </li>
</ul>
</nav>
`
const twoHTML = document.querySelector(".twoHTML")
twoHTML.innerHTML = ``

const threeHTML = document.querySelector(".threeHTML")
threeHTML.innerHTML = ``

const fourHTML = document.querySelector(".fourHTML")
fourHTML.innerHTML = ``

// Poubelle
const fiveHTML = document.querySelector(".fiveHTML")
fiveHTML.innerHTML = `<div style="display: none;">
<div class="picture paysage Spicture Spaysage colonne narration zoomAvant zoomOut bin prevD nextD dot custom-slider"></div/
</div/
`
// 

// Navbar de lecture:----------------------------------------------------------------------------------------------------------
const navLecture = document.querySelector(".navLecture")

window.addEventListener("mousemove", (e) => {
  if (e.clientY < window.innerHeight * (7 / 8)) {
    navLecture.style.bottom = "-12vh"
  } else {
    navLecture.style.bottom = "0vh"
  }
})

// const navLecture = document.querySelector(".navLecture");
// const whenMouseHasMoved = 'mouse-moved';
// const whenMouseHasNotMoved = 'mouse-not-moved';
// const mouseMovedTimeout = 100; // in ms, so 1s
// let timer;

// const markAsStaticMouse = function markAsStaticMouse() {
//   navLecture.classList.remove(whenMouseHasMoved);
//   navLecture.classList.add(whenMouseHasNotMoved);
// }
// const markAsMovingMouse = function markAsMovingMouse() {
//   navLecture.classList.add(whenMouseHasMoved)
//   navLecture.classList.remove(whenMouseHasNotMoved)
// }

// window.addEventListener('mousemove', () => {
//   markAsMovingMouse;
//   setTimeout(function () {
//     console.log("fonction qui rend invisible");
//     function markAsStaticMouse() {
//       navLecture.classList.remove(whenMouseHasMoved);
//       navLecture.classList.add(whenMouseHasNotMoved);
//     }
//   }, 1000);
//   clearTimeout(timer);

//   console.log("Fonction rendant visible");
//   timer = setTimeout(timer, markAsStaticMouse);

// })







// Next et Previous de la Navbar:----------------------------------------------------------------------------------------------------------


let nextPage = document.querySelector('.nextPage');
let pageSuivante = document.querySelector('.next');
// let pageSuivante = document.getElementsByTagName('body')

let clickEventNext = new MouseEvent("click", {
  bubbles: true,
  cancelable: true,
  clientX: -10,
  clientY: -10,
});

nextPage.addEventListener('click', function () {
  pageSuivante.dispatchEvent(clickEventNext);
});






let previousPage = document.querySelector('.previousPage');
let pagePrecedente = document.querySelector('.previous');

let clickEventPrevious = new MouseEvent("click", {
  bubbles: true,
  cancelable: true,
  clientX: 10,
  clientY: 10,
});

previousPage.addEventListener('click', function () {
  pagePrecedente.dispatchEvent(clickEventPrevious);
});


// // Flèches pour next et previous:


// window.addEventListener("keydown", function (event) {
//   switch (event.key) {
//     case "ArrowDown":
//       // Faire quelque chose pour la touche "flèche vers le bas" pressée.
//       break;

// });
// pagePrecedente.dispatchEvent(clickEventPrevious);











//Go to the last visited page:----------------------------------------------------------------------------------------------------------
function goToPreviousURL() {
  window.history.back();
  console.log("last visited");
}


// Toggle Fullscreen:----------------------------------------------------------------------------------------------------------
function toggleFullScreen() {
  if ((document.fullScreenElement && document.fullScreenElement !== null) ||
    (!document.mozFullScreen && !document.webkitIsFullScreen)) {
    if (document.documentElement.requestFullScreen) {
      document.documentElement.requestFullScreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullScreen) {
      document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
    }
  } else {
    if (document.cancelFullScreen) {
      document.cancelFullScreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitCancelFullScreen) {
      document.webkitCancelFullScreen();
    }
  }
}



// // Language switcher:----------------------------------------------------------------------------------------------------------
const english = document.querySelectorAll(".english")
const french = document.querySelectorAll(".french")

function changeFr() {
  english.forEach(function (english) {
    english.classList.add("hidden");
    english.classList.remove("visible");
  });
  french.forEach(function (french) {
    french.classList.remove("hidden");
    french.classList.add("visible");
  })
}

function changeEn() {
  english.forEach(function (english) {
    english.classList.add("visible");
    english.classList.remove("hidden");
  });
  french.forEach(function (french) {
    french.classList.remove("visible");
    french.classList.add("hidden");
  })
}



// Audio avec appui sur une touche.
const ring = (key) => {
  const audio = new Audio();
  audio.src = key + ".mp3"
  audio.play();
}

// KeyPress Event
const keyContainer = document.querySelector(".keypress")
const key = document.getElementById("key")
document.addEventListener("keypress", (donnee) => {
  key.textContent = donnee.key
  ring(donnee.key);
})




//Diaporamas
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("custom-slider");
  let dots = document.getElementsByClassName("dot");
  let prevD = document.querySelector(".prevD")
  let nextD = document.querySelector(".nextD")
  if (n == slides.length - 1) { nextD.style.height = "0vh" }
  if (n < slides.length - 1) { nextD.style.height = "100vh" }
  if (n > 1) { prevD.style.height = "100vh" }
  if (n == 1) { prevD.style.height = "0vh" }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}






// Navbar Zoom
let zoomAvant = document.querySelector(".zoomAvant")
let zoomOut = document.querySelector(".zoomOut")
let picture = document.querySelector(".picture")
let paysage = document.querySelector(".paysage")
let Spicture = document.querySelector(".Spicture")
let Spaysage = document.querySelector(".Spaysage")
let colonne = document.querySelector(".colonne")
let bin = document.querySelector(".bin")
let narration = document.querySelectorAll(".narration")

function zoomIn() {
  bin.classList.remove("prevD");
  bin.classList.remove("nextD");
  bin.classList.remove("dot");
  bin.classList.remove("custom-slider");
  bin.classList.remove("active");

  narration.forEach(function (narration) {
    narration.style.display = "none";
  });


  picture.style.position = "absolute";
  picture.style.object_fit = "unset";
  picture.style.height = "unset";
  picture.style.width = "unset";
  picture.style.top = "unset";
  picture.style.left = "unset";
  picture.style.transform = "unset";

  paysage.style.position = "absolute";
  paysage.style.object_fit = "unset";
  paysage.style.height = "unset";
  paysage.style.width = "unset";
  paysage.style.top = "unset";
  paysage.style.left = "unset";
  paysage.style.transform = "unset";

  Spaysage.style.position = "absolute";
  Spaysage.style.object_fit = "unset";
  Spaysage.style.height = "unset";
  Spaysage.style.width = "unset";
  Spaysage.style.top = "unset";
  Spaysage.style.left = "unset";
  Spaysage.style.transform = "unset";

  Spicture.style.position = "absolute";
  Spicture.style.object_fit = "unset";
  Spicture.style.height = "unset";
  Spicture.style.width = "unset";
  Spicture.style.top = "unset";
  Spicture.style.left = "unset";
  Spicture.style.transform = "unset";

  colonne.style.margin = "unset";
  colonne.style.display = "unset";
  colonne.style.width = "unset";


  zoomAvant.style.display = "none"
  zoomOut.style.display = "flex"
}

function zoomBack() {
  bin.classList.add("prevD");
  bin.classList.add("nextD");
  bin.classList.add("dot");
  bin.classList.add("custom-slider");

  narration.forEach(function (narration) {
    narration.style.display = "block";
  });

  picture.style.position = "fixed";
  picture.style.object_fit = "contain";
  picture.style.height = "100%";
  picture.style.width = "100%";
  picture.style.top = "50%";
  picture.style.left = "50%";
  picture.style.transform = "translate(-50%, -50%)";

  paysage.style.position = "fixed";
  paysage.style.object_fit = "contain";
  paysage.style.height = "100%";
  paysage.style.width = "100%";
  paysage.style.top = "50%";
  paysage.style.left = "50%";
  paysage.style.transform = "translate(-50%, -50%)";

  Spaysage.style.position = "fixed";
  Spaysage.style.object_fit = "contain";
  Spaysage.style.height = "80%";
  Spaysage.style.width = "80%";
  Spaysage.style.top = "50%";
  Spaysage.style.left = "50%";
  Spaysage.style.transform = "translate(-50%, -50%)";

  Spicture.style.position = "fixed";
  Spicture.style.object_fit = "contain";
  Spicture.style.height = "80%";
  Spicture.style.width = "80%";
  Spicture.style.top = "50%";
  Spicture.style.left = "50%";
  Spicture.style.transform = "translate(-50%, -50%)";

  colonne.style.margin = "auto";
  colonne.style.display = "block";
  colonne.style.width = "100%";

  zoomAvant.style.display = "flex"
  zoomOut.style.display = "none"
}
