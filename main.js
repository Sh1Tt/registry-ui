const options = {
  color: [
    'linear-gradient(7deg, transparent, black)',
    'linear-gradient(7deg, blueviolet, purple)',
    'linear-gradient(7deg, cyan, gold)',
    'linear-gradient(7deg, rgb(100,80,146), rgb(200,160,255), rgba(100,27,245) 52%)',
    'linear-gradient(205deg, goldenrod 2%, rgb(255,52,255), rgb(55,152,255))'
  ],
  chatname: `sh1tt`
};

let name;

const card = document.body.querySelector(`#card`);
const input = document.body.querySelector(`#domainname`);

const showcase = document.body.querySelector(`[data-std="domainname"]`);

const chatlink = `https://hns.chat/#message:${options.chatname}`;

function randomizeColor() {
  const randomGradient = options.color[Math.floor(Math.random()*options.color.length)];
  card.classList.add("fader");
  card.style.background = randomGradient;
  setTimeout(() => {
    card.classList.remove("fader");
  }, 400);
};

function rewritePage() {
  const allElements = Array.from(document.querySelectorAll(`[data-tld]`));
  allElements.forEach(element => {
    const t = element.innerText;
    const r = t.replace("{{tld}}",window.tld);
    element.innerText = r;
  });
  document.body.querySelector(`#chat`).href = chatlink;
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
  name = event.target.value + window.tld;
  setDomain(name);
  randomizeColor();
};

function loadedHandler() {
  rewritePage();
};

document.addEventListener("DOMContentLoaded", 
  loadedHandler
, false);