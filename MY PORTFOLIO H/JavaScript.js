// Dynamic greeting based on time of day
window.addEventListener("DOMContentLoaded", () => {
  const hour = new Date().getHours();
  let greeting;

  if (hour < 12) {
    greeting = "Good Morning ☀️";
  } else if (hour < 18) {
    greeting = "Good Afternoon 🌤️";
  } else {
    greeting = "Good Evening 🌙";
  }

  console.log(`%cWelcome to Eng. Abdullahi's Portfolio! ${greeting}`, "color: #007bff; font-size: 16px;");
});

// Scroll to top button
const scrollBtn = document.createElement("button");
scrollBtn.innerHTML = "↑";
scrollBtn.style.position = "fixed";
scrollBtn.style.bottom = "30px";
scrollBtn.style.right = "30px";
scrollBtn.style.padding = "10px 15px";
scrollBtn.style.border = "none";
scrollBtn.style.borderRadius = "50%";
scrollBtn.style.background = "#007bff";
scrollBtn.style.color = "white";
scrollBtn.style.cursor = "pointer";
scrollBtn.style.display = "none";
scrollBtn.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";
scrollBtn.setAttribute("id", "scrollToTop");

document.body.appendChild(scrollBtn);

window.onscroll = () => {
  if (document.documentElement.scrollTop > 100) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
};

scrollBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// Smooth scroll for nav and quick links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
// Mobile Menu Toggle
const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("show");
});

// Scroll to Top Button
const scrollBtn = document.getElementById("scrollToTop");

window.onscroll = () => {
  if (document.documentElement.scrollTop > 100) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
};

scrollBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// Developer Console Greeting
const hour = new Date().getHours();
const greet =
  hour < 12 ? "Good Morning ☀️" :
  hour < 18 ? "Good Afternoon 🌤️" :
  "Good Evening 🌙";

console.log(`%cWelcome to Eng. Abdullahi's Portfolio! ${greet}`, "color: #007bff; font-size: 16px;");
