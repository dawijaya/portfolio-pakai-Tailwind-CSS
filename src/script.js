// navbar fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector("#to-top");

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    toTop.classList.remove("flex");
    toTop.classList.add("hidden");
  }
};

// hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// klik hamburger diluar
window.addEventListener("click", function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});

// dark mode
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

darkToggle.addEventListener("click", function () {
  if (darkToggle.checked) {
    html.classList.add("dark");
  } else {
    html.classList.remove("dark");
  }
});

(function () {
  emailjs.init("YUnRCnFHwAmXooFs8");
})();

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    document.getElementById("name").value;
    document.getElementById("email").value;
    document.getElementById("message").value;

    emailjs
      .send("service_o670de7", "template_kmivnfq", {
        from_name: name,
        from_email: email,
        message: message,
      })
      .then(
        function (response) {
          console.log("SUCCESS", response.status, response.text);

          swal.fire({
            icon: "success",
            title: "success!",
            text: "Your message has been sent!",
            showConfirmButton: false,
            timer: 2000,
          });
          document.getElementById("contact-form").reset();
        },
        function (error) {
          console.log("FAILED", error);

          swal.fire({
            icon: "error",
            title: "error!",
            text: "Your message has not been sent!",
            showConfirmButton: true,
          });
        }
      );
  });
