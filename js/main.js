var i = 0;
var j = 0;
var txt = 'My Name is Kyle Warford'; /* The text */
var txt2 = 'I am a Developer';
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("hero-name").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}


setTimeout(
function typeWriter2() {
    if (j < txt2.length) {
      document.getElementById("hero-desc").innerHTML += txt2.charAt(j);
      j++;
      setTimeout(typeWriter2, speed);
    }
  }, 1500);


function validateForm(inputText) {
    var mailformat = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/ ;
    let x = document.forms["contactForm"]["yourname"].value;
    if (x==null || x == "") {
      alert("Name field required");
      return false;
    }
    let y = document.forms["contactForm"]["youremail"].value;
    if (y==null || y == "") {
        alert("Email field required");
        return false;
    }
    let z = document.forms["contactForm"]["yourmessage"].value;
    if (z==null || z == "") {
        alert("Message field required");
        return false;
    }
    if(inputText.value.match(mailformat)) {
      document.contactForm.youremail.focus();
      alert("Form submitted");
      return true;
    } else {
      alert("You have entered an invalid email address!");
      document.contactForm.youremail.focus();
      return false;
    }
}





/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */

function opencloseNav() {
    if (document.getElementById("navbarid").style.display === "none") {
        document.getElementById("navbarid").style.display = "block";
        document.getElementById("main").style.marginLeft = "10%";
        document.getElementById("menu-but-id").style.left = "10vw";
    } else {
        document.getElementById("navbarid").style.display = "none";
        document.getElementById("main").style.marginLeft = "0";
        document.getElementById("menu-but-id").style.left = "0";
    }
  } 

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

$(document).on('click', 'a[href^="#"]', function (event) {
  event.preventDefault();

  $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
  }, 500);
});


window.onscroll = function() {portfolio1Slide(), portfolio2SlideDelay(), portfolio3SlideDelay(), portfolio4SlideDelay(), codingSlide(), codingSlide2(), scionSlide1(), scionSlide2(), scionSlide3(), scionSlide4(), scionSlide5(), scionSlide6(), scionSlide7(), scionSlide8()};

function portfolio1Slide() {
    if (document.documentElement.scrollTop > 750) {
      document.getElementById("projectid1").className = "slideUp";
      document.getElementById("projectid1").style = "visibility: visible";
    }
}

function portfolio2Slide() {
    if (document.documentElement.scrollTop > 750) {
      document.getElementById("projectid2").className = "slideUp";
      document.getElementById("projectid2").style = "visibility: visible";
    }
}

function portfolio3Slide() {
  if (document.documentElement.scrollTop > 750) {
    document.getElementById("projectid3").className = "slideUp";
    document.getElementById("projectid3").style = "visibility: visible";
  }
}

function portfolio4Slide() {
  if (document.documentElement.scrollTop > 750) {
    document.getElementById("projectid4").className = "slideUp";
    document.getElementById("projectid4").style = "visibility: visible";
  }
}

function portfolio2SlideDelay() {setTimeout(
  function (){
    portfolio2Slide();      
  }, 250)
};

function portfolio3SlideDelay() {setTimeout(
  function (){
    portfolio3Slide();      
  }, 500)
};

function portfolio4SlideDelay() {setTimeout(
  function (){
    portfolio4Slide();      
  }, 750)
};

function codingSlide() {
    if (document.documentElement.scrollTop > 1200) {
      document.getElementById("p-example-1").className = "slideLeft";
      document.getElementById("p-example-1").style = "visibility: visible";
    }
}

function codingSlide2() {
  if (document.documentElement.scrollTop > 1750) {
    document.getElementById("j-example-1").className = "slideRight";
    document.getElementById("j-example-1").style = "visibility: visible";
  }
}

function scionSlide1() {
  if (document.documentElement.scrollTop > 2600) {
    document.getElementById("scion-1").className = "slideUp";
    document.getElementById("scion-1").style = "visibility: visible";
  }
}

function scionSlide2() {
  if (document.documentElement.scrollTop > 2650) {
    document.getElementById("scion-2").className = "slideUp";
    document.getElementById("scion-2").style = "visibility: visible";
  }
}

function scionSlide3() {
  if (document.documentElement.scrollTop > 2700) {
    document.getElementById("scion-3").className = "slideUp";
    document.getElementById("scion-3").style = "visibility: visible";
  }
}

function scionSlide4() {
  if (document.documentElement.scrollTop > 2800) {
    document.getElementById("scion-4").className = "slideUp";
    document.getElementById("scion-4").style = "visibility: visible";
  }
}

function scionSlide5() {
  if (document.documentElement.scrollTop > 2900) {
    document.getElementById("scion-5").className = "slideUp";
    document.getElementById("scion-5").style = "visibility: visible";
  }
}

function scionSlide6() {
  if (document.documentElement.scrollTop > 2950) {
    document.getElementById("scion-6").className = "slideUp";
    document.getElementById("scion-6").style = "visibility: visible";
  }
}

function scionSlide7() {
  if (document.documentElement.scrollTop > 3000) {
    document.getElementById("scion-7").className = "slideUp";
    document.getElementById("scion-7").style = "visibility: visible";
  }
}

function scionSlide8() {
  if (document.documentElement.scrollTop > 3050) {
    document.getElementById("scion-8").className = "slideUp";
    document.getElementById("scion-8").style = "visibility: visible";
  }
}