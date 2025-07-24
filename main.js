// Menue
document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".mobile-menu-icon");
  const darkModeToggle = document.querySelector(".dark-mode-toggle");
  const navMenu = document.querySelector(".nav-menu");

  menuIcon.addEventListener("click", function () {
    navMenu.classList.toggle("active");

    if (navMenu.classList.contains("active")) {
      menuIcon.classList.replace("fa-bars", "fa-times");
    } else {
      menuIcon.classList.replace("fa-times", "fa-bars");
    }
  });

//Dark Mode
darkModeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      darkModeToggle.classList.replace("fa-moon", "fa-sun");
      localStorage.setItem("darkMode", "enabled");
    } else {
      darkModeToggle.classList.replace("fa-sun", "fa-moon");
      localStorage.setItem("darkMode", "disabled");
    }
  });

  if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
    darkModeToggle.classList.replace("fa-moon", "fa-sun");
  }

  document.querySelectorAll(".nav-menu a").forEach((link) => {
    link.addEventListener("click", function () {
      navMenu.classList.remove("active");
      menuIcon.classList.replace("fa-times", "fa-bars");
    });
  });
});
