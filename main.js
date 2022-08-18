window.options = {
  color: [
    'linear-gradient(7deg, transparent, black)',
    'linear-gradient(7deg, blueviolet, purple)',
    'linear-gradient(7deg, cyan, gold)',
    'linear-gradient(7deg, rgb(100,80,146), rgb(200,160,255), rgba(100,27,245) 52%)',
    'linear-gradient(205deg, goldenrod 2%, rgb(255,52,255), rgb(55,152,255))'
  ]
};

const settings = window.options;

function randomizeColor() {
  const randomGradient = settings.color[Math.floor(Math.random()*settings.color.length)];
  card.style.background = randomGradient;
};

function setTLD() {
  const allElements = Array.from(document.querySelectorAll(`[data-tld]`));
  allElements.forEach(element => {
    const t = element.innerText;
    const r = t.replace("{{tld}}",window.tld);
    element.innerText = r;
  });
};

function keyDownHandler() {
  if (event.key === 'Enter') {
    const url = `https://impervious.domains/name/${event.target.value}${window.tld}/register/`;
    location.target = '_blanc';
    location.href = url;
  };
};

function setDomain(n) {
  showcase.innerText = n;
};

function updateHandler() {
  name = input.value;
  setDomain(name);
  randomizeColor();
}

function loadedHandler() {
  const card = document.body.querySelector(`#card`);
  const input = document.body.querySelector(`#domainname`);
  const showcase = document.body.querySelector(`[data-std="domainname"]`);
  setTLD();
};

(() => {
  document.addEventListener("DOMContentLoaded", loadedHandler, false);
})();