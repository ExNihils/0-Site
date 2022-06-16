// Uniformisation des HTMLs
const oneHTML = document.querySelector(".oneHTML")
oneHTML.innerHTML = `
<nav class="navLecture">
<ul class="navLecture">
 <li><a  href="18 billions.html"><img class= "iconSlider" src="../Assets/First.png" alt="First" title="First"></a></li>
 <li><a  href="../Sommaire.html"><img class= "iconSlider" src="../Assets/Accueil.png"alt="Welcome" title="Welcome"></a></li>
 <li><a  id= "fullscreen" onclick="toggleFullScreen()"><img class= "iconSlider" onclick="" src="../Assets/Fullscreen.png"title="Fullscreen" alt="Fullscreen"></img></a></li>
 <li><a  href="18 billions.html"><img class= "iconSlider" src="../Assets/Last.png" alt="Last" title="Last"></a></li>
</ul>
</nav>
`
const twoHTML = document.querySelector(".twoHTML")
twoHTML.innerHTML = ``

const threeHTML = document.querySelector(".threeHTML")
threeHTML.innerHTML = ``

const fourHTML = document.querySelector(".fourHTML")
fourHTML.innerHTML = ``


// //Navbar de lecture:----------------------------------------------------------------------------------------------------------
const navLecture = document.querySelector(".navLecture")

window.addEventListener("mousemove", (e) => {
  if (e.clientY < window.innerHeight * (7 / 8)) {
    navLecture.style.bottom = "-15vh"
  } else {
    navLecture.style.bottom = "0vh"
  }
})


//Go to the last visited page:----------------------------------------------------------------------------------------------------------
function goToPreviousURL() {
  window.history.back();
  console.log("button");
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


