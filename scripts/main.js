const { tld, color, nft, support } = options = window.settings;

const card = document.body.querySelector(`#card`);
const input = document.body.querySelector(`#domainname`);
const showcase = document.body.querySelector(`[data-std="domainname"]`);

function randomizeColor() {
  const randomGradient = options.color[Math.floor(Math.random()*options.color.length)];
  card.classList.add("fader");
  card.style.background = randomGradient;
  setTimeout(() => {
    card.classList.remove("fader");
  }, 400);
};

function setDomain(n) {
  showcase.innerText = n;
};

function updateHandler() {
  const domain = event.target.value + tld;
  setDomain(domain);
  randomizeColor();
};

async function fetchExchangeData() {
  const options = {
    method: "GET",
    api: {
      host: "https://api.coingecko.com",
      endpoint: {
        eth: "api/v3/simple/price?ids=ethereum&vs_currencies=usd"
      }
    }
  };
  
  const xhr = new XMLHttpRequest();

  xhr.onload = function() {
    alert(`Loaded: ${xhr.status} ${xhr.response}`);

  };
  
  xhr.onerror = function() { // only triggers if the request couldn't be made at all
    alert(`Network Error`);
  };
  
  xhr.onprogress = function(event) { // triggers periodically
    // event.loaded - how many bytes downloaded
    // event.lengthComputable = true if the server sent Content-Length header
    // event.total - total number of bytes (if lengthComputable)
    alert(`Received ${event.loaded} of ${event.total}`);
  };

  xhr.open(options.method, `${options.api.host}/${options.api.endpoint.eth}`);

  xhr.send();
};

function writePageContents() {
  const allElements = Array.from(document.querySelectorAll(`[data-tld]`));
  const chatLink = `https://hns.chat/#message:${support.chatname}`;
  const verifyLink = `https://niami/domain/${tld.replace(".","")}`;
  allElements.forEach(element => {
    const t = element.innerText;
    const r = t.replace("{{tld}}",tld);
    element.innerText = r;
  });
  document.body.querySelector(`#chat`).href = chatLink;
  document.body.querySelector(`#verify-renew`).href = verifyLink;
};

function loadNft() {
  const image = document.body.querySelector(`#nft`);
  const { url, alt, w, h } = nft;
  image.alt = alt;
  image.width = w;
  image.height = h;
  image.src = url;
};

function keydownHandler() {
  if (event.key === 'Enter') {
    const escaped = (event.target.value).toLowerCase();
    const domain = escaped + tld;
    const url = `https://impervious.domains/name/${domain}/register/`;
    location.target = '_blanc';
    location.href = url;
  };
};

function loadedHandler() {
  loadNft();
  writePageContents();
  fetchExchangeData();
};

document.addEventListener("DOMContentLoaded", 
  loadedHandler
, false);
