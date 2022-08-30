const { tld, color, nft, support, usd } = options = window.settings;

const card = document.body.querySelector(`#card`);
const input = document.body.querySelector(`#domainname`);
const showcase = document.body.querySelector(`[data-std="domainname"]`);
const price = document.body.querySelector(`[data-std="price"]`);

const ETHEREUM = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAFPklEQVRoge1Za2hbZRh+vjRdegnpSbJIliY5TQfNaltH2awTBK1oWQkKRahanfhLUfy14WVDhyKInT8GiqLVqYhO0LEKXpgyEGTekGHrhmUKzZpsMzQ0l+bk0qYnrz+aSIxJey7fYSB7/uU77/s975Pv9nznANfwPwcRjS0sLLx8tevQBCKyEVF0dnZWvnLlimgEh8mITqswCcBbLBZN2Wz2SyMIDBNARHsAPFL5nU6n+yKRyOO8eQwRQERbAByr7T+dTh8Nh8MCTy6jRuAQgOtrG1dWVrYQ0TRPIu4CiCgI4OlGz5PJ5G2XL1++ixcfVwFEZALwDoCWDWKQSqWOE5GZByfvEXgUwC2bBeXzeevFixc/4EHITQARbQPwktL4VCp1XyQSuVEvL88ReB2A4h1GlmWWy+U+00vKRQARjQEYU5snSZJHr83QLYCIbABe1ZqfSqWe1GMzeIzAJACv1mS9NkOXgFq7oBV6bIZmAY3sglZotRl6yOvahQqICMlkEhcuXMD09DTm5uYgy3LDzrTaDKY2oVxcEMAM6py4xWIRS0tLiMfjWF1dBQBMTU0BAFpbW9HT04P+/n60t7f/txjG4Ha77+7s7PxcaS2qj/NGdiGXyyEejyORSKBUKtXNzefzmJ2dxfnz5yGKInp7e9HZ2Vndd8Vm2Blja4YIQJVdKBNicXERkiQp7kCWZczPz2N+fh4ulws7duxAT08Pmpqaqm3GhJK+VE2hsl34vVgsCrXTZCNUptBGqJ5eNpuNnE7nTX6//5fN8lSNQCaT+SiRSAgbTROtqJlebGBg4DSAjs3yVO1CyWTylCRJBd7FV0OWZSQSCWSz2Rkl8aoEiKJ4pL293b5169YPzWYzdxUWiwVDQ0Px0dHRbePj47cqyVG9iAOBQAHAvlgsdliSpOPpdHoPEakuthqMMQSDwdX+/v6xkZGRr9TkqhJARPsAzDDGzrnd7jCAmyORyEg+nz+WyWQ0+SGv10u7du2aDIVCByttkUhkpFQq7e3q6tq/Wb7aETgJ4Cci+gHAs4yxuN/v/waAb2Fh4alMJvNCoVBoeJ2shiAI2L1793fVUyUWiwUkSTq+vLw8aLVaA0r6UX0SE9EAgJ8BFLDuRI8yxlYBIBwOtzDG3k6lUhNra2v/rK/qbdRisWDnzp3x7du33zA8PByrzZNl2eRyuSb8fv/Hhggoi3gCwGvln39gfTQ+rTyv/JOV9TE1NdVwnteOnNPp/CQQCNyrtBZNAsoiTuLft7DTAPYzxs5VGi5duhSSJOm9EydOOAcHB18MhULPV55Fo9HRbDb7viRJ11XarFZrLBgMehhjincFPQIEAL8C6KpqXgPwLsrro15e7ehU0NzcLDscjl6fz/enmjo0CwAAIhoCcAZAc82jJBSuD2B9G3W5XI/5/f431dagSwAAENFBNH6dMgfgQDQaHVxeXj5cKBQs9YIcDsfX3d3de7Xw8xBgAnAKwJ2NYs6ePdswv62tLUlE7r6+vs1dYR3ovg4yxkoAHgTwl9pcs9lcstlst2stHuB0n2WMLQJ4AEDjO2Md2O32Q16vV5FpawRub+YYY98CeEVpvCAIP4qiOKmXl/fL3ecAfL9ZUGtra7atre0OHoRcBZTvsfcDWGoU09TURHa7fa/H48nx4OT+gYMxFgXwMIC6p6nD4Tji8XjO8OIz5BMTY+wLAG/UtguC8Jsois/w5DLyM+sBrFsNAEBLS0vBYrEM8yYxTABjbAXAOICMyWRCR0fHPT6fL2EUn2EgoofC4fBbV7uOazAKfwPHb1lOH1JLlAAAAABJRU5ErkJggg==`;
const ETH = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAFFElEQVR4nO2bX4hVRRzHZ/bq+q9trcQstVxSMrSNWqIwI4jAIh9CNlCTXkQ3SPGhol6SHiREisiKEBKiiLIye1jqwa0UlYoSNFrxYbeW/m3E9merddPdez89zFzu3HPPn7ln5py7xf0+nTNn5vf9/ubOOTO/38wVookmmmiiiXwBtABbgOn6vqd8nTda8iYEFggheoUQd0gpJ3Tx1UKIk0Bn3npyBXA/8CswClxplM8A+oFx4HEg9x8mUwDtwOtU8HBInVuBSf38MLCoEVq9A7gL+N5w/kugEFF3r1HvD2BT3nq9AZgJ7AaKhlNF4JaYNrOBAarxNnBpntqdAVwPnKYWL1q0vRMoBdoNA/fkod0JenrbAZwPcf5nYK6lnf0h7UvAPmB21n6kArAEOBoivIyNddhqB36IsNMP3JSlL3UDeBD4M8b5I4Cs0+baGHsTwFNEfExzA2r+fitGKKjXYXlK+wcSbB8BrvDtl624VuCTBIEAuxw45gMjCfaHgS6fvtmK22Ph/CAwy5FnkwXPKHC7L99sRC0ELlgIW+uJ733LTrjBB5+NoCctBB30yLdIO5iEb7Gcal0FfZgg5C9gsWfOHosOADjgkzdKzNcJIh7JgFOigiQb3JsF+Srj/mwM+VfANK8CKrxLgTGLDjiDZUhtG3evE0J0G/e/RGkUQmyXUk5a2q0LUsoBIcROi6rXiWq9bkDN98eM+5cjev4Vb6TRWlqAExaj4KgvwiWoQGQcaNNlG0MIR4B5XkiTNa0kPOAyUQI6fJBtM4yu12XtukNMbHYmq0/XTotRsM0H0SHD4GGj3HwNjlNnsONBVyvhOQcT7/kgGgoMq2t1eYceBRM0KJsL3Ej8ivQbV4JZ1GZnXjWePwY84+yJm8a4mKQEtLoY7wgxOmmMggINztDoHymYRzRxVVz7pHVAW0hZQQixWwghpJRFKeW5lNq9QEo5LoSoSbMbuCi1caAzpmf9LjcdQXTEuMLFaNgrUMYAjrG+K1Bp9IK+Xob6IAeRfoNFv19x2OPNm3T6nsUIvIDXAvpKwAxXkqGg1wYmgZudPUmnq1P/4ufQHzpgOdWz1qAPokM1blfjNC5TTTpNEpUQLeN541mfUf6uD7LtCR0AYBOheQOwOcD/NzBHP9tglD/kg+waahdDQZwHVjqT2emZR3imuFs/b0OtUIskrAHqIT1mMQo+J4eNCsK3zQBeMOocx4hbfJCut+gAyCAVFtBxG9Gj8WOj3nPAfT6JC8SnwcoYA5Z6I67WMA2VbotCv1F3Fb6jU2CN5Sioex/Qkv/RBN5TvjnDRCTt1ZXR45l3MSrVHoden5xRQuaiNh+SMIrHMz7AQQvOJ3zxJYlZAfxmIegDT3x3W3BdABb64LMVtRq7rSqnQ06oWGTQgudpX77VI64L+ClB2Agw34Fjl4XzfTTolKkAFlC9Jg9Dqr06VGCTlPp+E9dozxVUDkb9EyN0XQq7fTH2xoAdWfiTGqjNilMRgoeBS+qw9UCM858Cy7L0JTUIPxxZxn5LGxcDP4a0nxoHo2yAOuz4XYgTayzavhTS7gyNOAfkAtT22b6AI0Po/cWINl1UDkxD5XDknDy1ewXQTXX8vjeiXgvwmVFvmCmWeU4N1HTZqx0rAqtD6pibsO8AlzVCa2ZA5fG2otJXZ4GZxrPLgd9RR+S3NlJn5kAtcL7AWL4CbwAf4flg1ZQFMB0dMuvrLfzf/ibTRBNNNPFfwL9k7T6BX3U+mwAAAABJRU5ErkJggg==`;

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
