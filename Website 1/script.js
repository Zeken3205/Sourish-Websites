document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent the default action

      // Remove 'active' class from all links
      navLinks.forEach((link) => link.classList.remove("active"));

      // Add 'active' class to the clicked link
      this.classList.add("active");
    });
  });
});

function navigateToLogin() {
  window.location.href = "./login.html";
}
function navigateToSignup() {
  window.location.href = "./signup.html";
}
