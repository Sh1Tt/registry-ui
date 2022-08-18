const color = [
  'darkgrey',
  'blueviolet',
  'cyan',
  'hotpink',
  'goldenrod'
];

function keyDownHandler() {
  if (event.key === 'Enter') {
    const url = `https://impervious.domains/name/${event.target.value}${window.tld}/register/`;
    location.target = '_blanc';
    location.href = url;
  };
};

function updateHandler() {
  card.style.background = color[Math.floor(Math.random()*5)]
}

function loadedHandler() {
  const card = document.body.querySelector(`#card`);

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