const reWriteTld = tld => {
  const allElements = Array.from(document.querySelectorAll(`[data-tld="true"]`));
  allElements.forEach(element => {
    console.log(element.innerText);
  })
};

const handleKeyDown = e => {
  if (e.key === 'Enter') {
    const url = `https://impervious.domains/name/${e.target.value}${window.settings.tld}/register/`;
    location.href = url;
  };
};

const loadedHandler = () => {
  reWriteTld(window.settings.tld);
};

(() => {
  document.addEventListener("DOMContentLoaded", loadedHandler, false);
})();