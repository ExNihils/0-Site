//Diaporamas
let slideIndex = 3;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}
function autoSlide() {
  slideIndex++
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("custom-slider");
  let dots = document.getElementsByClassName("dot");
  let prevP = document.querySelector(".prevP")
  let nextP = document.querySelector(".nextP")

  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";


  setTimeout(autoSlide, 2000);
}

















// //Icons zoom:
const icons = document.querySelectorAll(".icons")
icons.forEach((icons) => {
  icons.addEventListener("mouseenter", function () {
    icons.style.transform = "scale(1.1, 1.1)";
    icons.style.zIndex = "1";
  })
  icons.addEventListener("mouseleave", function () {
    icons.style.transform = "scale(1, 1)";
    icons.style.zIndex = "1";

  });
  icons.addEventListener("mousedown", function () {
    icons.style.transform = "scale(2, 2)";
    icons.style.zIndex = "2";
  });
  icons.addEventListener("mouseup", function () {
    icons.style.transform = "scale(1, 1)";
    icons.style.zIndex = "1";
  });
});


//Nav bar scroll:----------------------------------------------------------------------------------------------------------
const nav1 = document.getElementById("nav1")

window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    nav1.style.top = "0vh"
  } else {
    nav1.style.top = "-15vh"
  }
})
const nav2 = document.getElementById("nav2")

window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    nav2.style.bottom = "-15vh"
  } else {
    nav2.style.bottom = "-0.5vh"
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

