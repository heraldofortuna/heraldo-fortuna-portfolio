// Scroll effect for header section;

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

// Get the form by its id:
const form = document.getElementById("form");

const formEvent = form.addEventListener("submit", (event) => {
  event.preventDefault();
  let mail = new FormData(form);
  sendMail(mail);
});

const sendMail = (mail) => {
  fetch("http://www.heraldofortuna.com/send", {
    method: "post",
    body: mail,
  }).then((response) => {
    return response.json();
  });
};
