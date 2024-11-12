topPage = document.getElementById("topPage");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 1850 || document.documentElement.scrollTop > 1850) {
    topPage.style.display = "block";
  } else {
    topPage.style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0;
}
