// Simple partial include loader
// Place <div data-include="partials/header.html"></div>
// and this script will fetch and inject the partials.
(async function(){
  const includes = document.querySelectorAll('[data-include]');
  for(const el of includes){
    const url = el.getAttribute('data-include');
    try{
      const res = await fetch(url);
      if(res.ok){
        el.innerHTML = await res.text();
      } else {
        el.innerHTML = '';
        console.warn('Include fetch failed:', url, res.status);
      }
    }catch(e){
      console.warn('Include fetch error:', url, e);
    }
  }
  // Notify other scripts that includes are loaded
  window.dispatchEvent(new Event('includesLoaded'));
})();
