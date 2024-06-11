const colorScheme = document.querySelector("[data-color-scheme]");
const colorSchemeButton = document.querySelector("[data-color-scheme-btn]");

const colorSchemeLocalStorage = localStorage.getItem("color-scheme");

// Check system color preference from the browser's user
const colorSchemeSystem = () =>
  window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";

function setColorScheme(color) {
  colorScheme.dataset.colorScheme = color;
  localStorage.setItem("color-scheme", color);
}

function colorSchemeToggle() {
  colorScheme.dataset.colorScheme === "light"
    ? setColorScheme("dark")
    : setColorScheme("light");
}

window.addEventListener("load", () => {
  // Check if the user already have a preference saved in localStorage
  if (colorSchemeLocalStorage !== null) {
    // Set color scheme based in localStorage preferences
    setColorScheme(colorSchemeLocalStorage);
    return;
  }

  // Set color scheme based in system preferences
  setColorScheme(colorSchemeSystem());
});

colorSchemeButton.addEventListener("click", colorSchemeToggle);
