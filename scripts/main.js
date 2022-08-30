const { tld, color, nft, support, usd } = options = window.settings;

const card = document.body.querySelector(`#card`);
const input = document.body.querySelector(`#domainname`);
const showcase = document.body.querySelector(`[data-std="domainname"]`);
const price = document.body.querySelector(`[data-std="price"]`);

const ETH_SAFE = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAFPklEQVRoge1Za2hbZRh+vjRdegnpSbJIliY5TQfNaltH2awTBK1oWQkKRahanfhLUfy14WVDhyKInT8GiqLVqYhO0LEKXpgyEGTekGHrhmUKzZpsMzQ0l+bk0qYnrz+aSIxJey7fYSB7/uU77/s975Pv9nznANfwPwcRjS0sLLx8tevQBCKyEVF0dnZWvnLlimgEh8mITqswCcBbLBZN2Wz2SyMIDBNARHsAPFL5nU6n+yKRyOO8eQwRQERbAByr7T+dTh8Nh8MCTy6jRuAQgOtrG1dWVrYQ0TRPIu4CiCgI4OlGz5PJ5G2XL1++ixcfVwFEZALwDoCWDWKQSqWOE5GZByfvEXgUwC2bBeXzeevFixc/4EHITQARbQPwktL4VCp1XyQSuVEvL88ReB2A4h1GlmWWy+U+00vKRQARjQEYU5snSZJHr83QLYCIbABe1ZqfSqWe1GMzeIzAJACv1mS9NkOXgFq7oBV6bIZmAY3sglZotRl6yOvahQqICMlkEhcuXMD09DTm5uYgy3LDzrTaDKY2oVxcEMAM6py4xWIRS0tLiMfjWF1dBQBMTU0BAFpbW9HT04P+/n60t7f/txjG4Ha77+7s7PxcaS2qj/NGdiGXyyEejyORSKBUKtXNzefzmJ2dxfnz5yGKInp7e9HZ2Vndd8Vm2Blja4YIQJVdKBNicXERkiQp7kCWZczPz2N+fh4ulws7duxAT08Pmpqaqm3GhJK+VE2hsl34vVgsCrXTZCNUptBGqJ5eNpuNnE7nTX6//5fN8lSNQCaT+SiRSAgbTROtqJlebGBg4DSAjs3yVO1CyWTylCRJBd7FV0OWZSQSCWSz2Rkl8aoEiKJ4pL293b5169YPzWYzdxUWiwVDQ0Px0dHRbePj47cqyVG9iAOBQAHAvlgsdliSpOPpdHoPEakuthqMMQSDwdX+/v6xkZGRr9TkqhJARPsAzDDGzrnd7jCAmyORyEg+nz+WyWQ0+SGv10u7du2aDIVCByttkUhkpFQq7e3q6tq/Wb7aETgJ4Cci+gHAs4yxuN/v/waAb2Fh4alMJvNCoVBoeJ2shiAI2L1793fVUyUWiwUkSTq+vLw8aLVaA0r6UX0SE9EAgJ8BFLDuRI8yxlYBIBwOtzDG3k6lUhNra2v/rK/qbdRisWDnzp3x7du33zA8PByrzZNl2eRyuSb8fv/Hhggoi3gCwGvln39gfTQ+rTyv/JOV9TE1NdVwnteOnNPp/CQQCNyrtBZNAsoiTuLft7DTAPYzxs5VGi5duhSSJOm9EydOOAcHB18MhULPV55Fo9HRbDb7viRJ11XarFZrLBgMehhjincFPQIEAL8C6KpqXgPwLsrro15e7ehU0NzcLDscjl6fz/enmjo0CwAAIhoCcAZAc82jJBSuD2B9G3W5XI/5/f431dagSwAAENFBNH6dMgfgQDQaHVxeXj5cKBQs9YIcDsfX3d3de7Xw8xBgAnAKwJ2NYs6ePdswv62tLUlE7r6+vs1dYR3ovg4yxkoAHgTwl9pcs9lcstlst2stHuB0n2WMLQJ4AEDjO2Md2O32Q16vV5FpawRub+YYY98CeEVpvCAIP4qiOKmXl/fL3ecAfL9ZUGtra7atre0OHoRcBZTvsfcDWGoU09TURHa7fa/H48nx4OT+gYMxFgXwMIC6p6nD4Tji8XjO8OIz5BMTY+wLAG/UtguC8Jsois/w5DLyM+sBrFsNAEBLS0vBYrEM8yYxTABjbAXAOICMyWRCR0fHPT6fL2EUn2EgoofC4fBbV7uOazAKfwPHb1lOH1JLlAAAAABJRU5ErkJggg==`;
const ETH = `data:image/png;base64,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`;

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
    console.log(l);
    if (l >= 1) {
      const i = (l >= 5 ? 5 : l) -1;
      const x = (usd[i] / window.eth).toFixed(3);
      price.innerHTML = `<img style="padding:0 .25em;" src="${ETH}" alt="eth crypto logo" width="24" height="24" /> ${x}`;
    }
    else {
      price.innerText = "";
    };
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
