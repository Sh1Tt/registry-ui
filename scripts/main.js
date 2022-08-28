const { tld, color, nft, support, usd } = options = window.settings;

const card = document.body.querySelector(`#card`);
const input = document.body.querySelector(`#domainname`);
const showcase = document.body.querySelector(`[data-std="domainname"]`);
const price = document.body.querySelector(`[data-std="price"]`);

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
  if (window.eth != 'undefined') {
    const l = n.length - tld.length;
    console.log(l)
    const i = l >= 5 ? 4 : l;
    const x = parseInt((usd[i] / window.eth) * 1_000) / 1_000;
    price.innerText = `${x} ETH`;
  };
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
    const data = JSON.parse(xhr.response);
    window.eth = data.ethereum.usd;
    console.log(window.eth)
  };

  xhr.onerror = function() { // only triggers if the request couldn't be made at all
    alert(`Network Error`);
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
