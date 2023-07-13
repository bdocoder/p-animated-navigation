const nav = document.querySelector(".nav");
const toggle = nav.querySelector(".nav-toggle");
toggle.onclick = () => {
  nav.classList.toggle("hidden");
  if (nav.classList.contains("paused")) nav.classList.remove("paused");
};
