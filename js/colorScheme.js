const colorSchemeElement = document.querySelector("[data-color-scheme]");
const colorSchemeButton = document.querySelector("[data-color-scheme-btn]");

const colorSchemeLocalStorage = localStorage.getItem("color-scheme");

// Check system color preference from the browser's user
const colorSchemeSystem = () =>
  window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";

function changeIconButton() {
  const currentScheme = colorSchemeElement.dataset.colorScheme;
  const isLightMode = currentScheme === "light";
  const iconClassToRemove = isLightMode ? "fa-sun" : "fa-moon";
  const iconClassToAdd = isLightMode ? "fa-moon" : "fa-sun";

  colorSchemeButton.classList.remove(iconClassToRemove);
  colorSchemeButton.classList.add(iconClassToAdd);
}

function setColorScheme(color) {
  colorSchemeElement.dataset.colorScheme = color;
  localStorage.setItem("color-scheme", color);
  changeIconButton();
}

function colorSchemeToggle() {
  colorSchemeElement.dataset.colorScheme === "light"
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
