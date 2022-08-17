const handleKeyDown = e => {
  if (e.key === 'Enter') {
    const url = `https://impervious.domains/name/${e.target.value}${window.tld}/register/`;
    location.href = url;
  };
};

const loadedHandler = () => {
  const allElements = Array.from(document.querySelectorAll(`[data-tld="true"]`));
  allElements.forEach(element => {
    const t = element.innerText;
    const r = t.replace("{{tld}}",window.tld);
    console.log(t,r);
  });
};

(() => {
  document.addEventListener("DOMContentLoaded", loadedHandler, false);
})();