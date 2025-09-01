// script.js
const toggleBtn = document.getElementById("toggleTheme");
const themeIcon = document.getElementById("themeIcon");

// Load saved theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  document.documentElement.classList.add("dark");
  themeIcon.setAttribute("data-lucide", "sun");
} else {
  document.documentElement.classList.remove("dark");
  themeIcon.setAttribute("data-lucide", "moon");
}

lucide.createIcons();

// Theme toggle handler
function toggleTheme() {
  const html = document.documentElement;
  const isDark = html.classList.contains("dark");

  if (isDark) {
    html.classList.remove("dark");
    themeIcon.setAttribute("data-lucide", "moon");
    localStorage.setItem("theme", "light");
  } else {
    html.classList.add("dark");
    themeIcon.setAttribute("data-lucide", "sun");
    localStorage.setItem("theme", "dark");
  }
  lucide.createIcons();
}

// Attach event
toggleBtn.addEventListener("click", toggleTheme);

// Initialize Bootstrap tooltip
const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (el) => new bootstrap.Tooltip(el)
);
