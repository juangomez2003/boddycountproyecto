// Redirección de botones
document.getElementById("loginBtn").addEventListener("click", () => {
  window.location.href = "dashboard.html";
});

document.getElementById("comenzarBtn").addEventListener("click", () => {
  window.location.href = "dashboard.html";
});

// Cambiar color del navbar al hacer scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
