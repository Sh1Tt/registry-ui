const settings = require("/settings.json");

const reWriteTld = tld => {
  const allElements = Array.from(document.querySelectorAll());
  allElements.forEach(element => {
    console.log(element.innerText);
  })
};

const handleKeyDown = e => {
  if (e.key === 'Enter') {
    const url = `https://impervious.domains/name/${e.target.value}${yourtld}/register/`;
    location.href = url;
  };
};

const loadedHandler = () => {
  reWriteTld(settings.yourtld);
};

(() => {
  document.addEventListener("DOMContentLoaded", loadedHandler, false);
})();