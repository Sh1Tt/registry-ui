const options = window.options;

const card = document.body.querySelector(`#card`);
const input = document.body.querySelector(`#domainname`);
const showcase = document.body.querySelector(`[data-std="domainname"]`);

const chatLink = `https://hns.chat/#message:${options.chatname}`;

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
    const r = t.replace("{{tld}}",options.tld);
    element.innerText = r;
  });
  document.body.querySelector(`#chat`).href = chatLink;
};

function keydownHandler() {
  if (event.key === 'Enter') {
    const url = `https://impervious.domains/name/${event.target.value}${options.tld}/register/`;
    location.target = '_blanc';
    location.href = url;
  };
};

function setDomain(n) {
  showcase.innerText = n;
};

function updateHandler() {
  const domain = event.target.value + options.tld;
  setDomain(domain);
  randomizeColor();
};

function loadedHandler() {
  rewritePage();
};

document.addEventListener("DOMContentLoaded", 
  loadedHandler
, false);