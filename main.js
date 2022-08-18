const color = [
  'linear-gradient(7deg, transparent, black)',
  'linear-gradient(7deg, blueviolet, purple)',
  'linear-gradient(7deg, cyan, gold)',
  'linear-gradient(7deg, hotpink, blue)',
  'linear-gradient(7deg, goldenrod, yellow)'
];

function keyDownHandler() {
  if (event.key === 'Enter') {
    const url = `https://impervious.domains/name/${event.target.value}${window.tld}/register/`;
    location.target = '_blanc';
    location.href = url;
  };
};

function updateHandler() {
  card.style.background = color[Math.floor(Math.random()*color.length)];
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