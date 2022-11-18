const btnScrollToTop = document.querySelector(".btnScrollToTop");

window.onscroll = function () {
  changeVisibility();
};

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function changeVisibility() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btnScrollToTop.style.display = "block";
  } else {
    btnScrollToTop.style.display = "none";
  }
}

function changeToBR() {
  window.location = "ptBR-index.html";
}

function changeToUS() {
  window.location = "index.html";
}