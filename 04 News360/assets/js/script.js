const menubar = document.getElementById("menuToggle");
const mobileNavbar = document.querySelector(".mobile-nav-section");
const bar = menubar.querySelector("i");

/* MOBILE MENU */
menubar.addEventListener("click", () => {
  mobileNavbar.classList.toggle("mobile-navbar-active");
  bar.classList.toggle("fa-bars");
  bar.classList.toggle("fa-xmark");
});

/* DARK MODE */
const themeToggle = document.getElementById("themeToggle");
const themeIcon = themeToggle.querySelector("i");

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-theme");
  themeIcon.classList.replace("fa-moon", "fa-sun");
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");

  if (document.body.classList.contains("dark-theme")) {
    themeIcon.classList.replace("fa-moon", "fa-sun");
    localStorage.setItem("theme", "dark");
  } else {
    themeIcon.classList.replace("fa-sun", "fa-moon");
    localStorage.setItem("theme", "light");
  }
});

/* SCROLL ANIMATION */
const revealEls = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  { threshold: 0.15 }
);

revealEls.forEach(el => observer.observe(el));

//
