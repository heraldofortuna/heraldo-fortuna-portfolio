// Scroll effect for header section:

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("header").style.borderBottom =
      "1px solid var(--color-dark)";
  } else {
    document.getElementById("header").style.borderBottom = "unset";
  }
}

// Scroll effect of Logo anchor:

window.scroll({
  top: 0,
  left: 0,
  behavior: "smooth",
});
