function keyDownHandler() {
  if (event.key === 'Enter') {
    const url = `https://impervious.domains/name/${event.target.value}${window.tld}/register/`;
    location.href = url;
  };
};

function loadedHandler() {
  const allElements = Array.from(document.querySelectorAll(`[data-tld="true"]`));
  allElements.forEach(element => {
    const t = element.innerText;
    const r = t.replace("{{tld}}",window.tld);
    element.innerText = r;
  });
};

(() => {
  document.addEventListener("DOMContentLoaded", loadedHandler, false);
})();